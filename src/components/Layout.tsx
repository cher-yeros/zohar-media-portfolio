import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Zohar Media Portfolio",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Zohar Media Portfolio - Professional videography and media services"
        />

        {/* Bootstrap CSS - handled in globals.css */}
      </Head>

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
