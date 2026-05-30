"use server"

import { createClient } from "@/lib/supabase/server"
import { getTaskById, updateTaskStatus } from "@/services/task.service"

export async function archiveTaskAction(
 taskId:string
){

 const supabase=await createClient()

 const {data:{user}}=
  await supabase.auth.getUser()

 if(!user) throw new Error("Unauthorized")

 const {data:task}=
  await getTaskById(
   supabase,
   taskId
  )

 if(!task){
   throw new Error("Task not found")
 }

 if(task.status!=="EMPLOYEE_DONE"){
   throw new Error("Task inválida")
 }

if(task.created_by === task.assigned_to){

    throw new Error("Las tareas personales no requieren aprobacion")
}

 const nextStatus = "ARCHIVED"
  

 return await updateTaskStatus(
   supabase,
   taskId,
   nextStatus
 )

}
