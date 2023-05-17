import React from 'react';
import { TodoListType } from 'type/todo';
import { RemoveTodo } from './RemoveTodo';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  return (
    <li className="item">
      <span>{title}</span>
      <RemoveTodo id={id} setTodos={setTodos} />
    </li>
  );
};

export default TodoItem;
