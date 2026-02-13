import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu, Eye, Zap, Gauge, Wifi, CircuitBoard, Cog, Battery, Upload } from 'lucide-react';
import { useState } from 'react';

const components = [
  {
    icon: Cpu,
    image: '/images/1.jpg', // Add your image path here
    name: 'Microcontroller',
    description: 'ESP32 Development Board',
    details: 'Recognizable by dual USB-C ports and pin labels, main microcontroller'
  },
  {
    icon: Eye,
    image: '/images/2.jpg', // Add your image path here
    name: 'DC-DC Buck Converter',
    description: 'Buck Converter (LM2596 type)',
    details: 'Used to step down battery voltage'
  },
  {
    icon: Cog,
    image: '/images/3.webp', // Add your image path here
    name: 'MOTOR Driver',
    description: 'Motor driver module (L293D type)',
    details: 'Controls the DC motors'
  },
  {
    icon: CircuitBoard,
    image: '/images/4.webp', // Add your image path here
    name: 'Batteries',
    description: '3 × 18650 Li-ion batteries',
    details: 'connected in series, 2500mAh'
  },
  {
    icon: Battery,
    image: '/images/5.webp', // Add your image path here
    name: 'Battery Holder',
    description: '18650 Battery holder',
    details: 'for holding batteries on the chassis'
  },
  {
    icon: Gauge,
    image: '/images/6.jpg', // Add your image path here
    name: 'DC motors',
    description: '2 × DC gear motors (TT motors)',
    details: 'Yellow gearbox style motors to control wheels'
  },
  {
    icon: Wifi,
    image: '/images/7.webp', // Add your image path here
    name: 'Chasis',
    description: 'Robot car chassis',
    details: 'laser-cut frame'
  },
  {
    icon: Zap,
    image: '/images/images.jpg', // Add your image path here
    name: 'Line sensor',
    description: 'QTR-8RC Reflectance Sensor',
    details: '8 IR LED/phototransistor pairs, making it a great detector for a line-following robots.'
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
          const hasImage = componentImages[component.name] || component.image;
          
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