import { AdminDashboard } from "@/components/Dashboard/AdminDashboard"
import { BossDashboard } from "@/components/Dashboard/BossDashboard "
import { EmployeeDashboard } from "@/components/Dashboard/EmployeeDashboard "
import { createClient } from "@/lib/supabase/server"
import { getProfile } from "@/services/profile.service"
import { getTasksByUser } from "@/services/task.service"
import { getSubordinates } from "@/services/user.service"

export default async function Dashboard(){

 const supabase=await createClient()

 const {
   data:{user}
 }=await supabase.auth.getUser()

 if(!user){
    return null
 }

 const {data:profile}=await getProfile(
    supabase,
    user.id
 )

const { data:employees }=
 await getSubordinates(
   supabase,
   user.id
 )

 const assignableUsers= [
   profile,
   ...(employees || [])
 ]

const { data:task }=
 await getTasksByUser(
   supabase,
   user.id
 )


if(profile.role==="ADMIN"){
   return <AdminDashboard/>
}

if(profile.role==="BOSS"){
   return <BossDashboard employees={assignableUsers} task={task}/>
}

return <EmployeeDashboard/>

 

}