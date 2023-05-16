import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, todo }) => (
        <TodoItem key={id} id={id} title={todo} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
