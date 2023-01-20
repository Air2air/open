import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { dataRoutes } from "./routes/routes";
import { usePageTracking } from "./components/Analytics/gaTracking";
import { BannerImageWrapper } from "components/Banner/bannerComponents";
import { ParallaxProvider } from "react-scroll-parallax";

const queryClient = new QueryClient();

const App = () => {
  usePageTracking();

  const LoadingSkeleton = () => (
    <>
      <BannerImageWrapper />
    </>
  );

  return (
    <>
      <ParallaxProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              {dataRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Footer backgroundColor={4} />
        </QueryClientProvider>
      </ParallaxProvider>
    </>
  );
};

export default App;
