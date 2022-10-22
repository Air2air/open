import { Route, Routes } from "react-router-dom";
import { data } from "./data/data";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {data.nodes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>

    </>
  );
};

/* {routeResult} */

export default App;
