import { API_BASE_URL } from "../config";

export interface ApiCourse {
  id: string;
  title: string;
  imageUrl?: string;
  description?: string;
  isFree?: boolean;
  completedLessons?: number;
  totalLessons?: number;
  progressPercentage?: number;
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
  courses?: {
    course: {
      id: string;
      title: string;
      imageUrl?: string | null;
    };
  }[];
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
  isPurchased?: boolean;
  enforceLinearProgress?: boolean;
  chapters: {
    id: string;
    title: string;
    sortOrder: number;
    states?: {
      isCompleted: boolean;
      isUnlocked: boolean;
    }[];
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
      progress?: {
        isCompleted: boolean;
        isBookmarked: boolean;
        highestTimestampSecs: number;
      }[];
    }[];
  }[];
}

export interface DashboardStatsResponse {
  metrics: {
    lessonsAccessed: number;
    lessonsCompleted: number;
    hoursLearned: number;
    bookmarksCount: number;
  };
  resumePoint: {
    lessonId: string;
    courseId?: string;
    title: string;
    timestamp: number;
  } | null;
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
  const result = await markLessonCompletedApi(lessonId);
  return result.success;
};

export const markLessonCompletedApi = async (lessonId: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await authFetch(`/progress/complete`, {
      method: "POST",
      body: JSON.stringify({ lessonId, isCompleted: true }),
    });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return { success: false, error: data.message || "Failed to mark lesson complete" };
    }
    return { success: true };
  } catch (error: any) {
    console.error("Error marking lesson complete:", error);
    return { success: false, error: error?.message || "Network error" };
  }
};

export const recordHeartbeat = async (lessonId: string, currentTime: number): Promise<boolean> => {
  try {
    const response = await authFetch(`/progress/heartbeat`, {
      method: "POST",
      body: JSON.stringify({ lessonId, currentTime }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error recording heartbeat:", error);
    return false;
  }
};

export const toggleBookmarkApi = async (lessonId: string, isBookmarked: boolean): Promise<boolean> => {
  try {
    const response = await authFetch(`/progress/bookmark`, {
      method: "POST",
      body: JSON.stringify({ lessonId, isBookmarked }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error toggling bookmark:", error);
    return false;
  }
};

export const fetchDashboardStats = async (): Promise<DashboardStatsResponse> => {
  const response = await authFetch(`/progress/stats`);
  if (!response.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }
  const data = await response.json();
  return data.data;
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

// --- Razorpay Payment APIs ---
export interface CheckoutOrderResponse {
  orderId: string;
  amount: number; // in paise
  currency: string;
}

export interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export const createCheckoutOrder = async (productId: string): Promise<CheckoutOrderResponse> => {
  const response = await authFetch(`/payments/checkout/${productId}`, { method: "POST" });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to initiate checkout");
  }
  const data = await response.json();
  return data.data;
};

export const verifyPayment = async (payload: VerifyPaymentPayload): Promise<boolean> => {
  const response = await authFetch(`/payments/verify`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Payment verification failed");
  }
  return true;
};

