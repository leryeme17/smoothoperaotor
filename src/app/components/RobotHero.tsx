import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Zap, Trophy } from 'lucide-react';

export function RobotHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      <div className="bg-black/20 backdrop-blur-xl rounded-xl p-8 border border-red-600/50">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-red-500/20 text-red-300 border-red-500/50">
                  <Zap className="w-3 h-3 mr-1" />
                  Active
                </Badge>
                <Badge className="bg-white/20 text-white border-white/50">
                  <Trophy className="w-3 h-3 mr-1" />
                  Competition Ready
                </Badge>
              </div>
              <h2 className="text-5xl text-white">
                Smooth Operator
              </h2>
              <p className="text-xl text-red-400">
                Precision Line Following Robot
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Meet Smooth Operator, an advanced autonomous line-following robot designed for competitive racing. 
              Equipped with cutting-edge sensors and optimized algorithms, it navigates black line tracks with 
              exceptional speed and accuracy mainly made for F-AST competition at national higher school of autonomous systems.
              <br /><br />
              Team members: HAFSI Amir, BENMAKHLOUF Leryeme, KICHAH Amine.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-black/20 backdrop-blur-md rounded-lg border border-red-900">
                <div className="text-3xl text-red-500">8+</div>
                <div className="text-sm text-gray-400">Sensors</div>
              </div>
              <div className="text-center p-4 bg-black/20 backdrop-blur-md rounded-lg border border-red-900">
                <div className="text-3xl text-red-500">Fast</div>
                <div className="text-sm text-gray-400">Response</div>
              </div>
              <div className="text-center p-4 bg-black/20 backdrop-blur-md rounded-lg border border-red-900">
                <div className="text-3xl text-red-500">High</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 rounded-xl blur-3xl"></div>
            <ImageWithFallback
              src="/images/main1.jpg"
              alt="Smooth Operator Robot"
              className="relative w-full h-[400px] object-cover rounded-xl shadow-2xl border-2 border-red-900/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}