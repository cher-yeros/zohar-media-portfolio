import type { Metadata } from "next";
import "../styles/globals.css";

import "aos/dist/aos.css";

import { Josefin_Sans, Play } from "next/font/google";
import Script from "next/script";
import StructuredData from "../components/StructuredData";
import LoadingBar from "@/components/LoadingBar";

export const metadata: Metadata = {
  title: {
    default: "Zohar Media - Professional Videography & Media Services",
    template: "%s | Zohar Media",
  },
  description:
    "Professional videography, photography, and media services in Atlanta. Specializing in corporate videos, events, weddings, and creative content production.",
  keywords: [
    "videography",
    "photography",
    "media services",
    "Atlanta videographer",
    "corporate video",
    "event coverage",
    "wedding videography",
    "creative content",
    "video production",
    "Zohar Media",
  ],
  authors: [{ name: "Zohar Media" }],
  creator: "Zohar Media",
  publisher: "Zohar Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zoharmedia.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoharmedia.net",
    siteName: "Zohar Media",
    title: "Zohar Media - Professional Videography & Media Services",
    description:
      "Professional videography, photography, and media services in Atlanta. Specializing in corporate videos, events, weddings, and creative content production.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zohar Media - Professional Videography Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohar Media - Professional Videography & Media Services",
    description:
      "Professional videography, photography, and media services in Atlanta. Specializing in corporate videos, events, weddings, and creative content production.",
    images: ["/img/og-image.jpg"],
    creator: "@zoharmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
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

        {/* External CSS - loaded via Script component for better performance */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          rel="stylesheet"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossOrigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css"
          rel="stylesheet"
          integrity="sha512-heyoieAHmpALcBydF1kkxgHlyb1WwYwyrlpgDqPwZeoqwET1Be5jFf7YydZ5UcDun/RnbKgD/xE2DZ6y4c7g=="
          crossOrigin="anonymous"
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${play.className} ${josefinSans.className}`}>
        <LoadingBar color="#007bff" height={3} showSpinner={false} />
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="WebSite" data={{}} />
        <StructuredData type="LocalBusiness" data={{}} />
        {children}
      </body>

      {/* Critical JavaScript - load early */}
      <Script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Non-critical JavaScript - load after page load */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/aos@2.3.4/dist/aos.js"
        strategy="lazyOnload"
      />
      {/* <Script id="aos-init">
        {`
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        `}
      </Script> */}
    </html>
  );
}
