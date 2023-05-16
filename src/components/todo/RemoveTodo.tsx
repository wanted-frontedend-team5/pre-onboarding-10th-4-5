import React, { useState, useCallback } from 'react';
import { deleteTodo } from 'api/todo.service';
import { FaSpinner, FaTrash } from 'react-icons/fa';
import { TodoListType } from 'type/todo';

type RemoveTodoProps = {
  id: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
};

export const RemoveTodo = ({ id, setTodos }: RemoveTodoProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos, setIsLoading]);

  return (
    <div className="item-option">
      {!isLoading ? (
        <button onClick={() => handleRemoveTodo()}>
          <FaTrash className="btn-trash" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </div>
  );
};
