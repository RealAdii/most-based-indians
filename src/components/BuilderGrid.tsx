import { builders } from '../data/builders';
import { BuilderCard } from './BuilderCard';
import { Category } from '../types';

interface BuilderGridProps {
  activeFilter: Category;
}

export function BuilderGrid({ activeFilter }: BuilderGridProps) {
  const filteredBuilders = builders.filter(
    builder => activeFilter === 'all' || builder.category === activeFilter
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBuilders.map((builder) => (
        <BuilderCard
          key={builder.twitter}
          name={builder.name}
          twitter={builder.twitter}
        />
      ))}
    </div>
  );
}