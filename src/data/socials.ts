import type { SocialLink } from "@/types/portfolio";

export function createSocials(githubUsername: string, email: string): SocialLink[] {
  return [
    ...(githubUsername.trim()
    ? [
        {
          label: "GitHub",
          href: `https://github.com/${githubUsername}`,
          icon: "github",
        },
      ]
    : []),
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%C3%A3shutosh-si%C3%B1gh/",
      icon: "linkedin",
    },
    {
      label: "Website",
      href: "https://ashutosh.works",
      icon: "website",
    },
    {
      label: "Email",
      href: `mailto:${email}`,
      icon: "mail",
    },
  ];
}

export const socials = createSocials("Ashutosh3678", "ashutoshsingh2081@gmail.com");
