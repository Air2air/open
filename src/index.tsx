import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "animate.css/animate.css";
import { ParallaxProvider } from "react-scroll-parallax";
import GlobalStyles from "styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
