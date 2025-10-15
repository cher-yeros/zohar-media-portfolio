import Script from "next/script";

interface StructuredDataProps {
  type:
    | "Organization"
    | "WebSite"
    | "LocalBusiness"
    | "Service"
    | "BreadcrumbList"
    | "FAQPage";
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zohar Media",
          url: "https://zoharmedia.net",
          logo: "https://zoharmedia.net/img/logo.png",
          description:
            "Professional videography, photography, and media services in Atlanta",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Atlanta",
            addressRegion: "GA",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "customer service",
            email: "info@zoharmedia.net",
          },
          sameAs: [
            "https://www.facebook.com/zoharmedia",
            "https://www.instagram.com/zoharmedia",
            "https://www.youtube.com/zoharmedia",
          ],
          foundingDate: "2020",
          areaServed: {
            "@type": "City",
            name: "Atlanta",
          },
          serviceType: [
            "Videography",
            "Photography",
            "Video Production",
            "Event Coverage",
            "Corporate Video",
            "Wedding Videography",
          ],
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Zohar Media",
          url: "https://zoharmedia.net",
          description: "Professional videography and media services in Atlanta",
          publisher: {
            "@type": "Organization",
            name: "Zohar Media",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://zoharmedia.net/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Zohar Media",
          image: "https://zoharmedia.net/img/logo.png",
          description: "Professional videography and media services in Atlanta",
          url: "https://zoharmedia.net",
          telephone: "+1-XXX-XXX-XXXX",
          email: "info@zoharmedia.net",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main Street",
            addressLocality: "Atlanta",
            addressRegion: "GA",
            postalCode: "30309",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "33.7490",
            longitude: "-84.3880",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "10:00",
              closes: "16:00",
            },
          ],
          priceRange: "$$",
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "33.7490",
              longitude: "-84.3880",
            },
            geoRadius: "50000",
          },
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name || "Professional Videography Services",
          description:
            data.description || "Professional videography and media services",
          provider: {
            "@type": "Organization",
            name: "Zohar Media",
            url: "https://zoharmedia.net",
          },
          areaServed: {
            "@type": "City",
            name: "Atlanta",
          },
          serviceType: "Videography Services",
          offers: {
            "@type": "Offer",
            description: "Professional videography services",
            priceCurrency: "USD",
          },
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (
            data.items as Array<{ name: string; url: string }>
          ).map((item, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (
            data.faqs as Array<{ question: string; answer: string }>
          ).map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };

      default:
        return data;
    }
  };

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
