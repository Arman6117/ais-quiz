
interface DifficultyIndicatorProps {
  level: number; // 1 to 4
  label: string;
}

export const DifficultyIndicator = ({ level, label }: DifficultyIndicatorProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`h-3 w-1.5 rounded-full transition-colors ${
              bar <= level ? "bg-blue-600" : "bg-slate-700"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-slate-300">{label}</span>
    </div>
  );
};