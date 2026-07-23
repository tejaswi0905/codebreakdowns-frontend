import { ProtectedRoute } from "@/components/ProtectedRoute";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import {
  Bookmark,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  ExternalLink,
  Play,
  PlayCircle,
  FileVideo,
  Code2,
  AlertCircle,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { toast } from "sonner";
import { markLessonComplete } from "@/services/api";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (!courseId) {
      const lastCourseId = localStorage.getItem("codebreakdowns_last_course");
      if (lastCourseId) {
        navigate({ to: "/courses", search: { courseId: lastCourseId }, replace: true });
      } else {
        navigate({ to: "/dashboard", replace: true });
      }
    } else {
      // Save the current course to localStorage
      localStorage.setItem("codebreakdowns_last_course", courseId);
    }
  }, [courseId, navigate]);

  if (!courseId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
        <p className="text-muted-foreground mt-2">Loading course...</p>
      </div>
    );
  }

  return <CoursePlayer courseId={courseId} />;
}

function CoursePlayer({ courseId }: { courseId: string }) {
  const { data: course, isLoading, error } = useQuery({
    queryKey: ["course-play", courseId],
    queryFn: () => fetchCoursePlayData(courseId),
    retry: 1,
  });

  const [lessonId, setLessonId] = useState<string | null>(null);

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

  const defaultOpenChapter = useMemo(() => {
    if (!course) return undefined;
    if (!lessonId) return course.chapters[0]?.id;
    for (const chapter of course.chapters) {
      if (chapter.lessons.some((l: any) => l.id === lessonId)) return chapter.id;
    }
    return course.chapters[0]?.id;
  }, [course, lessonId]);

  // Calculate Progress
  const progress = useMemo(() => {
    if (!course) return { completed: 0, total: 0 };
    let completed = 0;
    let total = 0;
    for (const chapter of course.chapters) {
      for (const lesson of chapter.lessons) {
        total++;
        if (lesson.progress && lesson.progress.length > 0 && lesson.progress[0].isCompleted) {
          completed++;
        }
      }
    }
    return { completed, total };
  }, [course]);

  const pct = progress.total ? Math.round((progress.completed / progress.total) * 100) : 0;

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
    <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 h-[calc(100vh-80px)] overflow-hidden">
      {/* 3 COLUMN LAYOUT */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,22fr)_minmax(0,33fr)_minmax(0,45fr)] h-full">
        
        {/* LEFT SIDEBAR - Curriculum */}
        <aside className="space-y-4 h-full flex flex-col">
          <Card className="p-4 bg-[#0a0a0a] border-white/5 shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <Button variant="ghost" size="icon" asChild className="h-6 w-6">
                <Link to="/dashboard"><ArrowLeft className="h-3 w-3" /></Link>
              </Button>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Current Course
              </div>
            </div>
            {/* Fake select that just shows the current course title */}
            <Select value={course.id} disabled>
              <SelectTrigger className="mt-2 h-10 w-full bg-black/40 border-white/10 opacity-100 text-foreground">
                <SelectValue>{course.title}</SelectValue>
              </SelectTrigger>
            </Select>
          </Card>

          <Card className="p-4 bg-[#0a0a0a] border-white/5 shrink-0">
            <div className="flex items-baseline justify-between">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Course Progress
              </div>
              <div className="text-lg font-semibold tracking-tight">{pct}%</div>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted border border-white/5">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {progress.completed} / {progress.total} Lessons Completed
            </div>
          </Card>

          <Card className="p-2 bg-[#0a0a0a] border-white/5 flex-1 min-h-0 overflow-hidden">
            <ScrollArea className="h-full pr-2">
              <Accordion
                type="single"
                collapsible
                defaultValue={defaultOpenChapter}
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
                        <span className="text-[11px] font-normal text-muted-foreground ml-2">
                          {chapter.lessons.length}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      {chapter.lessons.length === 0 ? (
                        <div className="px-2 py-3 text-xs text-muted-foreground">
                          Lessons coming soon.
                        </div>
                      ) : (
                        <ul className="space-y-1">
                          {chapter.lessons.map((l) => {
                            const isCompleted = l.progress && l.progress.length > 0 && l.progress[0].isCompleted;
                            const status = isCompleted ? "completed" : (lessonId === l.id ? "current" : "todo");
                            return (
                              <li key={l.id}>
                                <button
                                  type="button"
                                  onClick={() => setLessonId(l.id)}
                                  className={cn(
                                    "group w-full rounded-md px-2 py-2 text-left transition-colors",
                                    lessonId === l.id
                                      ? "bg-primary/10 text-foreground border border-primary/20"
                                      : "hover:bg-white/5 border border-transparent",
                                  )}
                                >
                                  <div className="flex items-start gap-2">
                                    <StatusIcon status={status} />
                                    <div className="min-w-0 flex-1">
                                      <div className="truncate text-sm font-medium">
                                        {l.title}
                                      </div>
                                      <div className="mt-0.5 flex items-center gap-2 text-[11px] text-muted-foreground">
                                        <span>{Math.floor(l.durationSeconds / 60)}m {l.durationSeconds % 60}s</span>
                                        {l.isProblem && (
                                          <>
                                            <span>·</span>
                                            <span className="text-purple-400">Problem</span>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </Card>
        </aside>

        {/* CENTER — lesson info */}
        <section className="space-y-4 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar pb-10">
          {currentLesson ? <LessonInfo lesson={currentLesson} /> : <EmptyLesson />}
        </section>

        {/* RIGHT — workspace */}
        <section className="space-y-4 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar pb-10">
          <Workspace lesson={currentLesson} courseId={courseId} />
        </section>

      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: "completed" | "current" | "todo" }) {
  if (status === "completed")
    return <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />;
  if (status === "current")
    return <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />;
  return (
    <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
  );
}

function LessonInfo({ lesson }: { lesson: any }) {
  // Parse JSON description if it exists
  let meta = { text: lesson.description || "", prerequisites: [], objectives: [], outcome: "" };
  if (lesson.description) {
    try {
      const parsed = JSON.parse(lesson.description);
      if (parsed.text !== undefined) meta = parsed;
    } catch(e) {
      // Not JSON, just use as text
    }
  }

  return (
    <>
      <Card className="p-6 bg-[#0a0a0a] border-white/5">
        <div className="flex flex-wrap items-center gap-2">
          {lesson.isProblem ? (
             <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
               Interactive Problem
             </Badge>
          ) : (
             <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
               Video Lesson
             </Badge>
          )}
          
          <Badge variant="secondary" className="font-normal bg-white/5 text-muted-foreground hover:bg-white/10">
            {Math.floor(lesson.durationSeconds / 60)}m {lesson.durationSeconds % 60}s
          </Badge>
        </div>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">
          {lesson.title}
        </h1>
        {meta.text && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
            {meta.text}
          </p>
        )}
      </Card>

      {meta.prerequisites && meta.prerequisites.length > 0 && (
        <InfoCard title="Prerequisites">
          <div className="flex flex-wrap gap-2">
            {meta.prerequisites.map((p: string) => (
              <Badge key={p} variant="secondary" className="font-normal bg-white/5 border border-white/10 text-foreground hover:bg-white/10">
                {p}
              </Badge>
            ))}
          </div>
        </InfoCard>
      )}

      {meta.objectives && meta.objectives.length > 0 && (
        <InfoCard title="Learning Objectives">
          <ul className="space-y-2">
            {meta.objectives.map((o: string) => (
              <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </InfoCard>
      )}

      {meta.outcome && (
        <InfoCard title="Expected Outcome">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {meta.outcome}
          </p>
        </InfoCard>
      )}
    </>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="p-5 bg-[#0a0a0a] border-white/5">
      <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      {children}
    </Card>
  );
}

function EmptyLesson() {
  return (
    <Card className="flex min-h-[400px] flex-col items-center justify-center p-10 text-center bg-[#0a0a0a] border-white/5 h-full">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
        <ChevronDown className="h-6 w-6" />
      </div>
      <h2 className="mt-4 text-lg font-semibold">Pick a lesson to begin</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Expand a section on the left and select a lesson to see its details here.
      </p>
    </Card>
  );
}

function Workspace({ lesson, courseId }: { lesson: any, courseId: string }) {
  const [notes, setNotes] = useState("");
  const queryClient = useQueryClient();
  
  if (!lesson) return null;

  return (
    <>
      <Card className="overflow-hidden p-0 bg-black border-white/5 relative z-10 shadow-xl shrink-0">
        {lesson.isLocked || !lesson.videoUrlOrId ? (
          <div className="relative aspect-video w-full bg-gradient-to-br from-black to-black/50">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-white/5 text-muted-foreground shadow-md backdrop-blur">
                 <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mt-4">Content Locked</h3>
              <div className="mt-2 text-sm text-muted-foreground max-w-[250px] text-center">
                Purchase this course to unlock this lesson.
              </div>
              <Button asChild className="mt-6" variant="default">
                 <Link to="/products">View Pricing</Link>
              </Button>
            </div>
          </div>
        ) : (
          <BunnyPlayer 
            lessonId={lesson.id}
            videoUrlOrId={lesson.videoUrlOrId}
            isProblem={lesson.isProblem}
            explanationEndSeconds={lesson.explanationEndSeconds}
          />
        )}
      </Card>

      <div className="flex flex-wrap items-center gap-2 shrink-0">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-white/10 hover:bg-white/5 text-muted-foreground hover:text-foreground"
          onClick={() => toast.success("Lesson bookmarked")}
          disabled={!lesson}
        >
          <Bookmark className="h-4 w-4" /> Bookmark
        </Button>
        {lesson.isProblem && lesson.problemUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-primary/20 text-primary hover:bg-primary/10"
            onClick={() => {
              window.open(lesson.problemUrl, "_blank");
            }}
            disabled={!lesson}
          >
            <ExternalLink className="h-4 w-4" /> Solve on LeetCode
          </Button>
        )}
        <Button
          size="sm"
          className="ml-auto gap-2 text-primary-foreground bg-primary/90 hover:bg-primary shadow-[0_0_15px_rgba(var(--color-primary),0.3)]"
          onClick={() => {
            import("@/services/api").then(({ markLessonComplete }) => {
              markLessonComplete(lesson.id).then(() => {
                toast.success("Marked as complete");
                queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
              });
            });
          }}
          disabled={!lesson || lesson.isLocked}
        >
          <Check className="h-4 w-4" /> Mark Complete
        </Button>
      </div>

      {lesson.isProblem && (
        <Card className="p-5 bg-[#0a0a0a] border-white/5 flex-1 flex flex-col min-h-[300px]">
          <div className="mb-3 flex items-center justify-between shrink-0">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Hints & Notes
            </div>
            <span className="text-[11px] text-muted-foreground">
              {notes.length} chars
            </span>
          </div>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Jot down key ideas, edge cases, or your own explanation while you learn…"
            className="flex-1 resize-none bg-black/40 border-white/10 text-sm"
          />
        </Card>
      )}
    </>
  );
}
