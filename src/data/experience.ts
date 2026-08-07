import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    role: "Backend Intern",
    company: "Atalgo",
    date: "Jul 2026 - Present",
    location: "Remote",
    description: 
        "Actively contributing to backend development and maintenance by optimizing API performance, resolving system bugs, and ensuring reliable data delivery for scalable applications.",
    bullets: [
        "Engineered and implemented data pagination across REST API endpoints using FastAPI and SQLAlchemy, significantly improving response times for large datasets.",
        "Conducted rigorous debugging and system troubleshooting across the Python backend, identifying and resolving critical issues to improve overall application stability.",
        "Assisted in refactoring backend logic and maintaining clean code architecture to ensure seamless deployment and integration with AWS infrastructure."
    ],
    tech: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Databases",
      "SQLAlchemy",
      "AWS",
      "Docker",
      "Nginx",
      "React",
    ],
  },
  {
    role: "Backend / Full Stack Developer",
    company: "Freelance Developer",
    date: "Dec 2025 - June 2026",
    location: "Remote",
    description:
      "Building backend and full-stack features for client projects with a focus on reliable APIs, structured data workflows, and production-ready application behavior.",
    bullets: [
      "Built backend features for client projects, including invoice generation, structured billing records, REST APIs, and database-backed workflows.",
      "Implemented request validation, error handling, API rate limiting, and debugging improvements to strengthen backend reliability and application stability.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Databases",
      "API Rate Limiting",
      "Validation",
    ],
  },
  {
    role: "Open Source Software Contributor",
    company: "FreeCodeCamp",
    date: "Jan 2025 - Oct 2025",
    location: "Open Source",
    description:
      "Contributed to FreeCodeCamp’s open-source codebase through feature enhancements, bug fixes, and collaborative development workflows.",
    bullets: [
      "Contributed feature enhancements and bug fixes to FreeCodeCamp’s codebase using JavaScript and modern frontend development practices.",
      "Used Git and GitHub for collaborative development, including branching, pull requests, code reviews, and resolving maintainer feedback.",
    ],
    tech: ["JavaScript", "Git", "GitHub", "Frontend Development"],
  },
];