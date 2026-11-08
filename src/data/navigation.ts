export interface NavItem {
  name: string;
  href: string;
  label?: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Science', href: '/science' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const FOOTER_NAVIGATION = {
  explore: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Science', href: '/science' },
    { name: 'About', href: '/about' },
  ],
  company: [
    { name: 'Contact', href: '/contact' },
    { name: 'Professional Enquiries', href: '/contact?type=professional' },
    { name: 'Distribution', href: '/contact?type=distribution' },
    { name: 'Manufacturing Operations', href: '/about#manufacturing' },
  ],
  contactInfo: {
    location: 'Barcelona, Spain',
    email: 'info@eastetic.com',
    phone: '+34 602 39 03 77',
    hours: 'Mon – Fri: 09:00 – 18:00 CET',
  },
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Professional Supply', href: '#' },
  ],
};

export type SocialPlatform =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'
  | 'snapchat'
  | 'whatsapp';

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  ariaLabel: string;
  platform: SocialPlatform;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://www.facebook.com/Eastetic.spain',
    ariaLabel: 'Follow Eastetic on Facebook',
    platform: 'facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/eastetic.spain/',
    ariaLabel: 'Follow Eastetic on Instagram',
    platform: 'instagram',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    href: 'https://www.tiktok.com/@eastetic.spain',
    ariaLabel: 'Follow Eastetic on TikTok',
    platform: 'tiktok',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/eastetic/',
    ariaLabel: 'Connect with Eastetic on LinkedIn',
    platform: 'linkedin',
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    href: 'https://www.snapchat.com/@eastetic.spain',
    ariaLabel: 'Follow Eastetic on Snapchat',
    platform: 'snapchat',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: 'https://wa.me/34602390377',
    ariaLabel: 'Contact Eastetic on WhatsApp',
    platform: 'whatsapp',
  },
];

