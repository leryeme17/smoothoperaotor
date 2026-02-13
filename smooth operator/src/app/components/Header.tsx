import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black/30 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-600 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl text-white">Smooth Operator</h1>
            <p className="text-sm text-gray-400">Line Following Robot Dashboard</p>
          </div>
        </div>
      </div>
    </header>
  );
}