'use client';
import React, { useEffect } from 'react';
import Gauge from '@/components/Gauge';
import { gaugesMetaData } from '../../data/gauge_data';
import { dashboardGaugeQuery } from '@/queries/dashboardQuery';
import {
  registerDataConsumer,
  startPolling,
  stopPolling,
} from '@/store/slices/meterSlice';
import { useDispatch, useSelector } from 'react-redux';

function BuyerDashboard({ meterTopic }) {
  const dispatch = useDispatch();
  const query = dashboardGaugeQuery('testing', meterTopic);
  const { dataPipe } = useSelector((state) => state.meter);

  useEffect(() => {
    dispatch(
      registerDataConsumer({
        key: `db-gauges-${meterTopic}`,
        query,
        interval: 5000,
      })
    );

    dispatch(startPolling());

    return () => {
      dispatch(stopPolling());
    };
  }, [dispatch, meterTopic, query]);

  const gaugesData = dataPipe[`db-gauges-${meterTopic}`]?.reduce(
    (acc, data) => {
      acc[data.field] = data.value;
      return acc;
    },
    {}
  );

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gaugesMetaData?.map(({ text, unit, identifier, subArcs }, index) => {
          return (
            <Gauge
              key={index}
              value={gaugesData?.[identifier] || 0.0}
              text={text}
              unit={unit}
              subArcs={subArcs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BuyerDashboard;
