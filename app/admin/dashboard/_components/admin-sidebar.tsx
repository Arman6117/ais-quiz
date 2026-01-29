"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CirclePlus, FileQuestion, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "My Quizzes",
    url: "#",
    icon: FileQuestion,
  },
  {
    title: "Create New",
    url: "#",
    icon: CirclePlus,
  },
];
const AdminSidebar = () => {
  const pathName = usePathname();
  const currPage = pathName.split("/")[2];

  return (
    <>
      <aside className="bg-[#0F0F1C] text-slate-300 backdrop-blur-md border-r border-[#1f1f2e] w-40 min-h-screen  p-4 py-6">

       <h1>
        AIS LOGO
       </h1>
      </aside>
    </>
  );
};

export default AdminSidebar;
