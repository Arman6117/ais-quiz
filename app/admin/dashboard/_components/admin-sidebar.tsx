"use client";

import {
  ChartCandlestickIcon,
  FileQuestion,
  LayoutGridIcon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutGridIcon,
  },
  {
    title: "My Quizzes",
    url: "/admin/my-quizzes",
    icon: FileQuestion,
  },
  {
    title: "Mock Interviews",
    url: "#",
    icon: ChartCandlestickIcon,
  },
];

export default function AdminSidebar() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden w-full fixed flex items-center justify-between px-4 py-3 bg-deep-background border-b border-slate-400">
        <span className="text-white font-semibold">AIS LOGO</span>
        <button onClick={() => setOpen(true)}>
          <Menu className="text-white" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed z-50 top-0 left-0
          h-screen w-64
           text-slate-300 
          border-r border-gray-700
          p-4 py-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-white font-semibold">AIS LOGO</h1>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        <div className="flex flex-col mt-6 gap-3">
          {items.map((item) => {
            const active = pathName === item.url;
            const Icon = item.icon;

            return (
              <Link href={item.url} key={item.title} onClick={() => setOpen(false)}>
                <div
                  className={`
                    flex group gap-2 items-center px-4 py-2 rounded-md
                    transition-all cursor-pointer
                    ${
                      active
                        ? "bg-blue-600/10 text-blue-400 border border-blue-500/30"
                        : "border border-transparent hover:bg-[#2323EB]/10 hover:border-[#2323EB]"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 group-hover:text-[#2323EB]" />
                  <span className="text-sm font-semibold group-hover:text-[#2323EB]">
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
