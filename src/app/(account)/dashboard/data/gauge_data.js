const defaultColors = [
  '#FF5733',
  '#FFC300',
  '#DAF7A6',
  '#C70039',
  '#900C3F',
  '#581845',
  '#28B463',
  '#1F618D',
  '#A569BD',
  '#48C9B0',
];

export const makeGaugeMetadata = (
  text,
  identifier,
  unit,
  limits = [10, 20, 40, 60, 60, 100],
  colors = null
) => {
  colors = colors ?? defaultColors;

  const subArcs = limits.map((limit, index) => ({
    limit,
    color: colors[index],
    showTick: true,
  }));
  return { text, identifier, unit, subArcs };
};


export const gaugesMetaData = [
  makeGaugeMetadata('Voltage', 'voltage', 'V', [20, 40, 60, 80, 100]),
  makeGaugeMetadata('Energy', 'energy', 'G', [20, 50, 80, 100]),
  makeGaugeMetadata('Frequency', 'frequency', '°C', [25, 50, 75, 100]),
  makeGaugeMetadata('Power', 'power', 'W', [10, 40, 60, 80, 100]),
  makeGaugeMetadata('Current', 'current', 'M', [20, 40, 60, 80, 100]),
]