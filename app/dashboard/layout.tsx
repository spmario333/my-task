import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/Dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
      <div className="flex h-screen">

   <DashboardSidebar/>

   <div className="flex-1 flex flex-col">

    <DashboardHeader/>

    <main className="flex-1 overflow-y-auto p-6">
      {children}
    </main>

   </div>

  </div>
  );
}