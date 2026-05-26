export async function createTask(
 supabase:any,
 payload:any
){

 return await supabase
   .from("tasks")
   .insert(payload)

}

export async function getTasksByUser(
 supabase:any,
 userId:string
){

 return await supabase
  .from("tasks")
  .select(`
    *,
    assignee:assigned_to(
      id,
      email
    ),
    creator:created_by(
      id,
      email
    )
  `)
  .or(
    `assigned_to.eq.${userId},created_by.eq.${userId}`
  )
  .order("created_at",{
     ascending:false
  })

}


export async function updateTaskStatus(
 supabase:any,
 taskId:string,
 status:string
){

 return await supabase
   .from("tasks")
   .update({ status })
   .eq("id", taskId)

}

export async function getTaskById(
 supabase:any,
 taskId:string
){

 return await supabase
   .from("tasks")
   .select(`
     *,
     assignee:assigned_to(
       id,
       email
     ),
     creator:created_by(
       id,
       email
     )
   `)
   .eq("id", taskId)
   .single()

}