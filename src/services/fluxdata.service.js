import { InfluxDB } from '@influxdata/influxdb-client';

const token = process.env.NEXT_PUBLIC_INFLUX_DB_TOKEN;
const org = process.env.NEXT_PUBLIC_INFLUX_DB_ORG;
const url = process.env.NEXT_PUBLIC_INFLUX_DB_URL;

const client = new InfluxDB({ url, token });
const queryApi = client.getQueryApi(org);

export const fetchfluxDBData = async (query) => {
  try {
    const rows = await new Promise((resolve, reject) => {
      const tempRows = [];
      queryApi.queryRows(query, {
        next(row, tableMeta) {
          const o = tableMeta.toObject(row);
          const { _time, _value, _field, _measurement, host, topic } = o;

          tempRows.push({
            time: _time,
            value: _value,
            field: _field,
            measurement: _measurement,
            host,
            topic,
          });
        },
        error(error) {
          console.error('Error querying InfluxDB:', error);
          reject(error);
        },
        complete() {
          console.log('Query complete');
          resolve(tempRows);
        },
      });
    });
    return rows;
  } catch (error) {
    console.error('Error fetching InfluxDB data:', error);
    throw error;
  }
};
