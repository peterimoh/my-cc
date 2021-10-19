import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
 

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    font-family: "Mulish";
    transition: all 0.25s linear;

  }

  svg{
	fill: ${({ theme }) => theme.svg};
	width: 25px;
	height: 25px;
  cursor: pointer;
}


  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  `;
  
  // a {
  //   color: ${({ theme }) => theme.a} !important;
  // }