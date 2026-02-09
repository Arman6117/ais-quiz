import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Trash2 } from "lucide-react";
const MoreDropDownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#121212] border-[#29292D]">
        <DropdownMenuItem className="cursor-pointer bg-transparent flex px-0 justify-center text-white font-semibold transition-colors focus:text-slate-400  focus:bg-[#121212]">
          <div className="flex items-center gap-2 ">
            <Trash2 className="text-destructive" />
            <span className="">Delete</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreDropDownMenu;
