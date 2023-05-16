import { useEffect, useState } from 'react';

import Header from '../components/Header';
import { InputTodo } from '../components/InputTodo';
import { TodoList } from '../components/TodoList';
import { getTodoList } from '../api/todo';
import { todoList } from '../type';

export const Main = () => {
  const [todoListData, setTodoListData] = useState<todoList[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
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
