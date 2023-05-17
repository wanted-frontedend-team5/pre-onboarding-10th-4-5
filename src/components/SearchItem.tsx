import styled from 'styled-components';
import { colors } from '../styles/colors';

type Props = {
  ref: object;
  todoListData: string;
};

export const SearchItem = ({ ref, todoListData }: Props) => {
  console.log(ref);
  return <List>{todoListData}</List>;
};

const List = styled.li`
  margin: 2px 0 5px 10px;

  &:hover {
    background-color: ${colors.neturalLightBackGround};
    cursor: pointer;
  }
  &:active {
    background-color: ${colors.neturalGreen};
    cursor: pointer;
  }
`;
