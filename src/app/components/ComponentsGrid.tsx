import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu, Eye, Zap, Gauge, Wifi, CircuitBoard, Cog, Battery, Upload } from 'lucide-react';
import { useState } from 'react';

const components = [
  {
    icon: Cpu,
    image: '/images/1.jpg',
    name: 'Microcontroller',
    description: 'Arduino Uno/Nano',
    details: 'ATmega328P processor for real-time control'
  },
  {
    icon: Eye,
    name: 'IR Sensors',
    image: '/images/2.webp',
    description: '8x Line Sensors',
    details: 'High-precision infrared sensor array'
  },
  {
    icon: Cog,
    name: 'DC Motors',
    image: '/images/3.jpg',
    description: '2x Geared Motors',
    details: '100-300 RPM with high torque output'
  },
  {
    icon: CircuitBoard,
    name: 'Motor Driver',
    description: 'L298N H-Bridge',
    details: 'Dual channel motor speed control'
  },
  {
    icon: Battery,
    name: 'Power Supply',
    description: 'Li-Po Battery',
    details: '7.4V 2200mAh rechargeable'
  },
  {
    icon: Gauge,
    name: 'Encoders',
    description: 'Wheel Encoders',
    details: 'Precise speed and distance tracking'
  },
  {
    icon: Wifi,
    name: 'Communication',
    description: 'Bluetooth Module',
    details: 'Wireless debugging and tuning'
  },
  {
    icon: Zap,
    name: 'PID Controller',
    description: 'Software Algorithm',
    details: 'Tuned feedback control system'
  }
];

export function ComponentsGrid() {
  const [componentImages, setComponentImages] = useState<Record<string, string>>({});

  const handleImageUpload = (componentName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setComponentImages(prev => ({
          ...prev,
          [componentName]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-white">
          Robot Components
        </h2>
        <p className="text-gray-400">
          High-performance hardware powering Smooth Operator
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {components.map((component) => {
          const Icon = component.icon;
          const hasImage = componentImages[component.name];
          
          return (
            <Card
              key={component.name}
              className="bg-black/20 backdrop-blur-xl border-red-900 hover:border-red-600 transition-all hover:scale-105"
            >
              <CardHeader>
                {hasImage ? (
                  <div className="relative group mb-3">
                    <ImageWithFallback
                      src={hasImage}
                      alt={component.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <label className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer rounded-lg">
                      <Upload className="w-6 h-6 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(component.name, e)}
                        className="hidden"
                      />
                    </label>
                  </div>
                ) : (
                  <label className="w-full h-40 rounded-lg bg-red-950/20 border-2 border-dashed border-red-900 flex flex-col items-center justify-center mb-3 cursor-pointer hover:border-red-600 transition-colors group">
                    <Icon className="w-8 h-8 text-red-600 mb-2 group-hover:text-red-500" />
                    <span className="text-xs text-gray-400 group-hover:text-gray-300">Click to upload image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(component.name, e)}
                      className="hidden"
                    />
                  </label>
                )}
                <CardTitle className="text-white">{component.name}</CardTitle>
                <CardDescription className="text-red-400">
                  {component.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  {component.details}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}