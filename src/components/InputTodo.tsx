import { useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import useFocus from '../hooks/useFocus';
import useFetchTodo from '../hooks/useFetchTodo';
import useRecommend from '../hooks/useRecommend';
import { SetStateType, TodoDataType } from '../types/todo';
import Button from './Button';

export type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const { isLoading, inputText, setInputText, handleChange, handleSubmit } =
    useFetchTodo(setTodos);
  const { ref, setFocus } = useFocus();
  const [recommend, isRecommendRoading, getRecommend, hasNextPage] =
    useRecommend(inputText);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={handleChange}
        disabled={isLoading}
      />
      {!isLoading || isRecommendRoading ? (
        <Button mode="add" />
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
