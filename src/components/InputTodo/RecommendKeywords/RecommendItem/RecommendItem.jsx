import { createTodo } from 'api/todo';
import { checkInput } from 'components/InputTodo/InputTodo.hooks';
import { useCallback } from 'react';
import './RecommendItem.css';

export const RecommendItem = ({
  item,
  setTodos,
  setInputText,
  setIsLoading,
}) => {
  const handleClick = useCallback(
    async e => {
      try {
        e.preventDefault();
        setIsLoading(true);
        const newItem = checkInput(item);
        const { data } = await createTodo(newItem);
        if (data) {
          return setTodos(prev => [...prev, data]);
        }
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [item, setInputText, setTodos, setIsLoading],
  );

  return (
    <li className="rec unitbg">
      <button className="rec unitbutton" type="button" onClick={handleClick}>
        {item}
      </button>
    </li>
  );
};
