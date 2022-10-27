import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { dataRoutes } from "./data/routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {dataRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        </Routes>
      <Footer />
    </>
  )
};

export default App
