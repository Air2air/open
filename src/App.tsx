import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { data } from "./data/data";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {data.nodes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

/* {routeResult} */

export default App;
