/* eslint-disable no-alert */
import { FaSearch } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import React, { useCallback, useState } from 'react';
import { createTodo } from 'api/todo.service';
import { TodoInputType, TodoListType } from 'type/todo';
import { useTodoInput } from 'hooks/useTodoInput';
import { useFocus } from 'hooks/useFocus';
import { useTodoFetch } from 'hooks/useTodoFetch';
import { RecommandList } from './RecommandList';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const { setInputText, inputText, debounceValue, onChange } = useTodoInput();
  const { isEndPage, fetchLoading, recommandList, fetchNextRecommandList } =
    useTodoFetch(debounceValue);
  const { ref, setFocus, isVisible } = useFocus();
  const [isLoading, setIsLoading] = useState(false);

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
        setInputText('');
        setIsLoading(false);
      }
    },
    [setInputText, setTodos],
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
        {fetchLoading ? <ImSpinner8 className="spinner" /> : <p />}
      </form>
      <RecommandList
        isEndPage={isEndPage}
        isVisible={isVisible}
        fetchLoading={fetchLoading}
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
