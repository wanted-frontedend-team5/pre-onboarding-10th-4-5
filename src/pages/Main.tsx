import { Header } from '../components/Header';
import { InputTodo } from '../components/InputTodo';

export const Main = () => {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo />
      </div>
    </div>
  );
};
