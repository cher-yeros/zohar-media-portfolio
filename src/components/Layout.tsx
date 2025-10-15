import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      <Header />
      <main>{children}</main>
      <Footer />

      {/* JavaScript handled by individual components as needed */}
    </>
  );
};

export default Layout;
