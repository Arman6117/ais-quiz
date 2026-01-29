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
        "bg-[#18181B] flex w-72 h-40 rounded-md border border-gray-800 px-5 py-5",
        className
      )}
    >
        {label && Icon && (
             <div className='flex  w-full justify-between' >
             <span className='text- font-semibold text-gray-500'>{label}</span>
             <Icon className='text-gray-500 size-5'/>
           </div>
        )}
      {children}
    </div>
  );
};

export default Card;
