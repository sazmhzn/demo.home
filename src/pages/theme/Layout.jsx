import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="parent">
      <Header />
      <div className="main">
        <div className="child content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
