import { Flame, CheckCircle2, ListChecks, Clock } from "lucide-react";

export const progress = {
  percent: 42,
  currentCourse: "Blind 150",
  currentModule: "Trees",
  currentTopic: "Binary Search Tree",
};

export type StatKey = "solved" | "remaining" | "streak" | "hours";
export const stats: {
  key: StatKey;
  label: string;
  value: string;
  icon: typeof Flame;
  tone: string;
}[] = [
  {
    key: "solved",
    label: "Problems Solved",
    value: "63",
    icon: CheckCircle2,
    tone: "text-success",
  },
  {
    key: "remaining",
    label: "Problems Remaining",
    value: "87",
    icon: ListChecks,
    tone: "text-primary",
  },
  {
    key: "streak",
    label: "Current Streak",
    value: "12 days",
    icon: Flame,
    tone: "text-warning",
  },
  {
    key: "hours",
    label: "Hours Learned",
    value: "48h",
    icon: Clock,
    tone: "text-muted-foreground",
  },
];

export const solvedBreakdown = [
  { name: "Blind 75", solved: 32, total: 75, unit: "Problems Solved" },
  { name: "Blind 150", solved: 63, total: 150, unit: "Problems Solved" },
  { name: "DBMS", solved: 13, total: 25, unit: "SQL Problems Solved" },
];

export const remainingBreakdown = [
  { name: "Blind 75", remaining: 43, unit: "Problems Remaining" },
  { name: "Blind 150", remaining: 87, unit: "Problems Remaining" },
  { name: "DBMS", remaining: 12, unit: "SQL Problems Remaining" },
];

export const backendStats = {
  name: "Backend Essentials",
  hours: 48,
  completed: 18,
  remaining: 12,
};

export type NodeState = "completed" | "current" | "locked";
const roadmap: { topic: string; state: NodeState }[] = [
  { topic: "Arrays", state: "completed" },
  { topic: "Strings", state: "completed" },
  { topic: "Hashing", state: "completed" },
  { topic: "Linked Lists", state: "completed" },
  { topic: "Stacks", state: "completed" },
  { topic: "Queues", state: "completed" },
  { topic: "Binary Search", state: "completed" },
  { topic: "Trees", state: "current" },
  { topic: "BST", state: "current" },
  { topic: "Heap", state: "locked" },
  { topic: "Graphs", state: "locked" },
  { topic: "Dynamic Programming", state: "locked" },
  { topic: "Greedy", state: "locked" },
  { topic: "Backtracking", state: "locked" },
];

export type Difficulty = "Easy" | "Medium" | "Hard";
type LessonStatus = "completed" | "current" | "todo";
type Lesson = {
  id: string;
  title: string;
  duration: string;
  difficulty: Difficulty;
  status: LessonStatus;
  prerequisites?: string[];
  objectives?: string[];
  description?: string;
  outcome?: string;
  leetcodeUrl?: string;
};
type Section = { id: string; title: string; lessons: Lesson[] };
type Course = { id: string; name: string; sections: Section[] };

export const courses: Course[] = [
  {
    id: "blind150",
    name: "Blind 150",
    sections: [
      {
        id: "arrays",
        title: "Arrays",
        lessons: [
          {
            id: "two-sum",
            title: "Two Sum",
            duration: "12 min",
            difficulty: "Easy",
            status: "completed",
            prerequisites: ["Arrays basics", "Hash maps"],
            objectives: [
              "Understand the brute-force O(n²) approach",
              "Optimize using a hash map for O(n) lookup",
              "Return indices of the two numbers that add to target",
            ],
            description:
              "Given an array of integers and a target, return the indices of the two numbers such that they add up to target. This foundational problem introduces the pattern of trading space for time using a hash map — a technique that reappears across dozens of interview questions.",
            outcome:
              "You'll be able to spot the two-pointer vs hash-map trade-off and implement a clean single-pass solution.",
            leetcodeUrl: "https://leetcode.com/problems/two-sum/",
          },
          {
            id: "best-time",
            title: "Best Time to Buy and Sell Stock",
            duration: "18 min",
            difficulty: "Easy",
            status: "current",
            prerequisites: ["Arrays", "Basic greedy intuition"],
            objectives: [
              "Track the minimum price seen so far",
              "Maintain a running maximum profit",
              "Solve in a single pass with O(1) space",
            ],
            description:
              "You are given an array where prices[i] is the price of a given stock on day i. Find the maximum profit achievable from a single buy and sell. The elegant single-pass solution is the entry point into a family of stock-trading problems.",
            outcome:
              "You'll master the min-so-far pattern and understand how it generalises to more complex stock problems.",
            leetcodeUrl:
              "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          },
          {
            id: "contains-dup",
            title: "Contains Duplicate",
            duration: "15 min",
            difficulty: "Easy",
            status: "todo",
            prerequisites: ["Sets", "Hashing"],
            objectives: [
              "Detect duplicates using a hash set",
              "Compare against sorting-based approaches",
            ],
            description:
              "Return true if any value appears at least twice in the array. Simple to state, but a great excuse to compare hashing, sorting, and bit-manipulation approaches side by side.",
            outcome:
              "You'll be able to reason about time/space trade-offs for uniqueness checks.",
            leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
          },
        ],
      },
      { id: "strings", title: "Strings", lessons: [] },
      { id: "linked-lists", title: "Linked Lists", lessons: [] },
      { id: "stacks", title: "Stacks", lessons: [] },
      { id: "queues", title: "Queues", lessons: [] },
      { id: "binary-search", title: "Binary Search", lessons: [] },
      { id: "trees", title: "Trees", lessons: [] },
      { id: "graphs", title: "Graphs", lessons: [] },
      { id: "dp", title: "Dynamic Programming", lessons: [] },
      { id: "greedy", title: "Greedy", lessons: [] },
      { id: "backtracking", title: "Backtracking", lessons: [] },
    ],
  },
  {
    id: "blind75",
    name: "Blind 75",
    sections: [{ id: "arrays", title: "Arrays", lessons: [] }],
  },
  {
    id: "backend",
    name: "Backend Essentials",
    sections: [{ id: "intro", title: "Introduction", lessons: [] }],
  },
  {
    id: "dbms",
    name: "DBMS",
    sections: [{ id: "sql", title: "SQL Basics", lessons: [] }],
  },
];

export const courseProgress: Record<string, { completed: number; total: number }> = {
  blind150: { completed: 63, total: 150 },
  blind75: { completed: 32, total: 75 },
  backend: { completed: 18, total: 30 },
  dbms: { completed: 13, total: 25 },
};
