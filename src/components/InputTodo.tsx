import { FaSpinner } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { createTodo } from '../api/todo';
import useFocus from '../hooks/useFocus';
import { SetStateType, TodoDataType } from '../types/todo';
import Button from './Button';

export type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          // eslint-disable-next-line no-alert
          alert('Please write something');
          return;
        }

        const newItem = { todo: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          setTodos(prev => [...prev, data]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-alert
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText, setTodos],
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? <Button mode="add" /> : <FaSpinner className="spinner" />}
    </form>
  );
};

export default InputTodo;
