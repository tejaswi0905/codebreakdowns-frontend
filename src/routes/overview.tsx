import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchCoursePlayData, fetchDashboardStats } from "@/services/api";
import { z } from "zod";
import { 
  Play, 
  CheckCircle2, 
  Circle, 
  Lock, 
  AlertCircle, 
  ArrowLeft, 
  Layers, 
  Sparkles, 
  BookOpen, 
  Clock 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const overviewSearchSchema = z.object({
  courseId: z.string(),
});

export const Route = createFileRoute("/overview")({
  validateSearch: overviewSearchSchema,
  head: () => ({
    meta: [
      { title: "Course Overview & Roadmap — CodeBreakdowns" },
      {
        name: "description",
        content: "Track your modular milestone progression, solved problems, and course roadmap.",
      },
    ],
  }),
  component: CourseOverviewPage,
});

function CourseOverviewPage() {
  const { courseId } = Route.useSearch();
  return <CourseOverviewContent courseId={courseId} />;
}

function CourseOverviewContent({ courseId }: { courseId: string }) {
  const navigate = useNavigate();

  const { data: realCourse, isLoading, error } = useQuery({
    queryKey: ["course-play", courseId],
    queryFn: () => fetchCoursePlayData(courseId),
    retry: 1,
  });

  const { data: statsData } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchDashboardStats,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
        <p className="text-muted-foreground mt-2 text-sm">Loading course roadmap...</p>
      </div>
    );
  }

  // Error / Course Not Found State
  if (error || !realCourse) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4 border border-destructive/20">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Course Roadmap Unavailable</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          We could not load the curriculum for this course. You may not be enrolled, or the course ID is invalid.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline">
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Link>
          </Button>
          <Button asChild>
            <Link to="/products">Browse Course Catalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const chapters = realCourse.chapters || [];

  // Empty State: Course exists but has no published chapters yet
  if (chapters.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 min-h-[70vh]">
        <div className="mb-6">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        <Card className="border border-border p-8 sm:p-14 text-center rounded-2xl shadow-sm bg-card">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 border border-primary/20">
            <Layers className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {realCourse.title}
          </h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground mt-3 mb-4 border border-border">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Curriculum in Preparation
          </div>
          <p className="max-w-lg mx-auto text-sm text-muted-foreground leading-relaxed">
            The curriculum modules and lesson roadmaps for this course are currently being finalized. Once published, your lesson progression and interactive challenges will automatically appear here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline">
              <Link to="/dashboard">Back to My Courses</Link>
            </Button>
            <Button asChild>
              <Link to="/products">Explore Catalog</Link>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // --- REAL CURRICULUM PROGRESS CALCULATION ---
  let totalLessons = 0;
  let completedLessons = 0;
  let totalProblems = 0;
  let solvedProblems = 0;

  chapters.forEach((chapter) => {
    (chapter.lessons || []).forEach((lesson) => {
      totalLessons++;
      const isCompleted = Boolean(lesson.progress?.[0]?.isCompleted);
      if (isCompleted) completedLessons++;

      if (lesson.isProblem) {
        totalProblems++;
        if (isCompleted) solvedProblems++;
      }
    });
  });

  const hasProblems = totalProblems > 0;
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // Determine current milestone module and topic
  let currentModuleTitle = "All Modules Finished 🎉";
  let currentTopicTitle = "Course Completed";
  let foundActiveMilestone = false;

  for (const chapter of chapters) {
    for (const lesson of chapter.lessons || []) {
      const isCompleted = Boolean(lesson.progress?.[0]?.isCompleted);
      if (!isCompleted) {
        currentModuleTitle = chapter.title;
        currentTopicTitle = lesson.title;
        foundActiveMilestone = true;
        break;
      }
    }
    if (foundActiveMilestone) break;
  }

  // Circle SVG properties
  const radius = 90;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-[85vh] text-foreground">
      {/* Top Breadcrumb Header */}
      <div className="mb-6 flex items-center justify-between">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
          {chapters.length} {chapters.length === 1 ? "Module" : "Modules"} • {totalLessons} Lessons
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        
        {/* LEFT COLUMN: Progress & CTA */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Card className="bg-card border-border p-8 flex flex-col items-center shadow-lg rounded-2xl">
            
            {/* Circular Progress SVG */}
            <div className="relative flex items-center justify-center w-[220px] h-[220px] mb-8">
              <svg height={radius * 2} width={radius * 2} className="transform -rotate-90 drop-shadow-md">
                {/* Background Track */}
                <circle
                  stroke="rgba(255,255,255,0.06)"
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                {/* Progress Arc */}
                <circle
                  stroke="hsl(var(--primary))"
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference + " " + circumference}
                  style={{ strokeDashoffset }}
                  strokeLinecap="round"
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              {/* Center Text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold tracking-tight">{progressPercentage}%</span>
                <span className="text-xs tracking-widest text-muted-foreground uppercase mt-1">Complete</span>
              </div>
            </div>

            {/* Dynamic Course Info */}
            <div className="w-full space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm text-muted-foreground">Course</span>
                <span className="text-sm font-semibold truncate max-w-[180px] text-right" title={realCourse.title}>
                  {realCourse.title}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm text-muted-foreground">Current Module</span>
                <span className="text-sm font-semibold truncate max-w-[180px] text-right" title={currentModuleTitle}>
                  {currentModuleTitle}
                </span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-sm text-muted-foreground">Next Milestone</span>
                <span className="text-sm font-semibold truncate max-w-[180px] text-right text-primary" title={currentTopicTitle}>
                  {currentTopicTitle}
                </span>
              </div>
            </div>

            <Button 
              className="w-full py-6 text-base font-bold rounded-xl shadow-md hover:shadow-primary/25 transition-all"
              onClick={() => navigate({ to: "/courses", search: { courseId } })}
            >
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              Continue Learning
            </Button>
          </Card>
        </div>

        {/* RIGHT COLUMN: Stats & Roadmap */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Top Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {hasProblems ? (
              <>
                <Card className="bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-success mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-3xl font-extrabold text-foreground">{solvedProblems}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    Problems Solved
                  </span>
                </Card>

                <Card className="bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-3xl font-extrabold text-foreground">{totalProblems - solvedProblems}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    Problems Remaining
                  </span>
                </Card>
              </>
            ) : (
              <>
                <Card className="bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-success mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-3xl font-extrabold text-foreground">{completedLessons}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    Lessons Completed
                  </span>
                </Card>

                <Card className="bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-3xl font-extrabold text-foreground">{totalLessons - completedLessons}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    Lessons Remaining
                  </span>
                </Card>
              </>
            )}

            <Card className="bg-card border-border p-5 flex flex-col rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-3xl font-extrabold text-foreground">
                  {statsData?.metrics ? `${statsData.metrics.hoursLearned}h` : "0h"}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                Platform Hours Learned
              </span>
            </Card>
          </div>

          {/* Dynamic Course Roadmap List */}
          <Card className="bg-card border-border rounded-2xl flex-1 flex flex-col shadow-sm">
            <div className="p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {realCourse.title} Roadmap
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Structured learning path &amp; milestone checklist
                </p>
              </div>
              
              {/* Legend */}
              <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success"></div> Done
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div> Current
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full border border-muted-foreground/60"></div> Incomplete
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {chapters.map((chapter, index) => {
                // Determine real completion state
                const chapterLessons = chapter.lessons || [];
                const allLessonsComplete = 
                  chapterLessons.length > 0 && 
                  chapterLessons.every((l) => Boolean(l.progress?.[0]?.isCompleted));
                
                const isExplicitlyLocked = chapter.states?.[0]?.isUnlocked === false;
                
                let status: "done" | "locked" | "current" | "incomplete" = "incomplete";

                if (isExplicitlyLocked) {
                  status = "locked";
                } else if (chapter.states?.[0]?.isCompleted || allLessonsComplete) {
                  status = "done";
                } else if (chapter.title === currentModuleTitle) {
                  status = "current";
                }

                const completedInChapter = chapterLessons.filter((l) => Boolean(l.progress?.[0]?.isCompleted)).length;

                return (
                  <div 
                    key={chapter.id} 
                    onClick={() => navigate({ to: "/courses", search: { courseId } })}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer border ${
                      status === "current" 
                        ? "bg-primary/5 border-primary/30 shadow-sm" 
                        : status === "done"
                        ? "bg-muted/20 border-border/60 hover:bg-muted/40"
                        : status === "locked"
                        ? "opacity-60 border-border/40 cursor-not-allowed"
                        : "border-border/40 hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {status === "done" ? (
                        <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                      ) : status === "locked" ? (
                        <Lock className="w-5 h-5 text-muted-foreground shrink-0" />
                      ) : status === "current" ? (
                        <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                          <Circle className="w-5 h-5 text-primary absolute animate-pulse" />
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground/40 shrink-0" />
                      )}
                      
                      <div>
                        <div className={`text-sm font-semibold flex items-center gap-2 ${
                          status === "incomplete" || status === "locked" 
                            ? "text-muted-foreground" 
                            : "text-foreground"
                        }`}>
                          {chapter.title}
                          {status === "locked" && (
                            <span className="text-[10px] font-semibold bg-muted px-2 py-0.5 rounded text-muted-foreground">
                              Locked
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {completedInChapter} of {chapterLessons.length} lessons completed
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground font-mono tracking-wider opacity-60">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
