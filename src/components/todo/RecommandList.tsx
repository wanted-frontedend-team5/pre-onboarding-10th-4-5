import React from 'react';
import { RecommandListType } from 'type/search';

type RecommandListProps = {
  recommandList: RecommandListType;
};

export const RecommandList = ({ recommandList }: RecommandListProps) => {
  return (
    <ul>
      {recommandList?.map(title => {
        return <li key={title}>{title}</li>;
      })}
    </ul>
  );
};
