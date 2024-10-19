export const dashboardGaugeQuery = (bucket, meter_topic) =>
  `from(bucket: "${bucket}")
  |> range(start: -1m)
  |> filter(fn: (r) => r["topic"] == "${meter_topic}")
  |> sort(columns: ["time"], desc: true)
  |> limit(n: 1)
  `;

export const dashboardChartQuery = (bucket, meter_topic) =>
  `from(bucket: "${bucket}")
  |> range(start: -1m)
  |> filter(fn: (r) => r["topic"] == "${meter_topic}")
  |> sort(columns: ["time"], desc: true)
  |> limit(n: 1)
  `;

export const meterTopicQuery = (bucket) =>
  `from(bucket: "${bucket}")
      |> range(start: -1h)
      |> filter(fn: (r) => r["_field"] == "current")
      |> distinct(column: "topic")
      |> limit(n: 1)
      `;
