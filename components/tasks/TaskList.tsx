import React from 'react'
import { TaskCard } from './TaskCard'
import { getRemainingDays } from '@/utils/date'



export const TaskList = ({ task }: { task: any[] }) => {

    const overdueTasks = task.filter((t) => (getRemainingDays(t.due_date) < 0) && (t.status === "PENDING"))
    const moreThanWeek = task.filter((t) => (getRemainingDays(t.due_date) >= 7)&& (t.status === "PENDING"))
    const lessThanWeek = task.filter((t) => (getRemainingDays(t.due_date) <= 7) && (getRemainingDays(t.due_date) >= 0) && (t.status === "PENDING"))
    const pendingToAproval = task.filter((t) => (t.status === "EMPLOYEE_DONE") || (t.status === "ARCHIVED") && (t.assigned_to === t.created_by))



    return (
        <section className="space-y-md">
            <div className="flex items-center justify-between">
                <h3 className="text-headline-sm font-headline-sm text-on-surface">My Tasks</h3>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-full text-label-sm bg-secondary text-on-secondary">All Tasks</button>
                    <button className="px-3 py-1.5 rounded-full text-label-sm border border-outline-variant text-on-surface-variant hover:bg-surface-container-low">Filters</button>
                </div>
            </div>
            <div className="space-y-xl">
                {
                    (overdueTasks) && (
                        <div>
                            <div className="flex items-center gap-2 mb-md">
                                <span className="w-2 h-2 bg-error rounded-full"></span>
                                <h4 className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Overdue Tasks</h4>
                            </div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-md">
                                {
                                    overdueTasks.map((t) => (
                                        <TaskCard key={t.id} task={t} />
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                <div>

                    <div className="flex items-center gap-2 mb-md">
                        <span className="w-2 h-2 bg-error rounded-full"></span>
                        <h4 className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Less Seven Days Remaining</h4>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-md">
                        {
                            lessThanWeek.map((t) => (
                                <TaskCard key={t.id} task={t} />
                            ))
                        }


                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-md">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        <h4 className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">More Than a Week</h4>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-md">


                        {
                            moreThanWeek.map((t) => (
                                <TaskCard key={t.id} task={t} />
                            ))
                        }



                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-md">
                        <span className="w-2 h-2 bg-surface-tint rounded-full"></span>
                        <h4 className="text-label-md font-label-md text-on-surface-variant tracking-wider uppercase">Waiting for Approval</h4>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-md">

                        {
                            pendingToAproval.map((t) => (
                                <TaskCard key={t.id} task={t} />
                            ))
                        }



                    </div>
                </div>
            </div>
        </section>
    )
}
