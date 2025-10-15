"use client";

import { useEffect } from "react";
import Aos from "aos";

export default function PortfolioClient() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return null; // This component only handles AOS initialization
}
