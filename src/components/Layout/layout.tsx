
import { Header } from "./../Header/header";
import {data} from "./../../data/data"
const Layout = ({ children }) => {
  return (
  <>
    <Header />
    <div className="navigationWrapper">
      {/* <Navigation /> */}
      <main>{children}</main>
    </div>
  </>
  );
};
export default Layout;