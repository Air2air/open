import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import  Footer  from "./components/Footer/footer";
import  Header  from "./components/Header/header";
import { dataRoutes } from "./routes/routes";
import { usePageTracking } from "./components/Analytics/gaTracking";
import FadeTransition from "utils/FadeTransition";

const App = () => {
  usePageTracking();

  const LoadingSkeleton = () => <></>;

  return (
    <>
      <Header />
      <main className="content">
        <Suspense fallback={<LoadingSkeleton />} >
          <FadeTransition>
            <Routes>
              {dataRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </FadeTransition>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
