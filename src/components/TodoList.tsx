import { TodoItem } from './TodoItem';
import { todoList } from '../type';

type Props = {
  todos: todoList[];
  setTodos: React.Dispatch<React.SetStateAction<todoList[]>>;
};

export const TodoList = ({ todos, setTodos }: Props) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
