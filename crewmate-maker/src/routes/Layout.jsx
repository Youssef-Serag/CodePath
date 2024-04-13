import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <h1>Crewmate Maker</h1>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
