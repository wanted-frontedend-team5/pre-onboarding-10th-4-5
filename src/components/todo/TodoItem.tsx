import { FaSpinner, FaTrash } from 'react-icons/fa';
import { TodoListType } from 'type/todo';
import React, { useCallback, useState } from 'react';
import { deleteTodo } from 'api/todo';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos((prev: TodoListType) => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos, setIsLoading]);

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
