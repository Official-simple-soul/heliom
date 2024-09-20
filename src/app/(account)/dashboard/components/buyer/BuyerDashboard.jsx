'use client'
import React, { useEffect, useState } from 'react';
import Gauge from '@/components/Gauge';
import { gaugesData } from '../../data/gauge_data';

function BuyerDashboard() {
  const [counts, setCounts] = useState(Array(6).fill(0));

  useEffect(() => {
    const intervals = counts.map((_, index) =>
      setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index ? Math.floor(Math.random() * 100) : count
          )
        );
      }, 2000)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        {gaugesData.map((gauge, index) => (
          <Gauge
            key={index}
            count={counts[index]}
            text={gauge.text}
            unit={gauge.unit}
            subArcs={gauge.subArcs}
          />
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;
