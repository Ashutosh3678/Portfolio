import { createSocials } from "@/data/socials";
import type { Profile } from "@/types/portfolio";

const githubUsername = "Ashutosh3678";
const email = "ashutoshsingh2081@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/%C3%A3shutosh-si%C3%B1gh/";
const websiteUrl = "https://ashutosh.works";
const xUrl = "https://x.com/Ashutosh3678";

export const profile: Profile = {
  name: "Shiv Ashutosh Singh",
  title: "Full-Stack Developer",
  subtitle: "Full-Stack Intern @ OneInfo.AI",
  location: "Hyderabad, India",
  email,
  pronouns: "he/him",
  githubUsername,
  linkedinUrl,
  websiteUrl,
  xUrl,
  currentlyBuilding:
    "Currently working as a Full-Stack Intern at OneInfo.AI, building async ingestion pipelines and GraphQL APIs",
  bio: "I build full-stack web products end-to-end, with a strong focus on backend systems, clean APIs, and scalable architecture. Currently working with React, Next.js, Node.js, GraphQL, MongoDB, PostgreSQL, and modern developer tooling.",
  socials: createSocials(githubUsername, email),
};
