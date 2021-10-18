import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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