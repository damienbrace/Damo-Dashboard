"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { TaskPriority } from "@/lib/tasks";

const priorities = new Set(["High", "Medium", "Low"]);

export async function addTask(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const priorityValue = String(formData.get("priority") ?? "");
  const dueLabel = String(formData.get("dueLabel") ?? "Today").trim() || "Today";
  const priority = priorities.has(priorityValue) ? (priorityValue as TaskPriority) : null;

  if (!title) {
    return;
  }

  try {
    const supabase = createSupabaseServerClient();
    await supabase.from("tasks").insert({
      due_label: dueLabel,
      priority,
      status: "open",
      title
    });
  } catch {
    return;
  }

  revalidatePath("/tasks");
}

export async function completeTask(formData: FormData) {
  const id = String(formData.get("id") ?? "");

  if (!id || id.startsWith("fallback-")) {
    return;
  }

  try {
    const supabase = createSupabaseServerClient();
    await supabase.from("tasks").update({ status: "completed" }).eq("id", id);
  } catch {
    return;
  }

  revalidatePath("/tasks");
}
