import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", inflow: 30, mrr: 20, gmv: 10 },
  { month: "Feb", inflow: 25, mrr: 18, gmv: 12 },
  { month: "Mar", inflow: 28, mrr: 22, gmv: 14 },
  { month: "Apr", inflow: 22, mrr: 16, gmv: 9 },
];

export default function SalesOverviewChart() {
  return (
    <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={6} barCategoryGap={16}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />

          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
            contentStyle={{
              borderRadius: 8,
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontSize: 12,
            }}
          />

          <Bar dataKey="inflow" fill="#2563EB" radius={[6, 6, 0, 0]} />
          <Bar dataKey="mrr" fill="#22C55E" radius={[6, 6, 0, 0]} />
          <Bar dataKey="gmv" fill="#EF4444" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
