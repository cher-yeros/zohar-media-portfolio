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
    url: "https://facebook.com/zoharmedia",
    icon: "fa fa-facebook",
    ariaLabel: "Facebook",
  },
  {
    platform: "twitter",
    url: "https://twitter.com/zoharmedia",
    icon: "fa fa-twitter",
    ariaLabel: "Twitter",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/company/zoharmedia",
    icon: "fa fa-linkedin",
    ariaLabel: "LinkedIn",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/zoharmediaa",
    icon: "fa fa-instagram",
    ariaLabel: "Instagram",
  },
  {
    platform: "youtube",
    url: "https://www.youtube.com/@KingBruk",
    icon: "fa fa-youtube-play",
    ariaLabel: "YouTube",
  },
  {
    platform: "tiktok",
    url: "https://tiktok.com/@zoharmedia",
    icon: "fa fa-tiktok",
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

// Export individual platform URLs for convenience
export const SOCIAL_URLS = {
  FACEBOOK: "https://facebook.com/zoharmedia",
  TWITTER: "https://twitter.com/zoharmedia",
  LINKEDIN: "https://linkedin.com/company/zoharmedia",
  INSTAGRAM: "https://instagram.com/zoharmediaa",
  YOUTUBE: "https://www.youtube.com/@KingBruk",
  TIKTOK: "https://tiktok.com/@zoharmedia",
  VIMEO: "https://vimeo.com/zoharmedia",
} as const;
