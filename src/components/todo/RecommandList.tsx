/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { RecommandListType } from 'type/search';

type RecommandListProps = {
  inputValue: string;
  recommandList: RecommandListType;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  addTodosSubmitFunc: (value: string) => Promise<void>;
};

export const RecommandList = ({
  inputValue,
  recommandList,
  setInputText,
  addTodosSubmitFunc,
}: RecommandListProps) => {
  return (
    <ul className={recommandList.length ? 'recommand-list' : 'none'}>
      {recommandList.map(title => {
        let titleContent = title;
        if (titleContent.includes(inputValue)) {
          titleContent = titleContent.replaceAll(
            inputValue,
            `<span style="color: #2BC9BA">${inputValue}</span>`,
          );
        }
        return (
          <li
            key={title}
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
    </ul>
  );
};
