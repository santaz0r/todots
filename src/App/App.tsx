import styled from './App.module.scss';
import { useState } from 'react';
import data from '../data/data.json';
import TodosList from './components/TodosList/TodosList';
import TextField from './components/Form/TextField/TextField';
import { TTodo } from './types/Todos';
import Button from './components/Button/Button';
import Group from './components/Group/Group';
import ButtonsGroup from './components/Group/ButtonsGroup';
import useFilteredByFilter from '../hooks/useFilteredByFilter';
import useFilteredTodos from '../hooks/useFilteredBySearch';
import { EFilterBtns } from './types/FilterBtns';

const filterButtons = [
  { id: '1', title: 'All', value: 'all' },
  { id: '2', title: 'Active', value: 'active' },
  { id: '3', title: 'Completed', value: 'completed' },
];

const filterButtons2 = [EFilterBtns.active, EFilterBtns.all, EFilterBtns.completed];

const App = () => {
  const [todos, setTodos] = useState<TTodo[]>(data);
  const [text, setText] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(e.target.value);
  };

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  const addTodo = () => {
    const newTodo: TTodo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
      important: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText('');
  };

  const toggleProperty = (id: TTodo['id'], propName: keyof Pick<TTodo, 'completed' | 'important'>) => {
    setTodos((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            [propName]: !task[propName],
          };
        }
        return task;
      })
    );
  };

  const deleteTodo = (id: TTodo['id']) => setTodos((prev) => prev.filter((i) => i.id !== id));
  const handleChangeStatus = (id: TTodo['id']) => toggleProperty(id, 'completed');
  const toggleImportant = (id: TTodo['id']) => toggleProperty(id, 'important');
  const handleClearCompleted = () => setTodos((prev) => prev.filter((t) => !t.completed));

  const filteredTodos = useFilteredByFilter({ items: todos, filterState: filter });
  const { displayedTodos, searchParam, setSearchParam } = useFilteredTodos(filteredTodos);

  const setActiveFilterClass = (value: string) =>
    filter === value ? `${styled.filter__btn} ${styled.active}` : styled.filter__btn;

  return (
    <>
      <h1 className={styled.title}>My todos</h1>
      <div className={styled.filter}>
        <TextField value={searchParam} onChange={changeSearch} className={styled.search} placeholder="Search todo" />
        <ButtonsGroup>
          {filterButtons.map((i) => (
            <Button
              className={setActiveFilterClass(i.value)}
              key={i.id}
              onClick={() => setFilter(i.value as 'all' | 'active' | 'completed')}
            >
              {i.title}
            </Button>
          ))}

          {/* {filterButtons2.map((i) => (
            <Button className={setActiveFilterClass(i)} key={i} onClick={() => setFilter(i)}>
              {i}
            </Button>
          ))} */}
        </ButtonsGroup>
      </div>
      <TodosList
        todos={displayedTodos}
        onChangeStatus={handleChangeStatus}
        toggleImportant={toggleImportant}
        onDelete={deleteTodo}
      />
      <Group className={styled.group}>
        <TextField value={text} onChange={changeText} placeholder="What needs to be done" />
        <Button disabled={!text} onClick={addTodo}>
          Add new todo
        </Button>
      </Group>
      <div className={styled.controls}>
        <div className={styled.controls__counter}>
          {activeTodos.length ? `${activeTodos.length} items left` : 'All work done :)'}
        </div>

        <Button className={styled.controls__btn} disabled={!completedTodos.length} onClick={handleClearCompleted}>
          Clear completed
        </Button>
      </div>
    </>
  );
};

export default App;
