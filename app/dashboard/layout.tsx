import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/Dashboard/DashboardSidebar";
import { RightSidebar } from "@/components/other/RightSidebar";
import { createClient } from "@/lib/supabase/server";
import { getProfile } from "@/services/profile.service";
import { getTasksByUser } from "@/services/task.service";
import { getSubordinates } from "@/services/user.service";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const supabase = await createClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()
  if (!user) {
    return null
  }

  const { data: profile } = await getProfile(
    supabase,
    user.id
  )
  const nombre = profile.email.split('@')[0]
  const rol = profile.role

const { data:employees }=
 await getSubordinates(
   supabase,
   user.id
 )

  const assignableUsers= [
   profile,
   ...(employees || [])
 ]



  return (
    <div className="flex h-screen">

      <DashboardSidebar employees={assignableUsers} />

      <div className="flex-1 flex flex-col">

        <DashboardHeader profile={profile} />
        <main className="ml-sidebar-width pt-16 h-100% flex justify-between">
          
          {children}

          <RightSidebar />
        </main>
      </div>



    </div>
  );
}