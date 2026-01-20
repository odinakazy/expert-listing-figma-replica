type StatCardProps = {
  title: string;
  value: string;
  color: string;
  change: string;
  changeType: "up" | "down";
};

export function StatCard({
  title,
  value,
  color,
  change,
  changeType,
}: StatCardProps) {
  return (
    <div className="rounded-xl border p-4">
      <p className={`text-sm font-semibold ${color}`}>{value}</p>

      <div className=" flex items-center gap-3 mt-2">
        <p className="text-[10px] font-medium ">{title}</p>

        <div className="flex items-center gap-1 text-xs">
          <span
            className={`font-medium ${
              changeType === "up" ? "text-green-600" : "text-red-500"
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}
