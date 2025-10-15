// SEO utility functions and constants for Zohar Media

export const SEO_CONSTANTS = {
  SITE_NAME: "Zohar Media",
  SITE_URL: "https://zoharmedia.net",
  DEFAULT_DESCRIPTION:
    "Professional videography, photography, and media services in Atlanta. Specializing in corporate videos, events, weddings, and creative content production.",
  DEFAULT_KEYWORDS: [
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
  CONTACT_INFO: {
    PHONE: "+1-XXX-XXX-XXXX",
    EMAIL: "info@zoharmedia.net",
    ADDRESS: "Atlanta, GA",
    SOCIAL_MEDIA: {
      FACEBOOK: "https://www.facebook.com/zoharmedia",
      INSTAGRAM: "https://www.instagram.com/zoharmedia",
      YOUTUBE: "https://www.youtube.com/zoharmedia",
      TWITTER: "https://www.twitter.com/zoharmedia",
    },
  },
};

export const generateBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONSTANTS.SITE_URL}${item.url}`,
    })),
  };
};

export const generateServiceStructuredData = (service: {
  name: string;
  description: string;
  price?: string;
  areaServed?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SEO_CONSTANTS.SITE_NAME,
      url: SEO_CONSTANTS.SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: service.areaServed || "Atlanta",
    },
    serviceType: "Videography Services",
    offers: {
      "@type": "Offer",
      description: service.description,
      priceCurrency: "USD",
      ...(service.price && { price: service.price }),
    },
  };
};

export const generateFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_CONSTANTS.SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SEO_CONSTANTS.SITE_URL}/img/logo.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image
      ? `${SEO_CONSTANTS.SITE_URL}${article.image}`
      : undefined,
    url: `${SEO_CONSTANTS.SITE_URL}${article.url}`,
  };
};

export const generateVideoStructuredData = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: `${SEO_CONSTANTS.SITE_URL}${video.thumbnailUrl}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.contentUrl,
    embedUrl: video.contentUrl,
    publisher: {
      "@type": "Organization",
      name: SEO_CONSTANTS.SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SEO_CONSTANTS.SITE_URL}/img/logo.png`,
      },
    },
  };
};

// Utility function to generate meta tags for pages
export const generatePageMetadata = (page: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url: string;
  type?: "website" | "article" | "video";
}) => {
  const keywords = page.keywords || SEO_CONSTANTS.DEFAULT_KEYWORDS;
  const image = page.image || "/img/og-default.jpg";

  return {
    title: page.title,
    description: page.description,
    keywords: keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SEO_CONSTANTS.SITE_URL}${page.url}`,
      type: page.type || "website",
      images: [
        {
          url: `${SEO_CONSTANTS.SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [`${SEO_CONSTANTS.SITE_URL}${image}`],
    },
  };
};

// Common FAQ data for the business
export const COMMON_FAQS = [
  {
    question: "What types of video production services do you offer?",
    answer:
      "We offer comprehensive video production services including corporate videos, event coverage, wedding videography, social media content, documentaries, TV commercials, and professional editing with music, effects, and subtitles.",
  },
  {
    question: "Do you provide services outside of Atlanta?",
    answer:
      "Yes, we serve the greater Atlanta area and surrounding regions. We can travel for special events and projects. Contact us to discuss your specific location requirements.",
  },
  {
    question: "How much does video production cost?",
    answer:
      "Our pricing varies based on project scope, duration, equipment needs, and post-production requirements. We provide detailed quotes after understanding your specific needs. Contact us for a personalized estimate.",
  },
  {
    question: "What is your turnaround time for video projects?",
    answer:
      "Turnaround times depend on project complexity. Simple edits can be completed in 1-2 weeks, while complex productions may take 4-6 weeks. We'll provide a detailed timeline during our consultation.",
  },
  {
    question: "Do you offer social media management services?",
    answer:
      "Yes, we provide comprehensive social media management including content creation, posting schedules, community management, and performance analytics to help grow your online presence.",
  },
];
