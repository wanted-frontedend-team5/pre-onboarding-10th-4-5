import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { colors } from '../styles/colors';
import { SearchItem } from './SearchItem';

type Props = {
  todoListData: { result?: [] };
};

export const SearchList = ({ todoListData }: Props) => {
  const target = useRef<HTMLInputElement>(null);
  console.log(typeof target);
  console.log(todoListData.result?.length);
  return (
    <Layout>
      {todoListData?.result && todoListData?.result.length > 0
        ? todoListData.result?.map((item: string) => {
            return (
              <ul key={Math.random()}>
                <SearchItem ref={target} todoListData={item} />
              </ul>
            );
          })
        : '...'}
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  width: 50%;
  height: 150px;
  margin: 10px auto 0;
  border: 1px solid ${colors.neutralLight};
  border-radius: 6px;
  overflow-y: scroll;
`;
