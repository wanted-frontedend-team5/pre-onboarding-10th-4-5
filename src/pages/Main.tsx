import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import { getTodoList } from '../api/todo';
import { TodoListType } from '../types/todo';

const Main: React.FC = () => {
  const [todoListData, setTodoListData] = useState<TodoListType>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getTodoList();
        setTodoListData(data || []);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchData();
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
