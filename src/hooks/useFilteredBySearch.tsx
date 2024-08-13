import { useState } from 'react';
import { TTodo } from '../App/types/Todos';

const useFilteredTodos = (todos: TTodo[]) => {
  const [searchParam, setSearchParam] = useState<string>('');

  const displayedTodos = searchParam
    ? todos.filter((todo) => todo.title.toLowerCase().includes(searchParam.toLowerCase()))
    : todos;

  return { searchParam, setSearchParam, displayedTodos };
};

export default useFilteredTodos;
