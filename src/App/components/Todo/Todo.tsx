import { FC } from 'react';
import { TTodo } from '../../types/Todos';
import styled from './todo.module.scss';
import Button from '../Button/Button';
import Exclam from '../../assets/exclam.svg';
import Trash from '../../assets/trash.svg';

type TProps = {
  todo: TTodo;
  onChangeStatus: (id: TTodo['id']) => void;
  toggleImportant: (id: TTodo['id']) => void;
  onDelete: (id: TTodo['id']) => void;
};

const Todo: FC<TProps> = ({ todo, onChangeStatus, toggleImportant, onDelete }) => {
  const setClass = () => {
    return todo.important ? styled.important : '';
  };
  return (
    <div className={styled.todo}>
      <div className={styled.todo__info}>
        <input defaultChecked={todo.completed} type="checkbox" onClick={() => onChangeStatus(todo.id)} />
        <p className={styled.todo__text + ' ' + setClass()}>{todo.title}</p>
      </div>
      <div className={styled.todo__actions}>
        <Button className={styled.todo__btn} onClick={() => toggleImportant(todo.id)}>
          <Exclam />
        </Button>
        <Button className={styled.todo__btn} onClick={() => onDelete(todo.id)}>
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
