import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "My Website",
  EMAIL: "goodtimescoding@outlook.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to My Website!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Topics that I find interesting",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Portafolio",
  DESCRIPTION: "Projects I feel proud of",
};

export const SOCIALS: Socials = [
  { 
    NAME: "X",
    HREF: "https://x.com/goodtimescoding",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/dev-alvarez"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/alvarez-dev",
  }
];
