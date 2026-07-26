import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Play, BookOpen, AlertCircle, CheckCircle2, Sparkles, LockOpen, Bookmark, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchMyCourses, fetchCourses, fetchDashboardStats, type ApiCourse } from "@/services/api";
import { useAuthStore } from "@/store/authStore";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  ),
});

function DashboardPage() {
  const { user } = useAuthStore();
  
  // Fetch purchased courses
  const { data: myCourses, isLoading: loadingMy, error: myError } = useQuery({
    queryKey: ["my-courses"],
    queryFn: fetchMyCourses,
  });

  // Fetch all courses (to find free ones)
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <AlertCircle className="mx-auto h-12 w-12 text-destructive opacity-80 mb-4" />
        <h2 className="text-2xl font-bold text-foreground">Could not load dashboard</h2>
        <p className="text-muted-foreground mt-2">Please try again later.</p>
      </div>
    );
  }

  const purchasedCourses = myCourses || [];
  const purchasedIds = new Set(purchasedCourses.map(c => c.id));
  
  // Find courses that are marked free and haven't been purchased
  const freeCourses = (allCourses || []).filter(c => c.isFree && !purchasedIds.has(c.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Welcome back, <span className="text-primary">{user?.displayName || user?.username || "Learner"}</span>
          </h1>
          <p className="mt-1 text-base text-muted-foreground">
            Ready to crush your next interview? Pick up where you left off.
          </p>
        </div>
        <Button asChild variant="outline" size="sm" className="rounded-full shadow-sm">
          <Link to="/products">Browse Catalog</Link>
        </Button>
      </div>

      {/* Hero Metrics Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-primary" /> Enrolled Courses
          </div>
          <div className="text-3xl font-extrabold mt-2 text-foreground">{purchasedCourses.length}</div>
        </Card>
        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-success" /> Lessons Completed
          </div>
          <div className="text-3xl font-extrabold mt-2 text-success">{statsData?.metrics?.lessonsCompleted || 0}</div>
        </Card>
        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <Clock className="w-4 h-4 text-orange-400" /> Hours Learned
          </div>
          <div className="text-3xl font-extrabold mt-2 text-orange-400">{statsData?.metrics?.hoursLearned || 0}h</div>
        </Card>
        <Card className="bg-card border-border p-4 rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" /> Bookmarked
          </div>
          <div className="text-3xl font-extrabold mt-2 text-amber-500">{statsData?.metrics?.bookmarksCount || 0}</div>
        </Card>
      </div>

      {/* Resume Learning Hero Banner CTA */}
      {statsData?.resumePoint && (
        <Card className="bg-gradient-to-r from-primary/15 via-primary/5 to-background border-primary/30 p-6 rounded-2xl mb-10 shadow-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Continue Where You Left Off
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-foreground">{statsData.resumePoint.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Jump right back into your video at <span className="font-mono text-foreground font-bold bg-foreground/10 px-1.5 py-0.5 rounded">{Math.floor(statsData.resumePoint.timestamp / 60)}m {statsData.resumePoint.timestamp % 60}s</span>.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-xl font-bold shadow-md shrink-0 h-12 px-6">
              <Link to="/courses" search={{ courseId: statsData.resumePoint.courseId || undefined, lessonId: statsData.resumePoint.lessonId }}>
                <Play className="w-5 h-5 mr-2" fill="currentColor" /> Resume Learning
              </Link>
            </Button>
          </div>
        </Card>
      )}

      <div className="space-y-12">
        
        {/* Purchased Courses Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-primary/10 rounded-md">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold">Your Enrolled Courses</h2>
          </div>
          
          {purchasedCourses.length === 0 ? (
            <Card className="bg-card/30 border-dashed border-border p-8 text-center rounded-2xl">
              <div className="mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No active enrollments</h3>
              <p className="text-muted-foreground mb-4 max-w-sm mx-auto text-sm">
                You haven't purchased any premium courses yet. Start your journey by exploring our catalog.
              </p>
              <Button asChild className="rounded-full font-bold">
                <Link to="/products">Explore Premium Courses</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {purchasedCourses.map((course) => (
                <CourseCard key={course.id} course={course} type="purchased" />
              ))}
            </div>
          )}
        </section>

        {/* Free Courses Section */}
        {freeCourses.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-success/10 rounded-md">
                <LockOpen className="h-5 w-5 text-success" />
              </div>
              <h2 className="text-xl font-bold">Free Resources For You</h2>
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
    <Card className="group flex flex-col overflow-hidden bg-card border-border hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 transition-all duration-300 rounded-xl h-full relative">
      
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10">
        {isFree ? (
          <span className="px-3 py-1 bg-success text-success-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md bg-opacity-90 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Free
          </span>
        ) : (
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md bg-opacity-90">
            Pro
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
            {/* Subtle gradient overlay to ensure text readability if any, and premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-background flex items-center justify-center">
            <BookOpen className="h-10 w-10 text-primary/30" />
          </div>
        )}
        
        {/* Hover Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur shadow-xl flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-all duration-300">
            <Play className="w-5 h-5 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="flex-1 pb-4 pt-4 px-5">
        <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        {course.description && (
          <CardDescription className="line-clamp-2 mt-2 text-muted-foreground text-xs leading-relaxed">
            {course.description}
          </CardDescription>
        )}
        {!isFree && course.totalLessons !== undefined && (
          <div className="mt-4 w-full">
            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
              <span className="text-muted-foreground">{course.completedLessons || 0}/{course.totalLessons} Lessons</span>
              <span className="text-primary font-bold">{course.progressPercentage || 0}%</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-500" 
                style={{ width: `${course.progressPercentage || 0}%` }}
              />
            </div>
          </div>
        )}
      </CardHeader>

      <CardFooter className="pt-0 pb-5 px-5">
        <Button 
          asChild 
          variant={isFree ? "secondary" : "default"} 
          className="w-full font-semibold rounded-lg h-10 text-sm"
        >
          <Link to="/overview" search={{ courseId: course.id }}>
            {isFree ? "Start Free Course" : "Continue Learning"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
