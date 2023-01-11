import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { dataRoutes } from "./routes/routes";
import { useWindowWidth } from "@react-hook/window-size";
import { usePageTracking } from "./components/Analytics/gaTracking";
import UnderConstructionPage from "pages/UnderConstruction";
import { ChartSkeleton } from "components/Chart/chartComponents";
import { BannerImageWrapper } from "components/Banner/bannerComponents";

const isUnderConstruction = 0;

const queryClient = new QueryClient();

const App = () => {
  usePageTracking();
  const windowWidth = useWindowWidth();

  const LoadingSkeleton = () => (
    <>
      <BannerImageWrapper />
      <ChartSkeleton />
    </>
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {!isUnderConstruction ? (
          <>
            <Header />
          </>
        ) : (
          ""
        )}
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            {isUnderConstruction ? (
              <Route path="*" element={<UnderConstructionPage />} />
            ) : (
              <>
                {dataRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </>
            )}
          </Routes>
        </Suspense>
        {isUnderConstruction ? "" : <Footer backgroundColor={5} />}
      </QueryClientProvider>
    </>
  );
};

export default App;
