import { createSupabaseServerClient } from "@/lib/supabase/server";

export type TaskPriority = "High" | "Medium" | "Low";

export type LifeTask = {
  id: string;
  title: string;
  priority: TaskPriority | null;
  dueLabel: string;
  dueDate: string | null;
  status: "open" | "completed";
};

const fallbackTasks: LifeTask[] = [
  { id: "fallback-1", title: "Finish dashboard", priority: "High", dueLabel: "Today", dueDate: null, status: "open" },
  { id: "fallback-2", title: "Add authentication", priority: "High", dueLabel: "Today", dueDate: null, status: "open" },
  { id: "fallback-3", title: "Write README", priority: "Medium", dueLabel: "Today", dueDate: null, status: "open" },
  { id: "fallback-4", title: "Gym", priority: "Low", dueLabel: "Today", dueDate: null, status: "open" },
  { id: "fallback-5", title: "Call electrician", priority: null, dueLabel: "Tomorrow", dueDate: null, status: "open" },
  { id: "fallback-6", title: "Plan Japan trip", priority: null, dueLabel: "Sat, 24 May", dueDate: null, status: "open" },
  { id: "fallback-7", title: "Buy domain", priority: null, dueLabel: "Mon, 26 May", dueDate: null, status: "open" }
];

type TaskRow = {
  id: string;
  title: string;
  priority: TaskPriority | null;
  due_label: string | null;
  due_date: string | null;
  status: "open" | "completed";
};

export async function getTasks() {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("tasks")
      .select("id,title,priority,due_label,due_date,status")
      .order("created_at", { ascending: true });

    if (error || !data) {
      return {
        source: "fallback" as const,
        tasks: fallbackTasks
      };
    }

    return {
      source: "supabase" as const,
      tasks: data.map(mapTaskRow)
    };
  } catch {
    return {
      source: "fallback" as const,
      tasks: fallbackTasks
    };
  }
}

export function splitTasks(tasks: LifeTask[]) {
  const openTasks = tasks.filter((task) => task.status !== "completed");

  return {
    completed: tasks.filter((task) => task.status === "completed"),
    today: openTasks.filter((task) => task.dueLabel === "Today"),
    upcoming: openTasks.filter((task) => task.dueLabel !== "Today")
  };
}

function mapTaskRow(row: TaskRow): LifeTask {
  return {
    dueDate: row.due_date,
    dueLabel: row.due_label ?? formatDueLabel(row.due_date),
    id: row.id,
    priority: row.priority,
    status: row.status,
    title: row.title
  };
}

function formatDueLabel(dueDate: string | null) {
  if (!dueDate) {
    return "Upcoming";
  }

  const date = new Date(`${dueDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (date.getTime() === today.getTime()) {
    return "Today";
  }

  if (date.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  }

  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    weekday: "short"
  });
}
