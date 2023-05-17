/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useIntersect } from 'hooks/useIntersect';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { RecommandListType } from 'type/search';

type RecommandListProps = {
  inputValue: string;
  recommandList: RecommandListType;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  fetchNextRecommandList: () => Promise<void>;
  addTodosSubmitFunc: (value: string) => Promise<void>;
};

export const RecommandList = ({
  inputValue,
  recommandList,
  setInputText,
  fetchNextRecommandList,
  addTodosSubmitFunc,
}: RecommandListProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const tagetRef = useIntersect(async (entry, observer) => {
    setLoading(true);
    observer.unobserve(entry.target);
    await fetchNextRecommandList();
    setLoading(false);
  });

  return (
    <ul className={recommandList.length ? 'recommand-list' : 'none'}>
      {recommandList.map((title, index) => {
        let titleContent = title;
        if (titleContent.includes(inputValue)) {
          titleContent = titleContent.replaceAll(
            inputValue,
            `<span style="color: #2BC9BA">${inputValue}</span>`,
          );
        }
        return (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index + 1}
            className="recommand-item"
            onClick={() => {
              setInputText(title);
              addTodosSubmitFunc(title);
            }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: titleContent }}
          />
        );
      })}
      {isLoading && (
        <li className="recommand-item">
          <FaSpinner className="spinner" />
        </li>
      )}
      <div className="target-item" ref={tagetRef}></div>
    </ul>
  );
};
