/* eslint-disable no-alert */
import { FaPlusCircle, FaSpinner, FaSearch } from 'react-icons/fa';
import React, { useCallback, useState } from 'react';
import { createTodo } from 'api/todo.service';
import { TodoInputType, TodoListType } from 'type/todo';
import { useTodoInput } from 'hooks/useTodoInput';
import useFocus from 'hooks/useFocus';
import { RecommandList } from './RecommandList';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    inputText,
    debounceValue,
    // ref,
    onChange,
    fetchNextRecommandList,
    onInputReset,
    setInputText,
    recommandList,
  } = useTodoInput();
  const { ref, setFocus, isVisible, setIsVisible } = useFocus();

  const addTodosSubmitFunc = useCallback(
    async (value: string) => {
      try {
        setIsLoading(true);
        const trimmed = value.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem: TodoInputType = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos(prev => [...prev, data]);
        }
      } catch (error) {
        alert('Something went wrong.');
      } finally {
        onInputReset();
        setIsLoading(false);
      }
    },
    [onInputReset, setTodos],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodosSubmitFunc(debounceValue);
    },
    [debounceValue, addTodosSubmitFunc],
  );

  return (
    <div className="input-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="flex-center">
          <FaSearch className="search" />
        </div>
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          onClick={setFocus}
          value={inputText}
          onChange={onChange}
          disabled={isLoading}
        />
        {!isLoading ? (
          <button className="input-submit" type="submit">
            <FaPlusCircle className="btn-plus" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </form>
      <RecommandList
        isVisible={isVisible}
        inputValue={inputText}
        fetchNextRecommandList={fetchNextRecommandList}
        recommandList={recommandList}
        setInputText={setInputText}
        addTodosSubmitFunc={addTodosSubmitFunc}
      />
    </div>
  );
};

export default InputTodo;
