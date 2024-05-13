/***********************
 * Header Data
 */

import { link } from "fs";
import { features } from "process";

export const title = "John Doe";

export const mainMenu = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Porfolio",
    href: "/portfolio",
  },
  {
    id: 3,
    text: "Resume",
    href: "/resume",
  },
  {
    id: 4,
    text: "Contact",
    href: "/contact",
  },
  {
    id: 5,
    text: "Blog",
    href: "/blog",
  },
];

export const cvHref = "https://example.com/cv.pdf";

/***********************
 * Sidebar Data
 */

export const name = "John Doe";
export const subtitle = [
  "Web Developer",
  "UI/UX Designer",
  "Photographer",
  "Freelancer",
  "Dreamer",
];

export const socialLinks = [
  {
    id: "facebook",
    href: "https://facebook.com",
    icon: null,
  },
  {
    id: "twitter",
    href: "https://twitter.com",
    icon: null,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com",
    icon: null,
  },
  {
    id: "instagram",
    href: "https://instagram.com",
    icon: null,
  },
  {
    id: "github",
    href: "https://github.com",
    icon: null,
  },
];

export const bio = [
  {
    id: 1,
    label: "RESIDENCE",
    value: "United States",
  },
  {
    id: 2,
    label: "CITY",
    value: "San Francisco, CA",
  },
  {
    id: 3,
    label: "AGE",
    value: "24",
  },
];

/********************
 * Hero Image Data
 */
export const heroImage = {
  firstLine: "HI THERE!",
  secondLine: "Discover my story",
  linkText: "VIDEO RESUME",
  linkHref: "/video-resume",
  image: null,
};

/***********************
 * Accomplishments Data
 */
export const accomplishments = [
  {
    id: 1,
    title: "Projects completed",
    count: 100,
    plus: true,
  },
  {
    id: 2,
    title: "Happy clients",
    count: 200,
    plus: true,
  },
  {
    id: 3,
    title: "Cups of coffee",
    count: 300,
    plus: true,
  },
];

/***********************
 * My Story Data
 */

export const myStory = {
  content:
    "I love to design and code from scratch. I am a full stack developer with a passion for UI/UX design. I am a freelancer and I am available for hire. I have completed over 100 projects for a variety of clients. I am a photographer and I love to capture moments. I am a dreamer and I believe in turning dreams into reality. I am a happy person and I love to spread happiness.",
};

/***********************
 * Video Resume Data
 */
export const videoResumeLink = "https://www.youtube.com/watch?v=1234567890";

/***********************
 * My Services Data
 */
export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I design and develop responsive websites using the latest technologies.",
    icon: null,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "I design user-friendly interfaces for web and mobile applications.",
    icon: null,
  },
  {
    id: 3,
    title: "Photography",
    description: "I capture moments and create memories.",
    icon: null,
  },
  {
    id: 4,
    title: "Freelancing",
    description: "I am available for hire as a freelancer.",
    icon: null,
  },
];

/***********************
 * PricePlans Data
 */
export const pricePlans = {
  features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  plans: [
    {
      id: 1,
      title: "Standard",
      price: 100,
      currency: "$",
      features: [true, true, false, false, false],
      popular: false,
    },
    {
      id: 2,
      title: "Premium",
      price: 250,
      currency: "$",
      features: [true, true, true, true, true],
      popular: true,
    },
  ],
};
