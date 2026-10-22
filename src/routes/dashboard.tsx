import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { 
  Play, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  LockOpen, 
  Bookmark, 
  Clock, 
  ArrowRight, 
  Flame, 
  Layers, 
  Compass, 
  GraduationCap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchMyCourses, fetchCourses, fetchDashboardStats, type ApiCourse } from "@/services/api";
import { useAuthStore } from "@/store/authStore";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — CodeBreakdowns" },
      {
        name: "description",
        content: "Track your enrolled courses, lesson progress, learning hours, and active milestones.",
      },
    ],
  }),
  component: () => (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
});

function DashboardPage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  
  // Fetch purchased courses
  const { data: myCourses, isLoading: loadingMy, error: myError } = useQuery({
    queryKey: ["my-courses"],
    queryFn: fetchMyCourses,
  });

  // Fetch all courses (to discover free and recommended ones)
  const { data: allCourses, isLoading: loadingAll } = useQuery({
    queryKey: ["all-courses"],
    queryFn: fetchCourses,
  });

  const { data: statsData } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: fetchDashboardStats,
  });

  if (loadingMy || loadingAll) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-10 w-64 bg-secondary rounded-lg"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-28 bg-secondary rounded-xl"></div>
            ))}
          </div>
          <div className="h-44 bg-secondary rounded-2xl"></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 bg-secondary rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (myError) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto h-14 w-14 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-4 border border-destructive/20">
          <AlertCircle className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Could not load dashboard</h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
          We encountered an issue synchronizing your enrolled courses. Please refresh or try again in a few moments.
        </p>
        <Button onClick={() => window.location.reload()} className="mt-6 font-semibold">
          Refresh Dashboard
        </Button>
      </div>
    );
  }

  const purchasedCourses = myCourses || [];
  const purchasedIds = new Set(purchasedCourses.map((c) => c.id));
  
  // Find courses that are marked free and haven't been purchased
  const freeCourses = (allCourses || []).filter((c) => c.isFree && !purchasedIds.has(c.id));
  const isFirstTimeStudent = purchasedCourses.length === 0;

  // Determine fast 1-click continuation hero point
  const resumePoint = statsData?.resumePoint;
  const firstPurchasedCourse = purchasedCourses[0];
  const firstFreeCourse = freeCourses[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen text-foreground">
      
      {/* Top Welcome Header */}
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Welcome back, <span className="text-primary">{user?.name || "Learner"}</span> 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isFirstTimeStudent
              ? "Kickstart your technical interview preparation with structured roadmaps and playbooks."
              : "Ready to crush your next interview? Pick up right where you left off."}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="rounded-xl shadow-sm font-semibold">
            <Link to="/products">
              <Compass className="mr-2 h-4 w-4" /> Browse Catalog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Metrics Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-primary" /> Enrolled Courses
          </div>
          <div>
            <div className="text-3xl font-extrabold mt-2 text-foreground">{purchasedCourses.length}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {purchasedCourses.length === 0 ? "Explore free modules" : "Active roadmaps"}
            </p>
          </div>
        </Card>

        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-success" /> Lessons Completed
          </div>
          <div>
            <div className="text-3xl font-extrabold mt-2 text-success">{statsData?.metrics?.lessonsCompleted || 0}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {statsData?.metrics?.lessonsCompleted ? "Continuous progress" : "First milestone awaits"}
            </p>
          </div>
        </Card>

        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-amber-500" /> Hours Learned
          </div>
          <div>
            <div className="text-3xl font-extrabold mt-2 text-foreground">
              {statsData?.metrics ? `${statsData.metrics.hoursLearned}h` : "0h"}
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Time invested in mastery</p>
          </div>
        </Card>

        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 text-primary fill-primary" /> Bookmarked
          </div>
          <div>
            <div className="text-3xl font-extrabold mt-2 text-primary">{statsData?.metrics?.bookmarksCount || 0}</div>
            <p className="text-[11px] text-muted-foreground mt-0.5">Saved for interview review</p>
          </div>
        </Card>
      </div>

      {/* DYNAMIC 1-CLICK CONTINUATION HERO BANNER */}
      {resumePoint ? (
        // Case 1: Student has an active recent lesson point
        <Card className="bg-gradient-to-r from-primary/15 via-primary/5 to-card border-primary/30 p-6 sm:p-7 rounded-2xl mb-10 shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Continue Where You Left Off
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                {resumePoint.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Jump straight back into your lesson at{" "}
                <span className="font-mono text-foreground font-semibold bg-muted px-2 py-0.5 rounded border border-border">
                  {Math.floor(resumePoint.timestamp / 60)}m {resumePoint.timestamp % 60}s
                </span>
                . Zero friction, resume instantly.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-xl font-bold shadow-md shrink-0 h-12 px-6">
              <Link 
                to="/courses" 
                search={{ 
                  courseId: resumePoint.courseId || undefined, 
                  lessonId: resumePoint.lessonId 
                }}
              >
                <Play className="w-5 h-5 mr-2" fill="currentColor" /> Resume Lesson
              </Link>
            </Button>
          </div>
        </Card>
      ) : !isFirstTimeStudent && firstPurchasedCourse ? (
        // Case 2: Student owns courses but hasn't accessed a lesson yet
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-card border-primary/20 p-6 sm:p-7 rounded-2xl mb-10 shadow-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Enrolled Track
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                {firstPurchasedCourse.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Your curriculum is unlocked and ready. Start Chapter 1 today and build real interview intuition.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-xl font-bold shadow-md shrink-0 h-12 px-6">
              <Link to="/overview" search={{ courseId: firstPurchasedCourse.id }}>
                <Play className="w-5 h-5 mr-2" fill="currentColor" /> Begin Course
              </Link>
            </Button>
          </div>
        </Card>
      ) : (
        // Case 3: First-time student onboarding callout
        <Card className="bg-gradient-to-r from-primary/10 via-background to-secondary/30 border-primary/20 p-6 sm:p-8 rounded-2xl mb-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> First-Time Student Onboarding
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                Ready to break into tech internships &amp; software roles?
              </h2>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                CodeBreakdowns replaces rote LeetCode grinding with deep mental models. Start with our free foundation modules below or unlock the complete Blind 75 and System Design bundles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {firstFreeCourse ? (
                <Button asChild size="lg" className="rounded-xl font-bold shadow-md h-11 px-5">
                  <Link to="/overview" search={{ courseId: firstFreeCourse.id }}>
                    <Play className="w-4 h-4 mr-2" fill="currentColor" /> Start Free Module
                  </Link>
                </Button>
              ) : null}
              <Button asChild variant="outline" size="lg" className="rounded-xl font-semibold h-11 px-5">
                <Link to="/products">Browse All Bundles</Link>
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-12">
        
        {/* Enrolled Courses Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 text-primary rounded-md">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">Your Enrolled Courses</h2>
            </div>
            {purchasedCourses.length > 0 && (
              <span className="text-xs text-muted-foreground font-semibold">
                {purchasedCourses.length} {purchasedCourses.length === 1 ? "Course" : "Courses"}
              </span>
            )}
          </div>
          
          {purchasedCourses.length === 0 ? (
            /* First-time student curated guided pathways */
            <div className="space-y-4">
              <Card className="border border-border/70 p-6 sm:p-8 rounded-2xl bg-card/60 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground">Recommended Starting Paths</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Choose a track based on where you are in your career preparation:
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {/* Path 1: Blind 75 & 150 */}
                  <div className="p-5 rounded-xl border border-border bg-background/60 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">
                        <Flame className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                        Blind 75 &amp; 150 Mastery
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        Master the 75 algorithmic patterns tested at top tech companies. Step-by-step video breakdowns without memorization.
                      </p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="mt-4 w-full font-semibold rounded-lg text-xs">
                      <Link to="/products">
                        Explore Track <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Path 2: Free Starter Modules */}
                  <div className="p-5 rounded-xl border border-primary/30 bg-primary/5 flex flex-col justify-between hover:border-primary/60 hover:shadow-md transition-all group">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-3">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                        Free Foundation Modules
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        Test-drive our video breakdown player, mental models, and interactive problem sets with zero upfront cost.
                      </p>
                    </div>
                    {firstFreeCourse ? (
                      <Button asChild size="sm" className="mt-4 w-full font-semibold rounded-lg text-xs shadow-sm">
                        <Link to="/overview" search={{ courseId: firstFreeCourse.id }}>
                          <Play className="mr-1.5 w-3.5 h-3.5" fill="currentColor" /> Start Free Lesson
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild size="sm" className="mt-4 w-full font-semibold rounded-lg text-xs">
                        <Link to="/products">View Free Catalog</Link>
                      </Button>
                    )}
                  </div>

                  {/* Path 3: Systems Architecture */}
                  <div className="p-5 rounded-xl border border-border bg-background/60 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                        System Design &amp; Architecture
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        High-scale distributed systems, database sharding, microservices, and architectural trade-off frameworks.
                      </p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="mt-4 w-full font-semibold rounded-lg text-xs">
                      <Link to="/products">
                        Explore Track <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {purchasedCourses.map((course) => (
                <CourseCard key={course.id} course={course} type="purchased" />
              ))}
            </div>
          )}
        </section>

        {/* Free Courses & Starter Resources Section */}
        {freeCourses.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-success/10 text-success rounded-md">
                  <LockOpen className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Free Starter Resources</h2>
                  <p className="text-xs text-muted-foreground">100% free courses available to all students</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-success/10 text-success border border-success/20">
                {freeCourses.length} Free {freeCourses.length === 1 ? "Track" : "Tracks"}
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {freeCourses.map((course) => (
                <CourseCard key={course.id} course={course} type="free" />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

function CourseCard({ course, type }: { course: ApiCourse; type: "purchased" | "free" }) {
  const isFree = type === "free";

  return (
    <Card className="group flex flex-col overflow-hidden bg-card border-border hover:-translate-y-1 hover:shadow-md hover:border-primary/40 transition-all duration-300 rounded-xl h-full relative">
      
      {/* Badge */}
      <div className="absolute top-3.5 right-3.5 z-10">
        {isFree ? (
          <span className="px-2.5 py-1 bg-success text-success-foreground text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Free
          </span>
        ) : (
          <span className="px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-md">
            Enrolled
          </span>
        )}
      </div>

      {/* Thumbnail */}
      <div className="h-40 w-full overflow-hidden relative bg-muted">
        {course.imageUrl ? (
          <>
            <img 
              src={course.imageUrl} 
              alt={course.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-background flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-primary/30" />
          </div>
        )}
        
        {/* Hover Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur shadow-xl flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300">
            <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="flex-1 pb-3 pt-4 px-5">
        <CardTitle className="text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-1">
          {course.title}
        </CardTitle>
        {course.description && (
          <CardDescription className="line-clamp-2 mt-1.5 text-muted-foreground text-xs leading-relaxed">
            {course.description}
          </CardDescription>
        )}
        {!isFree && course.totalLessons !== undefined && (
          <div className="mt-4 w-full">
            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
              <span className="text-muted-foreground">{course.completedLessons || 0}/{course.totalLessons} Lessons</span>
              <span className="text-primary font-bold">{course.progressPercentage || 0}%</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-500" 
                style={{ width: `${course.progressPercentage || 0}%` }}
              />
            </div>
          </div>
        )}
      </CardHeader>

      <CardFooter className="pt-0 pb-4 px-5">
        <Button 
          asChild 
          variant={isFree ? "secondary" : "default"} 
          className="w-full font-semibold rounded-lg h-9 text-xs"
        >
          <Link to="/overview" search={{ courseId: course.id }}>
            {isFree ? "Start Free Course" : "Continue Learning"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
