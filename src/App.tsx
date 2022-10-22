import { Route, Routes } from "react-router-dom";
import { dataRoutes } from "./data/data";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {dataRoutes.nodes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};



export default App;
