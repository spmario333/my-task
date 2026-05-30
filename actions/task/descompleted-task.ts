"use server"

import { createClient } from "@/lib/supabase/server"
import { getTaskById, updateTaskStatus } from "@/services/task.service"

export async function descompleteTaskAction(
  taskId: string
) {

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("Unauthorized")
  const { data: task } =
    await getTaskById(
      supabase,
      taskId
    )

  if (!task) {
    throw new Error("Task not found")
  }

  const isPersonalTask =
    task.created_by === task.assigned_to

  if ((task.status === "ARCHIVED") && !isPersonalTask) {
    throw new Error("The task is archived by the Boss")
  } else if (task.status === "PENDING") {
    throw new Error("The task is already pending")

  } else {
    return await updateTaskStatus(
      supabase,
      taskId,
      "PENDING"
    )
  }

}