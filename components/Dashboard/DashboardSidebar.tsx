"use client"
import { ClipboardList, LayoutDashboard, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { createTaskAction } from '@/actions/task/create-task'
import { Profile } from '@/types/profile'

export const DashboardSidebar = ({ employees }: { employees: Profile[] }) => {

    async function handleSubmit(
        formData: FormData
    ) {

        await createTaskAction({

            title: String(
                formData.get("title")
            ),

            description: String(
                formData.get("description")
            ),

            priority: String(
                formData.get("priority")
            ),

            assigned_to: String(
                formData.get("assigned_to")
            ),

            due_date: String(
                formData.get("due_date")
            )

        })

    }






    return (
        <aside className="fixed left-0 top-0 h-screen w-65 bg-surface border-r border-outline-variant flex flex-col p-md overflow-y-auto z-50">
            <div className="flex items-center gap-3 mb-xl px-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-on-primary">
                    <LayoutDashboard className="material-symbols-outlined text-white" />
                </div>
                <div>
                    <h1 className="text-headline-md font-headline-md font-bold text-primary">TaskStream</h1>
                    <p className="text-label-sm text-on-surface-variant">Enterprise Hub</p>
                </div>
            </div>
            <nav className="flex-1 space-y-1">
                <a className="flex items-center gap-3 px-4 py-3 text-primary bg-secondary-fixed rounded-lg font-bold transition-transform duration-150 active:scale-[0.98]" href="#">
                    <LayoutDashboard className="material-symbols-outlined" />
                    <span>Overview</span>
                </a>
                <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
                    <ClipboardList className="material-symbols-outlined" data-icon="assignment" />
                    <span>Tasks</span>
                </a>
                <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors" href="#">
                    <Users className="material-symbols-outlined" data-icon="group" />
                    <span>Team</span>
                </a>

            </nav>
            <div className="mt-auto pt-md border-t border-outline-variant">
               
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                            <Plus className="material-symbols-outlined" data-icon="add" />
                            New Project
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[50%] p-3.5 overflow-hidden ">
                        <DialogHeader className='text-center'>
                            <DialogTitle className="text-headline-md font-headline-md text-on-surface">
                                New Task
                            </DialogTitle>
                            <DialogDescription className="text-body-sm text-on-surface-variant">
                                Create a new task for your employees
                            </DialogDescription>
                        </DialogHeader>

                        <form action={handleSubmit} className="mt-4 space-y-5">
                            {/* Título */}
                            <div className="space-y-1.5">
                                <label htmlFor="title" className="text-label-sm font-label-sm text-on-surface">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    name="title"
                                    placeholder="e.g., Design homepage"
                                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-body-md text-on-surface placeholder:text-on-surface-variant/60"
                                    required
                                />
                            </div>

                            {/* Descripción */}
                            <div className="space-y-1.5">
                                <label htmlFor="description" className="text-label-sm font-label-sm text-on-surface">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    placeholder="Describe the task..."
                                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-body-md text-on-surface placeholder:text-on-surface-variant/60 resize-none"
                                />
                            </div>

                            {/* Prioridad */}
                            <div className="space-y-1.5">
                                <label htmlFor="priority" className="text-label-sm font-label-sm text-on-surface">
                                    Priority
                                </label>
                                <select
                                    id="priority"
                                    name="priority"
                                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md text-on-surface"
                                >
                                    <option value="LOW">Low</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="HIGH">High</option>
                                </select>
                            </div>

                            {/* Fecha de vencimiento */}
                            <div className="space-y-1.5">
                                <label htmlFor="due_date" className="text-label-sm font-label-sm text-on-surface">
                                    Due date
                                </label>
                                <input
                                    type="date"
                                    id="due_date"
                                    name="due_date"
                                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md text-on-surface"
                                />
                            </div>

                            {/* Asignar a */}
                            <div className="space-y-1.5">
                                <label htmlFor="assigned_to" className="text-label-sm font-label-sm text-on-surface">
                                    Assign to
                                </label>
                                <select
                                    id="assigned_to"
                                    name="assigned_to"
                                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md text-on-surface"
                                >
                                    {employees.map((employee) => (
                                        <option key={employee.id} value={employee.id}>
                                            {employee.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Botón submit */}
                            <button
                                type="submit"
                                className="w-full mt-6 bg-primary text-white py-2.5 rounded-lg font-label-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Create task
                            </button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </aside>
    )
}
