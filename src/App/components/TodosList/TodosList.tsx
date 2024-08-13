import { FC } from 'react';
import { TTodo } from '../../types/Todos';
import Todo from '../Todo/Todo';

import styled from './todos-list.module.scss';

type TProps = {
  todos: TTodo[];
  onChangeStatus: (id: TTodo['id']) => void;
  toggleImportant: (id: TTodo['id']) => void;
  onDelete: (id: TTodo['id']) => void;
};

const TodosList: FC<TProps> = ({ todos, onChangeStatus, toggleImportant, onDelete }) => {
  return todos.length ? (
    <div className={styled.todos}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChangeStatus={onChangeStatus}
          toggleImportant={toggleImportant}
          onDelete={onDelete}
        />
      ))}
    </div>
  ) : (
    <div className={styled.todos}>the list is empty</div>
  );
};

export default TodosList;
