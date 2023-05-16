import React, { Dispatch, SetStateAction } from 'react';
import TodoItem from './TodoItem';
import { TodoListType } from '../types/todo';

type TodoListProps = {
  todos: TodoListType;
  setTodos: Dispatch<SetStateAction<TodoListType>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};

export default TodoList;
