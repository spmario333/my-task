"use client"

import { createTaskAction }
    from "@/actions/task/create-task"
import { Profile } from "@/types/profile"

export const CreateTaskForm = ({ employees, task }: { employees: Profile[], task: any[] }) => {
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
        <div>
            <div>

                <form action={handleSubmit}>

                    <input
                        name="title"
                        placeholder="title"
                    />

                    <textarea
                        name="description"
                    />

                    <select name="priority">

                        <option value="LOW">
                            LOW
                        </option>

                        <option value="MEDIUM">
                            MEDIUM
                        </option>

                        <option value="HIGH">
                            HIGH
                        </option>

                    </select>

                    <input
                        type="date"
                        name="due_date"
                    />

                    <select name="assigned_to" id="assigned_to">
                        {employees.map(employee => (
                            <option key={employee.id} value={employee.id}>
                                {employee.email}
                            </option>
                        ))}
                    </select>

                    <button type="submit">

                        Create task

                    </button>

                </form>
            </div>
            <div>
                {task?.map((task) => (
                    <div key={task.id}>

                        <h2>{task.title}</h2>

                        <p>{task.priority}</p>

                        <p>{task.status}</p>

                    </div>
                ))}
            </div>

        </div>


    )
}
