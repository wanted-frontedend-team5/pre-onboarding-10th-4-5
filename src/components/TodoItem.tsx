import { FaSpinner, FaTrash } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { deleteTodo } from '../api/todo';
import { useTodoListAction } from '../context/TodoListProvider';

interface Props {
  id: string;
  title: string;
}

const TodoItem = ({ id, title }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { remove } = useTodoListAction();

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      remove(id);
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, remove]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
