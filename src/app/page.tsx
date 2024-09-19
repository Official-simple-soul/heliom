'use client';
import { GaugeComponent } from '@/dynamics/Guage';
import { useEffect, useState } from 'react';

export default function Home() {
  // Create an array to store individual counts for each gauge
  const [counts, setCounts] = useState(Array(6).fill(0)); // 6 gauges initialized to 0

  useEffect(() => {
    // Set up intervals for each gauge to update independently
    const intervals = counts.map((_, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index ? Math.floor(Math.random() * 100) : count
          )
        );
      }, 2000)
    );

    // Cleanup intervals on component unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  // Data array for different gauges, now including subArcs for each gauge
  const gaugesData = [
    {
      text: 'Voltage',
      unit: 'V',
      subArcs: [
        { limit: 20, color: '#EA4228', showTick: true },
        { limit: 40, color: '#F58B19', showTick: true },
        { limit: 60, color: '#F5CD19', showTick: true },
        { limit: 80, color: '#EA4228', showTick: true },
        { limit: 100, color: '#5BE12C', showTick: true },
      ],
    },
    {
      text: 'Gauge',
      unit: 'G',
      subArcs: [
        { limit: 20, color: '#EA4228', showTick: true },
        { limit: 50, color: '#F58B19', showTick: true },
        { limit: 80, color: '#5BE12C', showTick: true },
        { limit: 100, color: '#5BE12C', showTick: true },
      ],
    },
    {
      text: 'Temperature',
      unit: '°C',
      subArcs: [
        { limit: 25, color: '#EA4228', showTick: true },
        { limit: 50, color: '#F58B19', showTick: true },
        { limit: 75, color: '#F5CD19', showTick: true },
        { limit: 100, color: '#5BE12C', showTick: true },
      ],
    },
    {
      text: 'Power',
      unit: 'W',
      subArcs: [
        { limit: 10, color: '#EA4228', showTick: true },
        { limit: 40, color: '#F58B19', showTick: true },
        { limit: 60, color: '#F5CD19', showTick: true },
        { limit: 80, color: '#EA4228', showTick: true },
        { limit: 100, color: '#5BE12C', showTick: true },
      ],
    },
    {
      text: 'Volume',
      unit: 'L',
      subArcs: [
        { limit: 20, color: '#F58B19', showTick: true },
        { limit: 50, color: '#EA4228', showTick: true },
        { limit: 100, color: '#5BE12C', showTick: true },
      ],
    },
    {
      text: 'Meter',
      unit: 'M',
      subArcs: [
        { limit: 20, color: '#EA4228', showTick: true },
        { limit: 40, color: '#F58B19', showTick: true },
        { limit: 60, color: '#F5CD19', showTick: true },
        { limit: 80, color: '#EA4228', showTick: true },
        { limit: 100, color: '#5BE12C', showTick: true },
      ],
    },
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        {gaugesData.map((gauge, index) => (
          <Guage
            key={index}
            count={counts[index]} // Each gauge has its own count
            text={gauge.text}
            unit={gauge.unit}
            subArcs={gauge.subArcs}
          />
        ))}
      </div>
    </div>
  );
}

const Guage = ({ count, text, unit, subArcs }) => {
  return (
    <div className="relative flex items-center justify-center bg-gray-100 rounded-md p-5">
      <GaugeComponent
        className=""
        value={count}
        type="radial"
        arc={{
          colorArray: ['#5BE12C', '#EA4228'],
          subArcs: subArcs, // Now subArcs are passed dynamically
          padding: 0.02,
          width: 0.08,
          cornerRadius: 0,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
      <div className="absolute top-[80px] text-black text-sm font-h-medium">
        {text}
      </div>
      <div className="absolute bottom-10 text-black font-h-medium bg-gray-200 rounded text-xs h-10 px-2 min-w-20 max-w-24 overflow-hidden flex items-center justify-center">
        <p className="truncate">{`${Math.floor(count)}.00 ${unit}`}</p>
      </div>
    </div>
  );
};
