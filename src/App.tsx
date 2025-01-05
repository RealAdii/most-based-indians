import { useState } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { BuilderGrid } from './components/BuilderGrid';
import { Category } from './types';

export function App() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <BuilderGrid activeFilter={activeFilter} />
      </main>
    </div>
  );
}

export default App;