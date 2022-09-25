import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import App from "./App";
import "./styles/styles.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
`;

root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);