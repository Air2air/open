import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { dataRoutes } from "./routes/routes";
import { usePageTracking } from "./components/Analytics/gaTracking";
import { ChartSkeleton } from "components/Chart/chartComponents";
import { BannerImageWrapper } from "components/Banner/bannerComponents";

const queryClient = new QueryClient();

const App = () => {
  usePageTracking();

  const LoadingSkeleton = () => (
    <>
      <BannerImageWrapper />
      <ChartSkeleton />
    </>
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            {dataRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
        <Footer backgroundColor={5} />
      </QueryClientProvider>
    </>
  );
};

export default App;
