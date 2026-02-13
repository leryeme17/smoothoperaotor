import { Header } from './components/Header';
import { RobotHero } from './components/RobotHero';
import { ComponentsGrid } from './components/ComponentsGrid';
import { Specifications } from './components/Specifications';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-12">
          <RobotHero />
          <ComponentsGrid />
          <div className="grid lg:grid-cols-2 gap-8">
            <Specifications />
            <PerformanceMetrics />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}