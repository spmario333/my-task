export function TaskCardSkeleton() {
  return (
    <div className="border rounded-xl p-4 animate-pulse">
      <div className="h-5 w-40 bg-gray-200 rounded mb-3" />

      <div className="h-4 w-full bg-gray-200 rounded mb-2" />
      <div className="h-4 w-3/4 bg-gray-200 rounded mb-4" />

      <div className="h-3 w-20 bg-gray-200 rounded" />
    </div>
  )
}