import { GaugeComponent } from '@/dynamics/Guage';

const Gauge = ({ value, text, unit, subArcs }) => {
    return (
      <div className="relative flex items-center justify-center bg-gray-100 rounded-md p-5">
        <GaugeComponent
          className=""
          value={value}
          type="radial"
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
        <div className="absolute top-[80px] text-black text-sm font-h-medium">
          {text}
        </div>
        <div className="absolute bottom-10 text-black font-h-medium bg-gray-200 rounded text-xs h-10 px-2 w-32 overflow-hidden flex items-center justify-center">
          <p className="truncate">{`${Math.floor(value)}.00 ${unit}`}</p>
        </div>
      </div>
    );
  };

  export default Gauge