/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useIntersect } from 'hooks/useIntersect';
import React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import { RecommandListType } from 'type/search';

type RecommandListProps = {
  isVisible: boolean;
  inputValue: string;
  isEndPage: boolean;
  fetchLoading: boolean;
  recommandList: RecommandListType;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  fetchNextRecommandList: () => Promise<void>;
  addTodosSubmitFunc: (value: string) => Promise<void>;
};

const HIGHLIGHT_TEXT = (str: string) =>
  `<span style="color: #2BC9BA">${str}</span>`;

export const RecommandList = ({
  isVisible,
  inputValue,
  isEndPage,
  recommandList,
  fetchLoading,
  setInputText,
  fetchNextRecommandList,
  addTodosSubmitFunc,
}: RecommandListProps) => {
  const tagetRef = useIntersect(async (entry, observer) => {
    if (isEndPage) return;
    observer.unobserve(entry.target);
    await fetchNextRecommandList();
  });

  if (!isVisible) {
    return null;
  }

  return (
    <ul className={recommandList.length ? 'recommand-list' : 'none'}>
      {recommandList.map((title, index) => {
        let titleContent = title;
        if (titleContent.includes(inputValue)) {
          titleContent = titleContent.replaceAll(
            inputValue,
            HIGHLIGHT_TEXT(inputValue),
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
      {!isEndPage && <li className="recommand-item flex-center">...</li>}
      {fetchLoading && (
        <li className="recommand-item flex-center">
          <ImSpinner8 className="spinner" />
        </li>
      )}
      <div className="target-item" ref={tagetRef}></div>
    </ul>
  );
};
