import { FilterButton } from './FilterButton';
import { Category } from '../types';

interface FilterBarProps {
  activeFilter: Category;
  onFilterChange: (filter: Category) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex gap-4 mb-8 flex-wrap justify-center">
      <FilterButton
        label="All"
        active={activeFilter === 'all'}
        onClick={() => onFilterChange('all')}
      />
      <FilterButton
        label="Developers"
        active={activeFilter === 'developer'}
        onClick={() => onFilterChange('developer')}
      />
      <FilterButton
        label="Designers"
        active={activeFilter === 'designer'}
        onClick={() => onFilterChange('designer')}
      />
      <FilterButton
        label="Growth"
        active={activeFilter === 'growth'}
        onClick={() => onFilterChange('growth')}
      />
    </div>
  );
}