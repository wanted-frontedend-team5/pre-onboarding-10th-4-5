import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { colors } from '../styles/colors';
import { getSearch } from '../api/todo';
import { useDebounce } from '../hooks/useDebounce';
import { SearchList } from './SearchList';

const TIME = 50000;

export const InputTodo = () => {
  const [inputText, setInputText] = useState('');
  const [todoListData, setTodoListData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(setTodoListData, TIME);
  const page = 1;
  const limit = 10;

  useEffect(() => {
    (async () => {
      const { data } = await getSearch(inputText, page, limit);
      setTodoListData(data);
      setIsLoading(false);
    })();
    if (debouncedSearchTerm) {
      setIsLoading(true);
    } else {
      setTodoListData([]);
      setIsLoading(false);
    }
  }, [inputText, debouncedSearchTerm]);

  return (
    <>
      <Form>
        <Button type="submit">🔍</Button>
        <StInput
          name="input-text"
          value={inputText}
          placeholder="Add new todo..."
          onChange={e => setInputText(e.target.value)}
        />
        {isLoading ? <Spinner /> : ''}
      </Form>
      <SearchList todoListData={todoListData} />
    </>
  );
};

const Form = styled.form`
  position: relative;
  width: 50%;
  margin: 0 auto;
  padding: 0 40px 0 0;
  border: 1px solid ${colors.neutralLight};
  border-radius: 6px;
  &:focus {
    outline: 1px solid ${colors.neutralDark};
  }

  &:hover {
    outline: 2px solid ${colors.neutralLight};
  }
`;

const StInput = styled.input`
  position: relative;
  width: 80%;
  height: 45px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 5%;
  border: none;
  background-color: transparent;
  font-size: 1rem;
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  right: 0%;
  width: 25px;
  height: 25px;
  border: 1px solid ${colors.neutralDark};
  border-top: 1px solid ${colors.neutralLight};
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
