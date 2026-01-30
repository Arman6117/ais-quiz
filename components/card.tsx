import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  icon?: LucideIcon;

}
const Card = ({ children, className, icon:Icon,label }: CardProps) => {
  return (
    <div
      className={cn(
      "bg-[#18181B] flex w-72 h-40 rounded-md border border-[#29292D] px-5 py-5",
        className
      )}
    >
        {label && Icon && (
             <div className='flex  w-full justify-between' >
            <span className='text-lg font-semibold text-[#677790]'>{label}</span>
             <Icon className='text-[#677790] size-6'/>
           </div>
        )}
      {children}
    </div>
  );
};

export default Card;
