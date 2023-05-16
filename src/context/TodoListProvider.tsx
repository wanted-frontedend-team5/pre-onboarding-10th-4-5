import { createContext, useEffect, useState, useContext, useMemo } from 'react';
import { Todo } from '../types';
import { getTodoList } from '../api/todo';

interface Props {
  children: React.ReactNode;
}

interface Actions {
  add(data: Todo): void;
  remove(id: string): void;
}

const TodoListContext = createContext<Todo[] | null>(null);
const TodoListActionContext = createContext<Actions | null>(null);

const TodoListProvider = ({ children }: Props) => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  const actions = useMemo(
    () => ({
      add(data: Todo) {
        setTodoListData(prev => [...prev, data]);
      },
      remove(id: string) {
        setTodoListData(prev => prev.filter(item => item.id !== id));
      },
    }),
    [],
  );

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <TodoListContext.Provider value={todoListData}>
      <TodoListActionContext.Provider value={actions}>
        {children}
      </TodoListActionContext.Provider>
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;

export const useTodoList = () => {
  const todoList = useContext(TodoListContext);
  if (!todoList) throw new Error('Cannot find useTodoList');
  return todoList;
};

export const useTodoListAction = () => {
  const actions = useContext(TodoListActionContext);
  if (!actions) throw new Error('Cannot find useTodoListAction');
  return actions;
};
