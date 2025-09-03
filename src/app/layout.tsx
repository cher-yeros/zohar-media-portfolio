import type { Metadata } from "next";
import "../styles/globals.css";

import "aos/dist/aos.css";

import Script from "next/script";
import { Play, Josefin_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Zohar Media Portfolio",
  description:
    "Zohar Media Portfolio - Professional videography and media services",
};

const play = Play({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Zohar Media Portfolio - Professional videography and media services"
        />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/elegant-icons@1.0.1/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css"
        />
      </head>
      <body className={`${play.className} ${josefinSans.className}`}>
        {children}
      </body>

      <Script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"
      ></Script>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"></Script>
      <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
      <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></Script>
      <Script id="aos-init">
        {`
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        `}
      </Script>
    </html>
  );
}
