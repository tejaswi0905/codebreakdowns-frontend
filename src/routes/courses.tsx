import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  AlertCircle,
  ArrowLeft,
  Lock,
  Sparkles,
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
import {
  fetchCoursePlayData,
  fetchCourses,
  fetchMyCourses,
  markLessonComplete,
  markLessonCompletedApi,
  toggleBookmarkApi,
} from "@/services/api";
import { BunnyPlayer } from "@/components/BunnyPlayer";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

const courseSearchSchema = z.object({
  courseId: z.string().optional(),
  lessonId: z.string().optional(),
});

export const Route = createFileRoute("/courses")({
  validateSearch: courseSearchSchema,
  head: () => ({
    meta: [
      { title: "Course Curriculum & Player — CodeBreakdowns" },
      {
        name: "description",
        content: "Explore structured breakdowns of DSA patterns, systems concepts, and real-world engineering modules.",
      },
    ],
  }),
  component: CoursePlayerPage,
});

function CoursePlayerPage() {
  const { courseId, lessonId } = Route.useSearch();
  return <CoursePlayerContent courseId={courseId} initialLessonId={lessonId} />;
}

function CoursePlayerContent({ courseId, initialLessonId }: { courseId?: string; initialLessonId?: string }) {
  const navigate = useNavigate();

  const { data: allCourses, isLoading: loadingCourses } = useQuery({
    queryKey: ["all-courses"],
    queryFn: fetchCourses,
  });

  useEffect(() => {
    if (!courseId) {
      const lastCourseId = localStorage.getItem("codebreakdowns_last_course");
      if (lastCourseId) {
        navigate({ to: "/courses", search: { courseId: lastCourseId }, replace: true });
      } else if (allCourses && allCourses.length > 0) {
        navigate({ to: "/courses", search: { courseId: allCourses[0].id }, replace: true });
      }
    } else {
      localStorage.setItem("codebreakdowns_last_course", courseId);
    }
  }, [courseId, allCourses, navigate]);

  if (!courseId) {
    if (loadingCourses) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <p className="text-muted-foreground mt-2">Loading courses...</p>
        </div>
      );
    }

    if (!allCourses || allCourses.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
          <AlertCircle className="h-12 w-12 text-muted-foreground mb-4 opacity-70" />
          <h2 className="text-xl font-bold">No Courses Available</h2>
          <p className="text-muted-foreground mt-2 max-w-sm text-sm">
            Our course catalog is currently being updated. Please check back soon or browse our products!
          </p>
          <Button asChild className="mt-6">
            <Link to="/products">Browse Bundles</Link>
          </Button>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
        <p className="text-muted-foreground mt-2">Opening curriculum...</p>
      </div>
    );
  }

  return <CoursePlayer courseId={courseId} initialLessonId={initialLessonId} />;
}

function CoursePlayer({ courseId, initialLessonId }: { courseId: string; initialLessonId?: string }) {
  const { data: course, isLoading, error } = useQuery({
    queryKey: ["course-play", courseId],
    queryFn: () => fetchCoursePlayData(courseId),
    retry: 1,
    refetchOnWindowFocus: false, // Prevents video player reloads when switching browser tabs
  });

  const { data: myCourses } = useQuery({
    queryKey: ["my-courses"],
    queryFn: fetchMyCourses,
  });

  const { data: allCourses } = useQuery({
    queryKey: ["all-courses"],
    queryFn: fetchCourses,
  });

  const navigate = useNavigate();
  const [lessonId, setLessonId] = useState<string | null>(initialLessonId || null);

  useEffect(() => {
    if (initialLessonId) {
      setLessonId(initialLessonId);
    }
  }, [initialLessonId]);

  useEffect(() => {
    if (course && !lessonId) {
      const savedLessonId = initialLessonId || localStorage.getItem(`codebreakdowns_last_lesson_${course.id}`);
      let lessonExists = false;
      if (savedLessonId) {
        for (const chapter of course.chapters) {
          if (chapter.lessons.some((l: any) => l.id === savedLessonId)) {
            lessonExists = true;
            break;
          }
        }
      }

      if (lessonExists && savedLessonId) {
        setLessonId(savedLessonId);
      } else if (course.chapters.length > 0 && course.chapters[0].lessons.length > 0) {
        setLessonId(course.chapters[0].lessons[0].id);
      }
    }
  }, [course, lessonId, initialLessonId]);

  useEffect(() => {
    if (course && lessonId) {
      localStorage.setItem(`codebreakdowns_last_lesson_${course.id}`, lessonId);
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

  const previewLessonId = useMemo(() => {
    if (!course) return undefined;
    for (const ch of course.chapters) {
      const prev = ch.lessons.find((l: any) => l.isPreview);
      if (prev) return prev.id;
    }
    return undefined;
  }, [course]);

  const defaultOpenChapter = useMemo(() => {
    if (!course) return undefined;
    if (!lessonId) return course.chapters[0]?.id;
    for (const chapter of course.chapters) {
      if (chapter.lessons.some((l: any) => l.id === lessonId)) return chapter.id;
    }
    return course.chapters[0]?.id;
  }, [course, lessonId]);

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
        <div className="w-[320px] h-full bg-card animate-pulse rounded-2xl" />
        <div className="flex-1 h-full bg-card animate-pulse rounded-2xl" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <AlertCircle className="h-12 w-12 text-destructive mb-4 opacity-80" />
        <h2 className="text-2xl font-bold">Course Not Found</h2>
        <p className="text-muted-foreground mt-2 max-w-sm text-sm">
          We couldn't load this course. It may be unpublished or does not exist yet.
        </p>
        <Button asChild className="mt-6">
          <Link to="/products">Browse All Courses</Link>
        </Button>
      </div>
    );
  }

  const courseList = allCourses && allCourses.length > 0 ? allCourses : myCourses || [];

  return (
    <div className="mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8 py-4 sm:py-6 min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_1fr] xl:grid-cols-[320px_minmax(350px,1.2fr)_minmax(500px,1.5fr)] gap-6 lg:h-full">
        
        {/* LEFT SIDEBAR */}
        <div className="flex flex-col gap-4 order-2 lg:order-1 lg:h-full lg:overflow-hidden">
          
          {/* Current Course Selector */}
          <Card className="p-4 bg-card border-border shrink-0 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Button variant="ghost" size="icon" asChild className="h-6 w-6 -ml-1 hover:bg-foreground/5">
                <Link to="/overview" search={{ courseId }}><ArrowLeft className="h-3.5 w-3.5" /></Link>
              </Button>
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Current Course
              </div>
            </div>
            <Select 
              value={course.id} 
              onValueChange={(val) => {
                navigate({ to: "/courses", search: { courseId: val } });
              }}
            >
              <SelectTrigger className="w-full bg-background border-border shadow-sm h-10 rounded-xl text-sm font-medium">
                <SelectValue>{course.title}</SelectValue>
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {courseList.map((c: any) => {
                  const isEnrolled = myCourses?.some((m: any) => m.id === c.id);
                  return (
                    <SelectItem key={c.id} value={c.id} className="rounded-lg text-sm">
                      <div className="flex items-center justify-between w-full gap-2">
                        <span>{c.title}</span>
                        {isEnrolled && (
                          <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            Enrolled
                          </span>
                        )}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </Card>

          {/* Progress Bar */}
          <Card className="p-5 bg-card border-border shrink-0 rounded-2xl shadow-sm">
            <div className="flex items-end justify-between mb-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Course Progress
              </div>
              <div className="text-xl font-bold leading-none">{pct}%</div>
            </div>
            <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-700 ease-out rounded-full" 
                style={{ width: `${pct}%` }} 
              />
            </div>
            <div className="mt-3 text-xs text-muted-foreground font-medium flex items-center justify-between">
              <span>{progress.completed} / {progress.total} Lessons Completed</span>
              {!course.isPurchased && !course.isFree && (
                <span className="text-primary font-semibold">Preview Mode</span>
              )}
            </div>
          </Card>

          {/* Chapters Accordion */}
          <Card className="bg-card border-border overflow-hidden rounded-2xl flex flex-col shadow-sm max-h-[380px] lg:max-h-none lg:flex-1">
            <ScrollArea className="flex-1">
              <Accordion 
                type="multiple" 
                defaultValue={defaultOpenChapter ? [defaultOpenChapter] : []}
                className="w-full"
              >
                {course.chapters.map((chapter: any) => {
                  const isChapterLocked = course.enforceLinearProgress && chapter.states && chapter.states.length > 0 && chapter.states[0].isUnlocked === false;
                  return (
                    <AccordionItem 
                      value={chapter.id} 
                      key={chapter.id} 
                      className="border-b border-border last:border-0"
                    >
                      <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-foreground/5 transition-colors group">
                        <div className="flex items-center justify-between w-full pr-4">
                          <div className="font-semibold text-sm group-hover:text-foreground text-foreground/90 transition-colors text-left flex items-center gap-1.5">
                            {chapter.title}
                            {isChapterLocked && <Lock className="w-3.5 h-3.5 text-muted-foreground" />}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">
                            {chapter.lessons.length}
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="pb-3 px-3 pt-1">
                        {chapter.lessons.length === 0 ? (
                          <div className="text-sm text-muted-foreground italic px-2 py-2">
                            No lessons in this module yet.
                          </div>
                        ) : (
                          <div className="space-y-1">
                            {chapter.lessons.map((l: any) => {
                              const isCompleted = l.progress && l.progress.length > 0 && l.progress[0].isCompleted;
                              const isBookmarked = l.progress && l.progress.length > 0 && l.progress[0].isBookmarked;
                              const isSelected = lessonId === l.id;
                              const isLessonLocked = l.isLocked || (!course.isPurchased && !course.isFree && !l.isPreview);

                              let status: "completed" | "current" | "todo" = "todo";
                              if (isCompleted) status = "completed";
                              else if (isSelected) status = "current";

                              return (
                                <button
                                  key={l.id}
                                  onClick={() => {
                                    if (isChapterLocked) {
                                      toast.info("Please complete previous modules to unlock this chapter.");
                                      return;
                                    }
                                    setLessonId(l.id);
                                  }}
                                  className={cn(
                                    "w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 group relative",
                                    isSelected 
                                      ? "bg-primary/10 border border-primary/20" 
                                      : "hover:bg-foreground/5 border border-transparent",
                                    isChapterLocked && "opacity-60 cursor-not-allowed"
                                  )}
                                >
                                  <div className="mt-0.5 shrink-0">
                                    {status === "completed" ? (
                                      <CheckCircle2 className="h-4 w-4 text-success" />
                                    ) : isChapterLocked || isLessonLocked ? (
                                      <Lock className="h-4 w-4 text-muted-foreground/50" />
                                    ) : status === "current" ? (
                                      <div className="h-4 w-4 rounded-full border-2 border-primary flex items-center justify-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                      </div>
                                    ) : (
                                      <Circle className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className={cn(
                                        "text-sm font-medium truncate transition-colors",
                                        isSelected ? "text-primary font-bold" : "text-foreground/90 group-hover:text-foreground"
                                      )}>
                                        {l.title}
                                      </div>
                                      <div className="flex items-center gap-1.5 shrink-0">
                                        {l.isPreview && (
                                          <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                            Preview
                                          </span>
                                        )}
                                        {isBookmarked && (
                                          <Bookmark className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-[11px] font-medium text-muted-foreground">
                                      <span>{Math.floor(l.durationSeconds / 60)}m {l.durationSeconds % 60}s</span>
                                      {l.isProblem && (
                                        <>
                                          <span className="opacity-50">•</span>
                                          <span className="text-success">Problem</span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </ScrollArea>
          </Card>
        </div>

        {/* MAIN CONTENT AREA */}
        {currentLesson ? (
          <Workspace 
            lesson={currentLesson} 
            courseId={courseId} 
            courseTitle={course.title}
            courseIsPurchased={course.isPurchased || course.isFree}
            previewLessonId={previewLessonId}
            onSelectLesson={setLessonId}
            enforceLinearProgress={course.enforceLinearProgress} 
          />
        ) : (
          <div className="order-1 lg:order-2 lg:col-span-2 h-full flex flex-col justify-center items-center py-6 lg:py-0 lg:pb-20">
            <Card className="flex flex-col items-center justify-center p-12 text-center bg-card border-border rounded-2xl max-w-lg">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <ChevronDown className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold">Select a lesson to begin</h2>
              <p className="text-muted-foreground mt-2">
                Choose a module from the left sidebar to start exploring.
              </p>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
}

function LockedLessonCard({
  lessonTitle,
  courseTitle,
  previewLessonId,
  onSelectPreview,
}: {
  lessonTitle: string;
  courseTitle: string;
  previewLessonId?: string;
  onSelectPreview?: (id: string) => void;
}) {
  const { isAuthenticated } = useAuthStore();

  return (
    <div className="relative aspect-video w-full rounded-2xl bg-gradient-to-br from-card via-card/95 to-primary/10 flex flex-col items-center justify-center text-center p-6 sm:p-8 border border-border/80 shadow-inner overflow-hidden">
      {/* Decorative ambient auras */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary border border-primary/30 shadow-md mb-4 animate-in fade-in zoom-in duration-300">
          <Lock className="h-7 w-7" />
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm mb-2.5">
          <span>{courseTitle}</span>
          <span className="opacity-40">•</span>
          <span className="text-primary font-bold">Premium Lesson</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground line-clamp-1 mb-2">
          {lessonTitle}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
          This lesson is locked. Enroll in the course or bundle to unlock full video breakdowns, multi-language solutions, and interview playbooks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <Button
            asChild
            size="default"
            className="rounded-xl px-5 font-semibold shadow-md bg-primary text-primary-foreground hover:shadow-lg transition-all"
          >
            <Link to="/products">
              <Sparkles className="mr-2 h-4 w-4" /> Unlock Course
            </Link>
          </Button>

          {!isAuthenticated ? (
            <Button asChild variant="outline" size="default" className="rounded-xl px-4 text-xs font-medium">
              <Link to="/login">
                Already own it? Sign In
              </Link>
            </Button>
          ) : (
            previewLessonId && onSelectPreview && (
              <Button
                variant="ghost"
                size="default"
                onClick={() => onSelectPreview(previewLessonId)}
                className="rounded-xl px-4 text-xs text-muted-foreground hover:text-foreground"
              >
                Watch Free Sample Lesson →
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Workspace({ 
  lesson, 
  courseId, 
  courseTitle,
  courseIsPurchased,
  previewLessonId,
  onSelectLesson,
  enforceLinearProgress,
}: { 
  lesson: any;
  courseId: string;
  courseTitle: string;
  courseIsPurchased?: boolean;
  previewLessonId?: string;
  onSelectLesson?: (id: string) => void;
  enforceLinearProgress?: boolean;
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [completeLoading, setCompleteLoading] = useState(false);

  const isBookmarked = lesson.progress?.[0]?.isBookmarked || false;
  const isCompleted = lesson.progress?.[0]?.isCompleted || false;
  const initialTimestamp = lesson.progress?.[0]?.highestTimestampSecs || 0;

  const isLocked = lesson.isLocked || (!courseIsPurchased && !lesson.isPreview);

  const bookmarkMutation = useMutation({
    mutationFn: (newVal: boolean) => toggleBookmarkApi(lesson.id, newVal),
    onMutate: async (newVal) => {
      await queryClient.cancelQueries({ queryKey: ["course-play", courseId] });
      const previousCourse = queryClient.getQueryData(["course-play", courseId]);

      queryClient.setQueryData(["course-play", courseId], (old: any) => {
        if (!old) return old;
        const newChapters = old.chapters.map((ch: any) => ({
          ...ch,
          lessons: ch.lessons.map((l: any) => {
            if (l.id === lesson.id) {
              const prog = l.progress ? [...l.progress] : [{}];
              prog[0] = { ...prog[0], isBookmarked: newVal };
              return { ...l, progress: prog };
            }
            return l;
          }),
        }));
        return { ...old, chapters: newChapters };
      });

      return { previousCourse };
    },
    onError: (err, newVal, context: any) => {
      if (context?.previousCourse) {
        queryClient.setQueryData(["course-play", courseId], context.previousCourse);
      }
      toast.error("Failed to update bookmark");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
      queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
    },
  });

  if (!lesson) return null;

  // Parse JSON description if it exists
  let meta = { 
    text: lesson.description || "", 
    prerequisites: ["Arrays", "Basic greedy intuition"], 
    objectives: ["Track the minimum price seen so far", "Maintain a running maximum profit", "Solve in a single pass with O(1) space"], 
    outcome: "You'll master the min-so-far pattern and understand how it generalises to more complex stock problems." 
  };
  if (lesson.description) {
    try {
      const parsed = JSON.parse(lesson.description);
      if (parsed.text !== undefined) meta = parsed;
    } catch(e) {
      meta.text = lesson.description;
    }
  }

  return (
    <>
      {/* COLUMN 2: Metadata (Left of Video) */}
      <div className="flex flex-col gap-4 order-3 lg:order-2 lg:h-full lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-2 pb-6">
        <Card className="p-6 bg-card border-border rounded-2xl shadow-sm shrink-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
              {lesson.isProblem ? "Problem Breakdown" : "Concept Lesson"}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Duration: {Math.floor(lesson.durationSeconds / 60)} mins
            </span>
            {lesson.isPreview && (
              <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Free Preview
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-3">
            {lesson.title}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
            {meta.text || "Learn how to tackle this question using an optimal mental model, identifying the underlying pattern and writing clean code."}
          </p>
        </Card>

        {meta.prerequisites && meta.prerequisites.length > 0 && (
          <Card className="p-5 bg-card border-border rounded-2xl shadow-sm shrink-0">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Prerequisites
            </div>
            <div className="flex flex-wrap gap-2">
              {meta.prerequisites.map((p: string) => (
                <Badge key={p} variant="secondary" className="bg-background border-border text-muted-foreground hover:bg-foreground/5 rounded-md shadow-sm font-medium">
                  {p}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {meta.objectives && meta.objectives.length > 0 && (
          <Card className="p-5 bg-card border-border rounded-2xl shadow-sm shrink-0">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Learning Objectives
            </div>
            <ul className="space-y-3">
              {meta.objectives.map((o: string) => (
                <li key={o} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {meta.outcome && (
          <Card className="p-5 bg-card border-border rounded-2xl shadow-sm shrink-0">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Expected Outcome
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {meta.outcome}
            </p>
          </Card>
        )}
      </div>

      {/* COLUMN 3: Video Player & Action Bar (Right side) */}
      <div className="flex flex-col gap-4 order-1 lg:order-3 lg:h-full lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-2 pb-6">
        <Card className="overflow-hidden p-0 bg-background border-border relative z-10 shadow-lg shrink-0 rounded-2xl">
          {isLocked ? (
            <LockedLessonCard 
              lessonTitle={lesson.title}
              courseTitle={courseTitle}
              previewLessonId={previewLessonId}
              onSelectPreview={onSelectLesson}
            />
          ) : !lesson.videoUrlOrId ? (
            <div className="relative aspect-video w-full rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-center p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-3">
                <Play className="h-6 w-6 ml-0.5" />
              </div>
              <h3 className="text-base font-bold text-foreground">Video Processing</h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-xs">
                The video stream for &ldquo;{lesson.title}&rdquo; is being processed. Please check back shortly.
              </p>
            </div>
          ) : (
            <BunnyPlayer 
              lessonId={lesson.id}
              videoUrlOrId={lesson.videoUrlOrId}
              isProblem={lesson.isProblem}
              explanationEndSeconds={lesson.explanationEndSeconds}
              initialTimestamp={initialTimestamp}
              isAlreadyCompleted={isCompleted}
              onLessonComplete={() => {
                queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
                queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
              }}
            />
          )}
        </Card>

        <div className="flex flex-wrap items-center gap-3 w-full bg-card border border-border p-3 rounded-xl shadow-sm shrink-0">
          <Button
            variant={isBookmarked ? "default" : "outline"}
            size="sm"
            className={cn(
              "gap-2 h-9 rounded-lg font-medium shadow-sm transition-all duration-200",
              isBookmarked 
                ? "bg-amber-500 hover:bg-amber-600 text-white border-amber-500" 
                : "hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
            )}
            onClick={() => {
              if (!isAuthenticated) {
                toast.info("Please sign in to bookmark lessons and save your progress.", {
                  action: {
                    label: "Sign In",
                    onClick: () => navigate({ to: "/login" }),
                  },
                });
                return;
              }
              const nextVal = !isBookmarked;
              bookmarkMutation.mutate(nextVal);
              toast.success(nextVal ? "Lesson bookmarked!" : "Bookmark removed");
            }}
          >
            <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current")} /> 
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </Button>
          {lesson.isProblem && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 h-9 rounded-lg font-medium shadow-sm hover:bg-foreground/5 text-muted-foreground hover:text-foreground"
              onClick={() => {
                if(lesson.problemUrl) window.open(lesson.problemUrl, "_blank");
                else toast.info("LeetCode link coming soon");
              }}
            >
              <ExternalLink className="h-4 w-4" /> Solve on LeetCode
            </Button>
          )}
          <div className="flex-1"></div>
          {isCompleted ? (
            <Button
              size="sm"
              variant="secondary"
              className="gap-2 h-9 rounded-lg font-bold shadow-sm bg-success/15 text-success hover:bg-success/20 cursor-default"
              disabled
            >
              <CheckCircle2 className="h-4 w-4 text-success" /> Completed
            </Button>
          ) : isLocked ? (
            <Button
              size="sm"
              variant="outline"
              className="gap-2 h-9 rounded-lg font-semibold shadow-sm opacity-60 cursor-not-allowed"
              disabled
            >
              <Lock className="h-3.5 w-3.5" /> Locked
            </Button>
          ) : (
            <Button
              size="sm"
              className="gap-2 h-9 rounded-lg font-bold shadow-sm"
              onClick={() => {
                if (!isAuthenticated) {
                  toast.info("Please sign in to track completed lessons.", {
                    action: { label: "Sign In", onClick: () => navigate({ to: "/login" }) },
                  });
                  return;
                }
                setCompleteLoading(true);
                markLessonCompletedApi(lesson.id).then((res) => {
                  setCompleteLoading(false);
                  if (res.success) {
                    toast.success("Marked as complete!");
                    queryClient.invalidateQueries({ queryKey: ["course-play", courseId] });
                    queryClient.invalidateQueries({ queryKey: ["dashboard-stats"] });
                  } else {
                    toast.error(res.error || "Could not complete lesson");
                  }
                });
              }}
              disabled={isLocked || completeLoading}
            >
              <Check className="h-4 w-4" /> {completeLoading ? "Saving..." : "Mark as Complete"}
            </Button>
          )}
        </div>

        {lesson.isProblem && (
          <Card className="p-5 bg-card border-border rounded-2xl shadow-sm mt-2 shrink-0">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Hints
            </div>
            <p className="text-sm text-muted-foreground italic">
              No hints available for this problem yet.
            </p>
          </Card>
        )}
      </div>
    </>
  );
}
