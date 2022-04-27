import { createGlobalStyle } from "styled-components";
import media from "./media";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-primary:hsl(12, 88%, 59%);
    --col-secondary:hsl(228, 39%, 23%);
    --col-gray:hsl(227, 12%, 61%);
    --col-dark: hsl(233, 12%, 13%);
    --col-light:hsl(0, 0%, 98%);
    --col-primary-light:hsl(13, 100%, 96%);

    --shadow-colored: 0 10px 15px -3px var(--col-primary);


    

    --font-primary: 'Be Vietnam', sans-serif;

    --height-header: 10rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-secondary);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-primary);
    border-radius: 10rem;

  }

  body{
    min-height: 100vh;
    font: 16px;
    font-family: var(--font-primary);
    background-image: url(/images/bg-tablet-pattern.svg), url(/images/bg-tablet-pattern.svg);
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-position: top -180px right -300px, left top ;

    ${media.tablet}{
    background-position: top -100px right -100px, left top;

    }

    ${media.laptop}{
    background-position: top -180px right -20px, left -300px top 900px;

    }
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  h1,h2,h3{
    font-weight: 700;
    color: var(--col-dark);
  }


  h3{
    font-size: 1.8rem;

    ${media.tablet}{
      font-size: 2.2rem;
    }
  }

  p{
    font-size: 1.6rem;
    color: var(--col-gray);
    font-weight: 500;
    line-height: 1.7;

    ${media.laptop}{
    font-size: 1.8rem;

    }
  }

`;

export default GlobalStyle;
