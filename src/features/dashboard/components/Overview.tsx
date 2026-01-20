import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Users } from "lucide-react";
import { SummaryCard } from "./SummaryCard";
import { StatCard } from "./StatCard";
import SalesOverviewChart from "./SalesOverviewChart";

export function Overview() {
  return (
    // <div className="w-full rounded-xl space-y-6">
    //   <h2 className="text-lg font-semibold">Welcome, Ahmed</h2>

    //   <div className="grid grid-cols-12 gap-6">
    //     {/* Sales Overview */}
    //     <Card className="col-span-8 rounded-2xl">
    //       <CardHeader className="flex flex-row items-center justify-between">
    //         <div>
    //           <CardTitle>Sales Overview</CardTitle>
    //           <p className="text-xs text-muted-foreground mt-3">
    //             Showing overview Jan 2022 - Sep 2022
    //           </p>
    //         </div>

    //         <div>
    //           <Button className="rounded-2xl" variant="outline" size="sm">
    //             View Transactions
    //           </Button>
    //         </div>
    //       </CardHeader>

    //       <div className="flex justify-end px-6 mt-[-16px]">
    //         <Tabs defaultValue="year">
    //           <TabsList className="bg-muted">
    //             <TabsTrigger value="week">1 Week</TabsTrigger>
    //             <TabsTrigger value="month">1 Month</TabsTrigger>
    //             <TabsTrigger value="year">1 Year</TabsTrigger>
    //           </TabsList>
    //         </Tabs>
    //       </div>

    //       <hr />

    //       <CardContent className="grid grid-cols-12 gap-4">
    //         {/* Chart placeholder */}
    //         <div className="col-span-5 h-[160px] rounded-xl border flex items-center justify-center text-muted-foreground">
    //           Chart Area
    //         </div>

    //         {/* Stats */}
    //         <div className="col-span-7 grid grid-cols-2 gap-4">
    //           <StatCard
    //             title="Total Inflow"
    //             value="₦120,000,000.00"
    //             color="text-blue-600"
    //             change="▲ 2.5%"
    //             changeType="up"
    //           />
    //           <StatCard
    //             title="MRR"
    //             value="₦50,000,000.00"
    //             color="text-green-600"
    //             change="▲ 2.5%"
    //             changeType="up"
    //           />
    //           <StatCard
    //             title="Commission Revenue"
    //             value="₦200,000,000.00"
    //             color="text-emerald-600"
    //             change="▲ 0.5%"
    //             changeType="up"
    //           />
    //           <StatCard
    //             title="GMV"
    //             value="₦100,000,000.00"
    //             color="text-red-500"
    //             change="▼ 0.5%"
    //             changeType="down"
    //           />
    //         </div>
    //       </CardContent>
    //     </Card>

    //     {/* Right side */}
    //     <div className="col-span-4 space-y-6">
    //       <SummaryCard
    //         title="Listings Overview"
    //         icon={<Home className="h-4 w-4" />}
    //         items={[
    //           { label: "Total", value: "1.8k" },
    //           { label: "Active", value: "80" },
    //           { label: "Archived", value: "1k" },
    //         ]}
    //       />

    //       <SummaryCard
    //         title="Users Overview"
    //         icon={<Users className="h-4 w-4" />}
    //         items={[
    //           { label: "Total", value: "20.7k" },
    //           { label: "Riders", value: "8.5k" },
    //           { label: "Subscribers", value: "7.5k" },
    //         ]}
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="w-full rounded-xl space-y-6">
      <h2 className="text-lg font-semibold">Welcome, Ahmed</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sales Overview */}
        <Card className="lg:col-span-8 rounded-2xl">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Sales Overview</CardTitle>
              <p className="text-xs text-muted-foreground mt-2">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>

            <Button
              className="rounded-2xl w-full sm:w-auto"
              variant="outline"
              size="sm"
            >
              View Transactions
            </Button>
          </CardHeader>

          <div className="flex justify-start sm:justify-end px-6">
            <Tabs defaultValue="year">
              <TabsList className="bg-muted flex flex-wrap">
                <TabsTrigger value="week">1 Week</TabsTrigger>
                <TabsTrigger value="month">1 Month</TabsTrigger>
                <TabsTrigger value="year">1 Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <hr />

          <CardContent className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Chart */}
            <div className="md:col-span-6 h-[160px] mt-4 mr-4 rounded-xl flex items-center justify-center text-muted-foreground">
              <SalesOverviewChart />
            </div>

            {/* Stats */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard
                title="Total Inflow"
                value="₦120,000,000.00"
                color="text-blue-600"
                change="▲ 2.5%"
                changeType="up"
              />
              <StatCard
                title="MRR"
                value="₦50,000,000.00"
                color="text-green-600"
                change="▲ 2.5%"
                changeType="up"
              />
              <StatCard
                title="Revenue"
                value="₦200,000,000.00"
                color="text-emerald-600"
                change="▲ 0.5%"
                changeType="up"
              />
              <StatCard
                title="GMV"
                value="₦100,000,000.00"
                color="text-red-500"
                change="▼ 0.5%"
                changeType="down"
              />
            </div>
          </CardContent>
        </Card>

        {/* Right side */}
        <div className="lg:col-span-4 space-y-6">
          <SummaryCard
            title="Listings Overview"
            icon={<Home className="h-4 w-4" />}
            items={[
              { label: "Total", value: "1.8k" },
              { label: "Active", value: "80" },
              { label: "Archived", value: "1k" },
            ]}
          />

          <SummaryCard
            title="Users Overview"
            icon={<Users className="h-4 w-4" />}
            items={[
              { label: "Total", value: "20.7k" },
              { label: "Riders", value: "8.5k" },
              { label: "Subscribers", value: "7.5k" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
