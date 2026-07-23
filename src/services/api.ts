import { API_BASE_URL } from "../config";

export interface ApiCourse {
  id: string;
  title: string;
  imageUrl?: string;
  description?: string;
  isFree?: boolean;
}

export interface ApiProduct {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  priceInr: number;
  compareAtPriceInr: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  githubId: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  profileUrl: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface CoursePlayData {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  chapters: {
    id: string;
    title: string;
    sortOrder: number;
    lessons: {
      id: string;
      title: string;
      videoUrlOrId: string;
      durationSeconds: number;
      sortOrder: number;
      isProblem: boolean;
      problemUrl: string | null;
      description: string | null;
      explanationEndSeconds: number | null;
      isPreview: boolean;
      isLocked?: boolean;
      progress?: { isCompleted: boolean }[];
    }[];
  }[];
}

// Helper wrapper for authenticated fetches
async function authFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    // CRITICAL: Must include credentials so HttpOnly cookies are sent
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  return response;
}

export const fetchCourses = async (): Promise<ApiCourse[]> => {
  const response = await authFetch(`/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  const data = await response.json();
  return data.data; 
};

export const fetchProducts = async (): Promise<ApiProduct[]> => {
  const response = await authFetch(`/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.data; 
};

export const fetchMyCourses = async (): Promise<ApiCourse[]> => {
  const response = await authFetch(`/courses/my-courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch purchased courses");
  }
  const data = await response.json();
  return data.data; 
};

export const fetchCoursePlayData = async (courseId: string): Promise<CoursePlayData> => {
  const response = await authFetch(`/courses/${courseId}/play`);
  if (!response.ok) {
    throw new Error("Failed to fetch course data or you don't have access");
  }
  const data = await response.json();
  return data.data;
};

export const fetchCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await authFetch(`/users/me`);
    if (!response.ok) {
      if (response.status === 401) {
        return null; // Not authenticated
      }
      throw new Error("Failed to fetch profile");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("fetchCurrentUser error:", error);
    return null;
  }
};

export const markLessonComplete = async (lessonId: string): Promise<boolean> => {
  try {
    const response = await authFetch(`/progress/complete`, {
      method: "POST",
      body: JSON.stringify({ lessonId, isCompleted: true }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error marking lesson complete:", error);
    return false;
  }
};

export const logoutUser = async (): Promise<boolean> => {
  try {
    const response = await authFetch(`/users/auth/logout`, { method: "POST" });
    return response.ok;
  } catch (error) {
    console.error("logout error:", error);
    return false;
  }
};
