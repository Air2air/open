
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { dataRoutes } from "./routes/routes";
import { usePageTracking } from "./components/Analytics/gaTracking";
import { BannerImageWrapper } from "components/Banner/bannerComponents";



const App = () => {
  usePageTracking();

  const LoadingSkeleton = () => (
    <>
      <BannerImageWrapper />
    </>
  );

  return (
    <>

          <Header />
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              {dataRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Footer backgroundColor={1} />

    </>
  );
};

export default App;
