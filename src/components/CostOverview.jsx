'use client';
import DropDown from './DropDown';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A bar chart';

const chartData = [
  { month: 'January', desktop: 78 },
  { month: 'February', desktop: 50 },
  { month: 'March', desktop: 88 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 92 },
  { month: 'June', desktop: 70 },
  { month: 'July', desktop: 68 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#A5B0FC',
  },
};

export function CostOverview() {
  return (
    <Card className='w-[1000px]'>
      <CardHeader className='flex-row justify-between pt-7 pb-7 px-10 items-start space-y-0'>
        <div className='font-bold text-[16px] leading-5'>Cost Overview</div>
        <DropDown />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='w-full h-[400px]'>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              ticks={[0, 25, 50, 75, 100]}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey='desktop' fill='var(--color-desktop)' radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
