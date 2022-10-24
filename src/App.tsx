import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/header";
import { dataRoutes } from "./data/routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {dataRoutes.nodes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
