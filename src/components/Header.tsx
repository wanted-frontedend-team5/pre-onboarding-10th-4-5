import styled from 'styled-components';
import { colors } from '../styles/colors';

export const Header = () => {
  return (
    <Layout>
      <Title>Toodos</Title>
    </Layout>
  );
};

const Layout = styled.header`
  padding: 20px 0;
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  margin: 50px 0 50px 0;
  line-height: 1;
  text-align: center;
  color: ${colors.black};
`;
