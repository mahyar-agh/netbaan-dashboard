import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    /* layout */
    --color-main-layout:#10141a;
    /* #10141A */

    /* grey */
    --color-grey-0: #fff;
    --color-grey-100: #EEE9E9;
    --color-grey-500:#464660;
    --color-grey-600: #2A2B3F;
    --color-grey-700:#1D1E2C;
    --color-grey-800: #1D2229;
    --color-grey-900: #000;

    /* orange */
    --color-orange-100: #D1B003;
    --color-orange-400: #DF6710;

    /* red */
    --color-red-300: #780120;

    /* purple */
    --color-red-100: #565392;


    /* blue */
    --color-blue-100: #327794;




    --border-radius-sm:10px;
    --border-radius-md:15px;

}

/* Scroll bar */

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #bdb8b8;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  /* font-family: 'Arial', sans-serif; */
  color: var(--color-grey-700);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

`;

export default GlobalStyles;
