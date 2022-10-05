import { Link, useRoutes } from "react-router-dom";

import mainRoutes from "./routes/mainRoutes";
import Routes from "./Routes";

function App() {
  const routeResult = useRoutes(mainRoutes);
  return (
    <>
      <header>
        <strong>React Router v6</strong>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* You can use by useRoutes like this (I prefer it): */}
        {/* {routeResult} */}
        {/* Or use by defining it */}
        <Routes />
      </main>
    </>
  );
}

export default App;
