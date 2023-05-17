import React from 'react';
import InputTodo from 'components/todo/InputTodo';
import TodoList from 'components/todo/TodoList';
import { useTodoList } from 'hooks/useTodoList';
import { MainLayout } from 'components/layout/MainLayout';

const Main = () => {
  const { todoListData, setTodoListData } = useTodoList();

  return (
    <MainLayout>
      <InputTodo setTodos={setTodoListData} />
      <TodoList todos={todoListData} setTodos={setTodoListData} />
    </MainLayout>
  );
};

export default Main;
