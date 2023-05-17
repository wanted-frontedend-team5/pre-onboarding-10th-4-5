import { useCallback, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { deleteTodo } from '../api/todo';
import { SetStateType, TodoDataType } from '../types/todo';
import Button from './Button';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: SetStateType<TodoDataType[]>;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, setTodos }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <Button mode="remove" handleClick={handleRemoveTodo} />
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
