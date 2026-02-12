import React from "react";
import { Separator } from "./ui/separator";

interface PageHeaderProps {
  children: React.ReactNode;
}
const PageHeader = ({children}:PageHeaderProps) => {
  return (
    <header className="md:sticky top-0 z-10 flex flex-col gap-3 w-full bg-dark-background pt-3">
      <div className="flex w-full justify-between items-center px-9">

        {children}
      </div>
      <Separator className="bg-[#1f1f2e] w-full" />
    </header>
  );
};

export default PageHeader;
