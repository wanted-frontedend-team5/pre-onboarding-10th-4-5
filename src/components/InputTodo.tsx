import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { createTodo } from '../api/todo';
import useFocus from '../hooks/useFocus';
import { Todo } from '../types';
import useInput from '../hooks/useInput';
import { useTodoListAction } from '../context/TodoListProvider';

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();
  const { inputText, onChange, reset } = useInput('');
  const { add } = useTodoListAction();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return add(data);
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        reset();
        setIsLoading(false);
      }
    },
    [add, inputText, reset],
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
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
  );
};

export default InputTodo;
