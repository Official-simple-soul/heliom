"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { format, addHours, subHours } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const generateData = (startDate, count) => {
  return Array.from({ length: count }, (_, i) => {
    const date = addHours(startDate, i);
    return {
      date: format(date, "h:mm a"),
      value: Math.floor(Math.random() * 1000) + 500,
    };
  });
};

export default function ChartPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [interval, setInterval] = useState("1 hour");
  const [chartData, setChartData] = useState(() =>
    generateData(new Date(), 24)
  );
  const [startDate] = useState(new Date()); // Store the initial start date

  const formatDate = (date) => {
    return format(date, "M/d/yyyy h:mm a");
  };

  const handleNavigate = (hours, date = null) => {
    let newDate;

    // If a specific date is passed, use that; otherwise, calculate based on hours
    if (date) {
      newDate = date;
    } else {
      newDate =
        hours > 0
          ? addHours(currentDate, hours)
          : subHours(currentDate, Math.abs(hours));
    }

    if (isNaN(newDate)) {
      console.error("Invalid date generated");
      return;
    }

    setCurrentDate(newDate);
    setChartData(generateData(newDate, interval === "1 hour" ? 24 : 24 * 7));
  };

  const handleSort = (sortInterval) => {
    setInterval(sortInterval);
    setChartData(
      generateData(currentDate, sortInterval === "1 hour" ? 24 : 24 * 7)
    );
  };

  // Handle clicking on the date to navigate to the start date
  const handleDateClick = () => {
    handleNavigate(0, startDate);
  };

  return (
    <Card className="flex flex-col w-full h-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-xl">Chart Data</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-[400px]">
          <ChartContainer
            config={{
              value: {
                label: "Value",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  strokeWidth={2}
                  stroke="var(--color-value)"
                  dot={false} // Removes the dots
                  activeDot={{
                    r: 8,
                    style: { fill: "var(--color-value)", opacity: 0.8 },
                  }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-4 bg-background border mt-10 rounded-md p-2">
        <span
          className="text-sm cursor-pointer font-medium"
          onClick={handleDateClick} // navigate to the start date when clicked
        >
          {formatDate(currentDate)}
        </span>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleSort("1 day")}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Sort by 1 day</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Navigate 1 hour back</span>
          </Button>

          <span className="text-sm font-medium">{interval}</span>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate(1)}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Navigate 1 hour forward</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleSort("1 hour")}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Sort by 1 hour</span>
          </Button>
        </div>

        <span className="text-sm font-medium cursor-pointer">
          {formatDate(currentDate)}
        </span>
      </CardFooter>
    </Card>
  );
}
