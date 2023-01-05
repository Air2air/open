import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";

import { dataRoutes } from "./routes/routes";
import { BREAKPOINT } from "styles/Constants";
import { useWindowWidth } from "@react-hook/window-size";
import { usePageTracking } from "./components/Analytics/gaTracking";
import UnderConstructionPage from "pages/UnderConstruction/pageUnderConstruction";

const isUnderConstruction = 0;

const queryClient = new QueryClient();

const App = () => {
  usePageTracking();
  const windowWidth = useWindowWidth();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {!isUnderConstruction ? <Header /> : ""}
        <Suspense fallback={<div>Loading...</div>}>
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

        {!isUnderConstruction ? <Footer /> : ""}
      </QueryClientProvider>
    </>
  );
};

export default App;
