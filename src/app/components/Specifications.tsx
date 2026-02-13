import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Ruler, Weight, Zap, Gauge } from 'lucide-react';

const specs = [
  {
    icon: Ruler,
    label: 'Dimensions',
    value: '20 × 15 × 10 cm'
  },
  {
    icon: Weight,
    label: 'Weight',
    value: '850 grams'
  },
  {
    icon: Zap,
    label: 'Operating Voltage',
    value: '7.4V DC'
  },
  {
    icon: Gauge,
    label: 'Max Speed',
    value: '150 cm/s'
  }
];

export function Specifications() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border-red-900">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Technical Specifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {specs.map((spec) => {
          const Icon = spec.icon;
          
          return (
            <div
              key={spec.label}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-red-900"
            >
              <div className="w-12 h-12 rounded-lg bg-red-950/50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">{spec.label}</div>
                <div className="text-lg text-white">{spec.value}</div>
              </div>
            </div>
          );
        })}

        <div className="mt-6 pt-6 border-t border-red-900 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Track Width Range</span>
            <span className="text-white">1.5 - 3 cm</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Turn Radius</span>
            <span className="text-white">≥ 10 cm</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Battery Life</span>
            <span className="text-white">45-60 minutes</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Sensor Range</span>
            <span className="text-white">0.5 - 1.5 cm</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}