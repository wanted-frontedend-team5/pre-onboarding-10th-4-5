import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import TodoListProvider from '../context/TodoListProvider';

const Main = () => {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <TodoListProvider>
          <InputTodo />
          <TodoList />
        </TodoListProvider>
      </div>
    </div>
  );
};

export default Main;
