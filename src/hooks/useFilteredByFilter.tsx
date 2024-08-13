import { TTodo } from '../App/types/Todos';

type TProps = {
  filterState: 'all' | 'active' | 'completed';
  items: TTodo[];
};

const useFilteredByFilter = ({ filterState, items }: TProps): TTodo[] => {
  return items.filter((i) => (filterState === 'all' ? i : filterState === 'active' ? !i.completed : i.completed));
};

export default useFilteredByFilter;
