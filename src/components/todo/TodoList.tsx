import React from 'react';
import { TodoListType } from 'type/todo';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoListType;
  setTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
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
