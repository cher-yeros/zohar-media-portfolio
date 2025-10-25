/**
 * Social Media Constants for Zohar Media
 * Centralized source of truth for all social media links
 */

export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/profile.php?id=61579623959145&mibextid=rS40aB7S9Ucbxw6v",
    icon: "fab fa-facebook",
    ariaLabel: "Facebook",
  },
  {
    platform: "x",
    url: "https://x.com/ZoharMediaa?t=2Ahc0sjja6Egp-UNDsq8uQ&s=35",
    icon: "fab fa-x-twitter",
    ariaLabel: "X",
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/company/zohar-media/",
    icon: "fab fa-linkedin",
    ariaLabel: "LinkedIn",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/zoharmediaa",
    icon: "fab fa-instagram",
    ariaLabel: "Instagram",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@KingBruk",
    icon: "fab fa-youtube",
    ariaLabel: "YouTube",
  },
  {
    platform: "tiktok",
    url: "https://www.tiktok.com/@zoharmedia?_t=ZM-90PIWVegtBr&_r=1",
    icon: "fab fa-tiktok",
    ariaLabel: "TikTok",
  },
];

// Additional social media links found in Team component
export const ADDITIONAL_SOCIAL_LINKS: SocialMediaLink[] = [
  {
    platform: "vimeo",
    url: "https://vimeo.com/zoharmedia",
    icon: "fa fa-vimeo",
    ariaLabel: "Vimeo",
  },
  {
    platform: "pinterest",
    url: "#",
    icon: "fa fa-pinterest",
    ariaLabel: "Pinterest",
  },
];

// Helper function to get social media link by platform
export const getSocialMediaLink = (
  platform: string
): SocialMediaLink | undefined => {
  return SOCIAL_MEDIA_LINKS.find((link) => link.platform === platform);
};

// Helper function to get all social media links
export const getAllSocialMediaLinks = (): SocialMediaLink[] => {
  return [...SOCIAL_MEDIA_LINKS, ...ADDITIONAL_SOCIAL_LINKS];
};

// Contact information
export const CONTACT_INFO = {
  EMAIL: "zoharmedia7@gmail.com",
  PHONE_PRIMARY: "+251913119638",
  PHONE_SECONDARY: "+251955318719",
  ADDRESS: "Addis Ababa, Ethiopia",
} as const;

// Export individual platform URLs for convenience
export const SOCIAL_URLS = {
  FACEBOOK:
    "https://www.facebook.com/profile.php?id=61579623959145&mibextid=rS40aB7S9Ucbxw6v",
  X: "https://x.com/ZoharMediaa?t=2Ahc0sjja6Egp-UNDsq8uQ&s=35",
  LINKEDIN: "https://www.linkedin.com/company/zohar-media/",
  INSTAGRAM: "https://instagram.com/zoharmediaa",
  YOUTUBE: "https://www.youtube.com/@KingBruk",
  TIKTOK: "https://www.tiktok.com/@zoharmedia?_t=ZM-90PIWVegtBr&_r=1",
  VIMEO: "https://vimeo.com/zoharmedia",
} as const;
