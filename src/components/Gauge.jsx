import { GaugeComponent } from '@/dynamics/Guage';

const Gauge = ({ count, text, unit, subArcs }) => {
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

  export default Gauge