import heroImageJPG from "@/assets/images/hero-image.jpg";
import profilePictureJPG from "@/assets/images/profile-picture.jpg";
import testiPhoto1JPG from "@/assets/images/profile-photos/photo1.jpg";
import testiPhoto2JPG from "@/assets/images/profile-photos/photo2.jpg";
import testiPhoto3JPG from "@/assets/images/profile-photos/photo3.jpg";
import testiPhoto4JPG from "@/assets/images/profile-photos/photo4.jpg";

import publishPhoto1JPG from "@/assets/images/publish/photo1.jpg";
import publishPhoto2JPG from "@/assets/images/publish/photo2.jpg";

import {
  DesignIcon,
  FacebookIcon,
  FreelanceIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  PhotographyIcon,
  TwitterIcon,
  WebIcon,
} from "./assets/icons";

/***********************
 * Header Data
 */

export const title = "John Doe";

export const mainMenu = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Portfolio",
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

export const sidebarData = {
  name: "John Doe",
  subtitles: [
    "A Web Developer",
    "An UI/UX Designer",
    "A Photographer",
    "A Freelancer",
    "A Dreamer",
  ],
  socialLinks: [
    {
      id: "facebook",
      href: "https://facebook.com",
      icon: FacebookIcon,
    },
    {
      id: "twitter",
      href: "https://twitter.com",
      icon: TwitterIcon,
    },
    {
      id: "linkedin",
      href: "https://linkedin.com",
      icon: LinkedInIcon,
    },
    {
      id: "instagram",
      href: "https://instagram.com",
      icon: InstagramIcon,
    },
    {
      id: "github",
      href: "https://github.com",
      icon: GithubIcon,
    },
  ],
  bio: [
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
  ],
  profilePicture: profilePictureJPG,
};

/********************
 * Hero Image Data
 */
export const heroImage = {
  firstLine: "HI THERE!",
  secondLine: "Discover my story",
  linkText: "VIDEO RESUME",
  linkHref: "/video-resume",
  image: heroImageJPG,
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
export const videoResumeYoutubeID = "vZpeM_gxLTY";

/***********************
 * My Services Data
 */
export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I design and develop responsive websites using the latest technologies.",
    icon: WebIcon,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "I design user-friendly interfaces for web and mobile applications.",
    icon: DesignIcon,
  },
  {
    id: 3,
    title: "Photography",
    description: "I capture moments and create memories.",
    icon: PhotographyIcon,
  },
  {
    id: 4,
    title: "Freelancing",
    description: "I am available for hire as a freelancer.",
    icon: FreelanceIcon,
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

/***********************
 * Testimonials Data
 */
export const testimonials = [
  {
    id: 1,
    content:
      "John is an amazing developer. He is a great communicator and always delivers on time.",
    author: "Jane Doe",
    photo: testiPhoto1JPG,
    position: "CEO, XYZ Inc.",
  },
  {
    id: 2,
    content:
      "John is a talented designer. He has a keen eye for detail and always exceeds expectations.",
    author: "Alice Smith",
    photo: testiPhoto2JPG,
    position: "Creative Director, ABC Corp.",
  },
  {
    id: 3,
    content:
      "John is a professional photographer. He captures the perfect shot every time.",
    author: "Bob Brown",
    photo: testiPhoto3JPG,
    position: "Photography Enthusiast",
  },
  {
    id: 4,
    content:
      "John is a reliable freelancer. He is always ready to take on new challenges and deliver outstanding results.",
    author: "Eve Wilson",
    photo: testiPhoto4JPG,
    position: "Freelance Writer",
  },
];

/***************************
 * Latest Publications Data
 */

export const latestPublications = [
  {
    id: "001",
    title: "Create a Portfolio Website Using HTML, CSS, and JavaScript",
    date: "May 15, 2021",
    image: publishPhoto1JPG,
    category: "Web Development",
  },
  {
    id: "002",
    title: "Design a Mobile App Using Figma and Adobe XD",
    date: "May 10, 2021",
    image: publishPhoto2JPG,
    category: "UI/UX Design",
  },
];
