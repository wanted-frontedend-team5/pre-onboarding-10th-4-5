import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
   font-size: 0.9rem;
   margin: 0;
   padding: 0;
   ul{
   list-style:none;
   margin: 0;
   padding:0;
   }
  }

`;
