"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { createTask } from "@/services/task.service"
type createTaskPayload = {
    title: string,
    description: string,
    priority: string,
    assigned_to: string,
    due_date: string
}


export async function createTaskAction(
    payload: createTaskPayload
) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('Unauthorized')
    }

    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

    if (!profile) {
        throw new Error('Profile not found')
    }

    const { error } = await createTask(
        supabase,
        {
            title: payload.title,
            description: payload.description,
            priority: payload.priority,
            assigned_to: payload.assigned_to,
            due_date: payload.due_date,
            created_by: profile.id
        })

    if (error) {
        throw new Error('ocurrio un error')
    }
    revalidatePath("/dashboard")
}