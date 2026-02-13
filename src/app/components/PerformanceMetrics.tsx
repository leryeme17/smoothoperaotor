import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Award } from 'lucide-react';

export function PerformanceMetrics() {
  return (
    <Card className="bg-black/20 backdrop-blur-xl border-red-900">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Race History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-6 bg-red-950/20 rounded-lg border border-red-900">
            <Trophy className="w-10 h-10 text-red-500 mx-auto mb-2" />
            <div className="text-3xl text-white mb-1">—</div>
            <div className="text-sm text-gray-400">Races Completed</div>
          </div>
          <div className="text-center p-6 bg-red-950/20 rounded-lg border border-red-900">
            <Award className="w-10 h-10 text-red-500 mx-auto mb-2" />
            <div className="text-3xl text-white mb-1">—</div>
            <div className="text-sm text-gray-400">Best Position</div>
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-red-900">
            <span className="text-gray-400">Best Lap Time</span>
            <span className="text-white">— seconds</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-red-900">
            <span className="text-gray-400">Average Speed</span>
            <span className="text-white">— cm/s</span>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm pt-4">
          Race data will be updated after competitions
        </p>
      </CardContent>
    </Card>
  );
}