import React, { useState } from 'react';
import { handleCreateTodo } from '../utils/todo';
import { SetStateType, TodoDataType } from '../types/todo';

const useFetchTodo = (setTodos: SetStateType<TodoDataType[]>) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await handleCreateTodo(inputText, setTodos);
    setIsLoading(false);
    setInputText('');
  };

  return {
    isLoading,
    setInputText,
    inputText,
    handleChange,
    handleSubmit,
  } as const;
};

export default useFetchTodo;
