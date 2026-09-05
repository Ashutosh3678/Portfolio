import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    role: "Full-Stack Intern",
    company: "OneInfo.AI",
    date: "Feb 2026 - Present",
    location: "Hyderabad",
    description:
      "Building backend systems and product features for a production app, with a focus on async pipelines, API performance, and data modeling.",
    bullets: [
      "Engineered an asynchronous product ingestion pipeline for a production app, decoupling scraping from API requests and reducing average response time from 2.5s to less than 1s.",
      "Identified and eliminated backend bottlenecks caused by synchronous scraping by introducing background job processing and a queue-based architecture.",
      "Optimized MongoDB schema design and query patterns, reducing redundant reads and improving data retrieval performance by 30%.",
      "Designed and implemented GraphQL schemas and resolvers to efficiently serve nested data, minimizing over-fetching and improving API efficiency.",
      "Integrated third-party APIs and developed wallet payout systems for creator stores, handling transaction flows, validation, and failure scenarios.",
    ],
    tech: [
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Queues",
      "REST APIs",
      "Third-party APIs",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Brain O Vision Solutions",
    date: "Feb 2025 - May 2025",
    location: "Hyderabad",
    description:
      "Worked on Shopify-based eCommerce stores, improving UI consistency, navigation, checkout flows, and overall store performance.",
    bullets: [
      "Customized Shopify themes using Liquid templating, improving UI consistency and enhancing product discovery across devices.",
      "Optimized product collections and navigation structure, enabling faster browsing and better user engagement.",
      "Configured secure payment gateways and streamlined checkout workflows, reducing friction in the transaction flow.",
      "Enhanced overall store performance and responsiveness, supporting scalable eCommerce operations.",
    ],
    tech: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS",
      "Payment Gateways",
    ],
  },
];
