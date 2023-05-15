import React from 'react';
import Header from 'components/layout/Header';
import InputTodo from 'components/todo/InputTodo';
import TodoList from 'components/todo/TodoList';
import { useTodoList } from 'hooks/useTodoList';

const Main: React.FC = () => {
  const { todoListData, setTodoListData } = useTodoList();

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
