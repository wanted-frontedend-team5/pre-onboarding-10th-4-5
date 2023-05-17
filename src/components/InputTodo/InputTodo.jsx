import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { createTodo } from '../../api/todo';
import useFocus from '../../hooks/useFocus';
import { RecommendKeywords } from './RecommendKeywords/RecommendKeywords';
import { useRecommend } from './RecommendKeywords/RecommendKeywords.hooks.jsx';
import { checkInput } from './InputTodo.hooks';

const InputTodo = ({ setTodos }) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { ref } = useFocus();
  const { recommendList } = useRecommend(inputText);
  const handleSubmit = useCallback(
    async e => {
      try {
        e.preventDefault();
        setIsLoading(true);
        const newItem = checkInput(inputText);
        const { data } = await createTodo(newItem);
        if (data) {
          return setTodos(prev => [...prev, data]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-alert
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText, setTodos],
  );

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          disabled={isLoading}
        />
        {!isLoading ? (
          <button className="input-submit" type="submit">
            <FaPlusCircle className="btn-plus" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </form>
      {inputText && (
        <RecommendKeywords
          recommendList={recommendList}
          setTodos={setTodos}
          setInputText={setInputText}
          setIsLoading={setIsLoading}
        />
      )}
    </>
  );
};

export default InputTodo;
