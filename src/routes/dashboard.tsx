import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Play, BookOpen, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchMyCourses, type ApiCourse } from "@/services/api";
import { useAuthStore } from "@/store/authStore";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { user } = useAuthStore();
  const { data: myCourses, isLoading, error } = useQuery({
    queryKey: ["my-courses"],
    queryFn: fetchMyCourses,
  });

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-8 w-48 bg-white/10 rounded"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-white/5 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <AlertCircle className="mx-auto h-12 w-12 text-destructive opacity-80 mb-4" />
        <h2 className="text-2xl font-bold text-foreground">Could not load dashboard</h2>
        <p className="text-muted-foreground mt-2">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Welcome back, {user?.displayName || user?.username || "Learner"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Access your enrolled courses and continue learning.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" /> My Purchases
        </h2>
        
        {!myCourses || myCourses.length === 0 ? (
          <Card className="bg-black/20 border border-white/5 p-12 text-center">
            <h3 className="text-xl font-medium mb-2">No courses yet</h3>
            <p className="text-muted-foreground mb-6">Explore our catalog to start your learning journey.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {myCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CourseCard({ course }: { course: ApiCourse }) {
  return (
    <Card className="flex flex-col overflow-hidden bg-[#0a0a0a] border-white/10 hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all">
      {course.imageUrl ? (
        <div className="h-32 w-full overflow-hidden">
          <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover opacity-80" />
        </div>
      ) : (
        <div className="h-32 w-full bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border-b border-white/5 flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-indigo-400 opacity-50" />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
        {course.description && (
          <CardDescription className="line-clamp-2 mt-1">{course.description}</CardDescription>
        )}
      </CardHeader>
      <CardFooter className="mt-auto pt-4 pb-6 px-6">
        <Button asChild className="w-full gap-2 font-medium">
          <Link to="/courses" search={{ courseId: course.id }}>
            <Play className="h-4 w-4" /> Start Learning
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
