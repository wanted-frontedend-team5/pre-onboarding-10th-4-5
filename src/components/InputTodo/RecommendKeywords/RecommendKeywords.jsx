import React from 'react';
import { RecommendItem } from './RecommendItem/RecommendItem';
import './RecommendKeywords.css';

export const RecommendKeywords = ({
  recommendList,
  setTodos,
  setInputText,
  setIsLoading,
}) => {
  return (
    <div className="rec wrapper">
      <ul>
        {recommendList.length > 0
          ? recommendList.map((item, index) => (
              <RecommendItem
                key={item}
                item={item}
                id={index}
                setTodos={setTodos}
                setInputText={setInputText}
                setIsLoading={setIsLoading}
              />
            ))
          : null}
      </ul>
    </div>
  );
};
