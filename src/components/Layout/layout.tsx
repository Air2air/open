
const Layout = ({ children }) => {
  return (
  <>
    <div className="navigationWrapper">
      {/* <Navigation /> */}
      <main>{children}</main>
    </div>
  </>
  );
};
export default Layout;