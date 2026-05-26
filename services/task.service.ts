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
    assignee:assigned_to(email),
    creator:created_by(email)
  `)
  .or(`
    assigned_to.eq.${userId},
    created_by.eq.${userId}
  `)

}


