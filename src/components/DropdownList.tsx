import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import DropdownItem from './DropDownItem';
import { SetStateType, TodoDataType } from '../types/todo';
import useSelectKeyword from '../hooks/useSelectKeyword';

type DropDownTpye = {
  keyword: string;
  isLoading: boolean;
  hasNextPage: boolean;
  suggestions: string[];
  getSuggestions: () => Promise<void>;
  setTodos: SetStateType<TodoDataType[]>;
  setInputText: SetStateType<string>;
};

const DropdownList = ({
  keyword,
  isLoading,
  hasNextPage,
  suggestions,
  getSuggestions,
  setTodos,
  setInputText,
}: DropDownTpye) => {
  const ref = useSelectKeyword(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isLoading && keyword !== '') {
      getSuggestions();
    }
  });
  if (suggestions.length > 0)
    return (
      <div className="dropdown-parent">
        <div className="dropdown-container">
          <ul className="dropdown-box">
            {suggestions.map((suggestion, index) => (
              <DropdownItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                suggestion={suggestion}
                keyword={keyword}
                setTodos={setTodos}
                setInputText={setInputText}
              />
            ))}
            <div className="dropdown-loading">
              {isLoading ? (
                <FaSpinner />
              ) : hasNextPage ? (
                <div ref={ref}>
                  <IoEllipsisHorizontalSharp />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </ul>
        </div>
      </div>
    );
  return <div></div>;
};

export default DropdownList;
