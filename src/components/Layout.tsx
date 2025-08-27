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

        {/* Bootstrap CSS */}
        {/* <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/elegant-icons.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/style.css" /> */}
      </Head>

      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      <Header />
      <main>{children}</main>
      <Footer />

      {/* Bootstrap JS - Using Next.js Script component for proper loading */}
      {/* <Script src="/js/jquery-3.3.1.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script
        src="/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      <Script src="/js/mixitup.min.js" strategy="afterInteractive" />
      <Script src="/js/masonry.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
      <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" /> */}
    </>
  );
};

export default Layout;
