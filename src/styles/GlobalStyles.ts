import { createGlobalStyle } from "styled-components";
import {
  BREAKPOINT,
  FONT_SECONDARY_DESKTOP,
  FONT_DEFAULT_DESKTOP,
  FONT_DEFAULT_MOBILE,
  FONT_WEIGHT_BOLD,

} from "./Constants";



const GlobalStyles = createGlobalStyle`

:root {  
  height: 100%;
  @media (min-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_DESKTOP}
  }
  @media (max-width: ${BREAKPOINT}px) {
    ${FONT_DEFAULT_MOBILE}
  }
}

html, body {
  /* height: 100%; */
display: flex;
flex-direction: column;
box-sizing: border-box;
outline: 0;
margin: 0;
padding: 0;
border: 0;
${FONT_DEFAULT_DESKTOP};
-webkit-font-smoothing: antialiased;
/* background-color: red */
}



.footer {
  position: sticky;
  top: 100vh;
}

h1,
h2,
h3 {
  ${FONT_SECONDARY_DESKTOP};
  margin-top: 0;
  margin-bottom: 0.4em;
  text-align: left;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.6em;
}

b {
  font-weight: ${FONT_WEIGHT_BOLD};

}

a {
  text-decoration: none;
}


@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "Sofia Sans Light";
  src: url("/fonts/Sofia_Sans/static/SofiaSans-Light.ttf") format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Sofia Sans Medium";
  src: url("/fonts/Sofia_Sans/static/SofiaSans-Medium.ttf") format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Sofia Sans Bold";
  src: url("/fonts/Sofia_Sans/static/SofiaSans-SemiBold.ttf") format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}



`;
export default GlobalStyles;
