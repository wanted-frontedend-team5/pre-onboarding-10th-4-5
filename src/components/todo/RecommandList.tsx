/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { RecommandListType } from 'type/search';

type RecommandListProps = {
  recommandList: RecommandListType;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  addTodosSubmitFunc: (value: string) => Promise<void>;
};

export const RecommandList = ({
  recommandList,
  setInputText,
  addTodosSubmitFunc,
}: RecommandListProps) => {
  return (
    <ul className={recommandList.length ? 'recommand-list' : 'none'}>
      {recommandList.map(title => {
        return (
          <li
            key={title}
            className="recommand-item"
            onClick={() => {
              setInputText(title);
              addTodosSubmitFunc(title);
            }}
          >
            {title}
          </li>
        );
      })}
    </ul>
  );
};
