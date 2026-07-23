import { ProtectedRoute } from "@/components/ProtectedRoute";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import {
  CheckCircle2,
  Circle,
  PlayCircle,
  AlertCircle,
  FileVideo,
  Code2,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { fetchCoursePlayData } from "@/services/api";
import { BunnyPlayer } from "@/components/BunnyPlayer";

const courseSearchSchema = z.object({
  courseId: z.string().optional(),
});

export const Route = createFileRoute("/courses")({
  validateSearch: courseSearchSchema,
  head: () => ({
    meta: [
      { title: "Course Player — CodeBreakdowns" },
    ],
  }),
  component: CoursePlayerPage,
});

function CoursePlayerPage() {
  const { courseId } = Route.useSearch();
  const navigate = useNavigate();

  return (
    <ProtectedRoute>
      <CoursePlayerContent courseId={courseId} />
    </ProtectedRoute>
  );
}

function CoursePlayerContent({ courseId }: { courseId?: string }) {

  // If no courseId is provided in URL, show a fallback
  if (!courseId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
        <h2 className="text-2xl font-bold">No Course Selected</h2>
        <p className="text-muted-foreground mt-2 max-w-sm">
          Please select a course from your dashboard to start learning.
        </p>
        <Button asChild className="mt-6">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    );
  }

  return <CoursePlayer courseId={courseId} />;
}

function CoursePlayer({ courseId }: { courseId: string }) {
  const { data: course, isLoading, error } = useQuery({
    queryKey: ["course-play", courseId],
    queryFn: () => fetchCoursePlayData(courseId),
    retry: 1, // Don't spam retries if the user doesn't own it
  });

  const [lessonId, setLessonId] = useState<string | null>(null);

  // Set the first lesson automatically when data loads
  useEffect(() => {
    if (course && !lessonId) {
      if (course.chapters.length > 0 && course.chapters[0].lessons.length > 0) {
        setLessonId(course.chapters[0].lessons[0].id);
      }
    }
  }, [course, lessonId]);

  const currentLesson = useMemo(() => {
    if (!lessonId || !course) return null;
    for (const chapter of course.chapters) {
      const found = chapter.lessons.find((l: any) => l.id === lessonId);
      if (found) return found;
    }
    return null;
  }, [course, lessonId]);

  // Which chapter should the accordion have open by default?
  const defaultOpenChapter = useMemo(() => {
    if (!course) return undefined;
    if (!lessonId) return course.chapters[0]?.id;
    for (const chapter of course.chapters) {
      if (chapter.lessons.some((l: any) => l.id === lessonId)) return chapter.id;
    }
    return course.chapters[0]?.id;
  }, [course, lessonId]);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 h-screen flex gap-6">
        <div className="w-[300px] h-full bg-white/5 animate-pulse rounded-xl" />
        <div className="flex-1 h-full bg-white/5 animate-pulse rounded-xl" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <AlertCircle className="h-12 w-12 text-destructive mb-4 opacity-80" />
        <h2 className="text-2xl font-bold">Access Denied</h2>
        <p className="text-muted-foreground mt-2 max-w-sm">
          We couldn't load this course. You either don't own it, or it doesn't exist.
        </p>
        <Button asChild className="mt-6">
          <Link to="/products">Browse Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
          <Link to="/dashboard"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <h1 className="text-xl font-bold tracking-tight">{course.title}</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,25fr)_minmax(0,75fr)] xl:grid-cols-[300px_1fr]">
        
        {/* LEFT SIDEBAR - Curriculum */}
        <aside className="space-y-4">
          <Card className="p-2 border-white/5 bg-[#0a0a0a]">
            <ScrollArea className="h-[calc(100vh-12rem)] min-h-[400px] pr-2">
              <Accordion
                type="multiple"
                defaultValue={defaultOpenChapter ? [defaultOpenChapter] : []}
                className="w-full"
              >
                {course.chapters.map((chapter) => (
                  <AccordionItem
                    key={chapter.id}
                    value={chapter.id}
                    className="border-b border-border/60 last:border-0"
                  >
                    <AccordionTrigger className="px-2 py-3 text-sm font-medium hover:no-underline">
                      <span className="flex items-center gap-2 text-left">
                        {chapter.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      {chapter.lessons.length === 0 ? (
                        <div className="px-2 py-3 text-xs text-muted-foreground">
                          Coming soon.
                        </div>
                      ) : (
                        <ul className="space-y-1">
                          {chapter.lessons.map((lesson) => (
                            <li key={lesson.id}>
                              <button
                                type="button"
                                onClick={() => setLessonId(lesson.id)}
                                className={cn(
                                  "group w-full rounded-md px-2 py-2 text-left transition-colors flex items-start gap-2",
                                  lessonId === lesson.id
                                    ? "bg-primary/10 text-foreground border border-primary/20"
                                    : "hover:bg-white/5 border border-transparent",
                                )}
                              >
                                {lesson.isProblem ? (
                                  <Code2 className={cn("mt-0.5 h-4 w-4 shrink-0", lessonId === lesson.id ? "text-primary" : "text-muted-foreground")} />
                                ) : (
                                  <FileVideo className={cn("mt-0.5 h-4 w-4 shrink-0", lessonId === lesson.id ? "text-primary" : "text-muted-foreground")} />
                                )}
                                <div className="min-w-0 flex-1">
                                  <div className="truncate text-sm font-medium leading-tight">
                                    {lesson.title}
                                  </div>
                                  <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                                    <span>
                                      {Math.floor(lesson.durationSeconds / 60)}m {lesson.durationSeconds % 60}s
                                    </span>
                                  </div>
                                </div>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </Card>
        </aside>

        {/* MAIN CONTENT AREA */}
        <section className="space-y-4 flex flex-col h-[calc(100vh-8rem)]">
          {!currentLesson ? (
            <Card className="flex-1 flex items-center justify-center bg-black/40 border-white/5">
              <p className="text-muted-foreground">Select a lesson from the menu</p>
            </Card>
          ) : (
            <>
              {/* VIDEO PLAYER */}
              {currentLesson.isLocked || !currentLesson.videoUrlOrId ? (
                <div className="w-full aspect-video bg-black rounded-xl border border-white/10 overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="h-16 w-16 bg-muted/20 rounded-full flex items-center justify-center mb-4">
                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Content Locked</h3>
                    <p className="text-muted-foreground mt-2">Purchase this course to unlock this lesson.</p>
                    <Button asChild className="mt-6" variant="default">
                      <Link to="/products">View Pricing</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <BunnyPlayer 
                  lessonId={currentLesson.id}
                  videoUrlOrId={currentLesson.videoUrlOrId}
                  isProblem={currentLesson.isProblem}
                  explanationEndSeconds={currentLesson.explanationEndSeconds}
                />
              )}

              {/* LESSON DETAILS */}
              <Card className="p-6 border-white/5 bg-[#0a0a0a]">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {Math.floor(currentLesson.durationSeconds / 60)}m {currentLesson.durationSeconds % 60}s
                    </Badge>
                    {currentLesson.isProblem && (
                      <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 font-mono text-xs">
                        INTERACTIVE PROBLEM
                      </Badge>
                    )}
                  </div>
                  
                  {/* Manual Complete Button for Non-Problems */}
                  {!currentLesson.isProblem && !currentLesson.isLocked && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/20 text-primary hover:bg-primary/10"
                      onClick={() => {
                        import("@/services/api").then(({ markLessonComplete }) => {
                           markLessonComplete(currentLesson.id);
                           import("sonner").then(({ toast }) => toast.success("Lesson marked complete!"));
                        });
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Mark Complete
                    </Button>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold tracking-tight mt-2">
                  {currentLesson.title}
                </h2>
                
                {currentLesson.isProblem && currentLesson.problemUrl && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Practice Task</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      The video will automatically pause when the explanation finishes. 
                      Click below to practice the implementation yourself.
                    </p>
                    <Button asChild variant="default" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                      <a href={currentLesson.problemUrl} target="_blank" rel="noopener noreferrer">
                        Open Coding Environment <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </Card>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
