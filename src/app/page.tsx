import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ContributionSection } from "@/components/sections/contribution-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MusicListeningButton } from "@/components/portfolio/music-listening-button";
import { ProjectsSection } from "@/components/sections/projects-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { siteConfig } from "@/lib/constants";


export default function Home() {
  // Define the WebSite structured data using your constants
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      // Use siteConfig.name if you added it, otherwise fallback to siteConfig.author
      name: siteConfig.author, 
      url: siteConfig.url,
    };
  
  return (
    <>
      <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  
      <HeroSection />
      <MusicListeningButton />
      <ContributionSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <QuoteSection />
      
    </>
  );
}
