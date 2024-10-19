import * as React from "react";
// import CurrentChart from "@/components/CurrentChart";
import ChartPage from "@/components/ui/ChartPage";
export function LineCharts({ chartsData }) {
  const firstIndex = chartsData[0];
  console.log("First Index:", firstIndex);
  return (
    <div className="w-full flex flex-col gap-4 pb-5">
      {/* <CurrentChart firstIndex={firstIndex} /> */}
      <ChartPage />
    </div>
  );
}
