import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import { TodoDataType } from '../types/todo';
import { handleGetTodo } from '../utils/todo';

const Main: React.FC = () => {
  const [todoListData, setTodoListData] = useState<TodoDataType[] | []>([]);

  useEffect(() => {
    handleGetTodo({ setTodoListData });
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
