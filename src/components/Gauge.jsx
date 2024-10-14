import { GaugeComponent } from '@/dynamics/Guage';

const Gauge = ({ value, text, unit, subArcs, width = 280 }) => {
  return (
    <div className="relative flex items-center justify-center bg-gray-100 rounded-md p-5">
      <GaugeComponent
        className=""
        style={{ width: `${width}px` }}
        value={value}
        type="radial"
        labels={{
          tickLabels: {
            type: 'inner',
            defaultTickValueConfig: {
              formatTextValue: (value) => value + ' ' + unit,
              style: { fontSize: 8 },
            },
          },
          valueLabel: {
            formatTextValue: (value) => value + ' ' + unit,
          },
        }}
        arc={{
          subArcs: subArcs,
          padding: 0.02,
          width: 0.08,
          cornerRadius: 0,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
      <div className="absolute top-[90px] text-black text-xs font-h-medium">
        {text}
      </div>
      <div
        className="absolute bottom-10 text-black font-h-medium bg-gray-200 rounded text-xs py-2 overflow-hidden flex items-center justify-center"
        style={{ width: `${width / 3.5}px` }}
      >
        <p className="truncate">{`${Math.floor(value)}.00 ${unit}`}</p>
      </div>
    </div>
  );
};

export default Gauge;
