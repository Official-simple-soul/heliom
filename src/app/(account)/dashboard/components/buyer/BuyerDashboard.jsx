'use client';
import React, { useEffect } from 'react';
import Gauge from '@/components/Gauge';
import { useGlobalContext } from '@/store/context';
import { gaugesMetaData } from '../../data/gauge_data';
import {dashboardGaugeQuery } from '@/queries/dashboardQuery'

function BuyerDashboard({meterTopic}) {
  const { registerDataConsumer, dataPipe } = useGlobalContext();

  const query = dashboardGaugeQuery('testing', meterTopic);

  useEffect(() => {
    registerDataConsumer(`db-gauges-${meterTopic}`, query, 5000);
  }, [meterTopic]);

  const gaugesData = dataPipe[`db-gauges-${meterTopic}`]?.reduce((acc, data) => {
    acc[data.field] = data.value;
    return acc;
  }, {})

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gaugesMetaData?.map(({ text, unit, identifier, subArcs }, index) => {
          return <Gauge
          key={index}
          value={gaugesData?.[identifier] || 0.00}
          text={text}
          unit={unit}
          subArcs={subArcs}
        />
        })}
      </div>
    </div>
  );
}

export default BuyerDashboard;
