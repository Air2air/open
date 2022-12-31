import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import ScrollToTop from "./utils/scrollToTop";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
