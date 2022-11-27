import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import ProgressBar from "./components/Progress/progress";
import { dataRoutes } from "./routes/routes";
import { BREAKPOINT } from "styles/Constants";
import { useWindowWidth } from "@react-hook/window-size";

const App = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      <Routes>
        {dataRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      {windowWidth > BREAKPOINT && <ProgressBar />}
      <Footer />
    </>
  );
};

export default App;
