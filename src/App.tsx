
import {Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import ProgressBar from "./components/Progress/progress";
import { dataRoutes } from "./routes/routes";
import { BREAKPOINT } from "constants/index";
import { useWindowWidth } from "@react-hook/window-size";
import { usePageTracking } from "./components/Analytics/gaTracking";

const App = () => {
  usePageTracking();
  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {dataRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      </Suspense>
      {windowWidth > BREAKPOINT && <ProgressBar />}
      <Footer />
    </>
  );
};

export default App;
