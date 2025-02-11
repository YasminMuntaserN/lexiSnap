import { createGlobalStyle } from "styled-components";
import { media } from "../styledComponents/Media";

const GlobalStyles = createGlobalStyle`
   :root {
    --main-color:#a182a1;
    --background-color:#0d1224;
    --basic-background-color:#0d1224;
    --background-color-two: #1a1443;
    --color-background-gray:linear-gradient(50deg,#c9def3 0%, #c6deee 10%,  #e6dae5 40% ,#ecd9ee 60% );
    --color-white: #ffffff;
    --pure-color-white: #ffffff;
    --second-color: #94bbe9;
    --color-border:#1b2c68a0;
    --color-dark-gray:#63676f;
    --color-gray:#9ca3af;
    --color-box-background: #f9f9f9;
    --color-orang:#fcd34d;
    --color-dark-orange:#fb923c;
    --color-green:#4ade80;
    --color-cyan:#22d3ee;
    --second-blue: #1949c3;
    --linear-gradient: linear-gradient(90deg, #833ab4 0%, rgba(185,138,185,1) 50%, rgba(148,187,233,1) 100%);
    --breakpoints-mobile:450px;
    --breakpoints-tablet:768px;
    --breakpoints-desktop:1024px;
  }
  &.light-mode{
    --background-color: #c8c5c5;
    --basic-background-color:#F2E3E3;
    --color-white:#0d1224;
    --second-blue:#5194d8;
    --background-color-two:#155DA5;
    --main-color: #734973;
    --color-gray:#f6e4fc;
    --color-dark-gray:#374566;
    --pure-color-white:  #ffffff;
  } 
  *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--basic-background-color);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--main-color);
  }
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  body {
    font-family: "Noto Serif Todhri", serif;
    background-color: var(--basic-background-color);
    transition: color 0.3s, background-color 0.3s;
    overflow-x: hidden;
    color:var( --background-color);
  }
  h1{
    ${media.mobile`font-size: 21px;`}
    ${media.tablet`font-size: 21px;`}
  }
[lang="ar"] {
    font-family: var(--font-arabic);
    direction: rtl;
    text-align: right;
}

`;

export default GlobalStyles;