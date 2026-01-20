import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type SummaryItem = {
  label: string;
  value: string;
};

type SummaryCardProps = {
  title: string;
  items: SummaryItem[];
  icon: ReactNode;
};

export function SummaryCard({ title, items, icon }: SummaryCardProps) {
  return (
    <Card className="rounded-2xl pt-0 ">
      <div className="flex flex-row rounded-t-2xl border-b items-center bg-gray-200 justify-between px-2 py-2">
        {/* Left: Icon + Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            {icon}
          </div>
          <span className="text-sm font-medium text-gray-900">{title}</span>
        </div>

        {/* Right: View all */}
        <button className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <CardContent className="grid grid-cols-3 gap-4 ">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs text-gray-400 font-medium">{item.label}</p>
            <p className="text-sm font-semibold text-gray-900 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
