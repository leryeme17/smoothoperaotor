import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Cog, Binary, Zap } from 'lucide-react';

const technologies = [
  {
    icon: Code,
    name: 'Arduino IDE',
    description: 'C++ programming environment'
  },
  {
    icon: Binary,
    name: 'PID Algorithm',
    description: 'Proportional-Integral-Derivative control'
  },
  {
    icon: Cog,
    name: 'Sensor Calibration',
    description: 'IR sensor threshold optimization'
  },
  {
    icon: Zap,
    name: 'PWM Control',
    description: 'Pulse Width Modulation for motors'
  }
];

export function SoftwareTech() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border-red-900">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Software & Technologies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            
            return (
              <div
                key={tech.name}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-red-900 hover:border-red-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-red-950/50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-white font-medium">{tech.name}</div>
                  <div className="text-sm text-gray-400">{tech.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-red-900">
          <div className="text-sm text-gray-400 space-y-2">
            <p><span className="text-red-400">Programming Language:</span> C/C++ (Arduino)</p>
            <p><span className="text-red-400">Control System:</span> Custom PID tuning for line tracking. The controller dynamically adjusts motor speeds based on positional error derived from infrared sensors. Custom tuning of Kp, Ki, and Kd parameters was performed experimentally to achieve optimal stability, responsiveness, and minimal oscillation at operating speed.</p>
            <p><span className="text-red-400">Communication:</span> Serial debugging & Bluetooth tuning</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
