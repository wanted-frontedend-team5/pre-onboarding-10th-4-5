import { getTodoList } from 'api/todo.service';
import { useState, useEffect } from 'react';
import { TodoListType } from 'type/todo';

export const useTodoList = () => {
  const [todoListData, setTodoListData] = useState<TodoListType>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();

      setTodoListData(data || []);
    })();
  }, []);

  return { todoListData, setTodoListData };
};
