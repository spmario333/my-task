import { TaskCardSkeleton } from "@/components/tasks/TaskCardSkeleton";

export default function Loading() {
  return (
 <div className="grid gap-4">
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
    </div>
  )
}