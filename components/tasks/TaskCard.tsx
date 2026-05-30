"use client"


import { completeTaskAction } from '@/actions/task/complete-task'
import { descompleteTaskAction } from '@/actions/task/descompleted-task'
import { Task } from '@/types/task'
import { getRemainingDays } from '@/utils/date'
import { Calendar } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const TaskCard = ({ task }: { task: Task }) => {

    const [checked, setChecked] = useState(
        task.status !== "PENDING"
    )
    const router = useRouter()

    const remainingDays = getRemainingDays(task.due_date)
    const handleChecked = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked

        setChecked(value)

        if (value) {
            await completeTaskAction(task.id)
            router.refresh()
        } else {
            await descompleteTaskAction(task.id)
            router.refresh()

        }
    }



    return (
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md task-card-shadow hover:border-outline transition-colors group">
            <div className="flex items-start justify-between mb-sm">
                <div className="flex items-center gap-3">
                    <input className={`w-5  h-5 rounded border-outline-variant text-primary focus:ring-primary `} disabled={(task.assigned_to !== task.created_by) && (task.status === "ARCHIVED")} checked={checked} type="checkbox" onChange={handleChecked} />
                    <h5 className="text-body-md font-bold text-on-surface">{task.title}</h5>
                </div>
                <span className={`px-2 py-1 rounded-full text-label-sm bg-error/10 ${((task.priority === "LOW") && "text-green-500") || ((task.priority === "MEDIUM") && "text-yellow-500") || ((task.priority === "HIGH") && "text-red-500")}`}>{task.priority}</span>
            </div>
            <p className="text-body-sm text-on-surface-variant mb-md ml-8 line-clamp-2">{task.description}</p>
            <div className="flex items-center justify-between ml-8">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                        <Calendar className="material-symbols-outlined text-[14px]" data-icon="calendar_today" />
                        <span className="text-label-sm">{remainingDays}</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
