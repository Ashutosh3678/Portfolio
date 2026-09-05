export interface Achievement {
  title: string;
  detail: string;
  date: string;
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  grade: string;
}

export const achievements: Achievement[] = [
  {
    title: "Winner - Zignasa National Level Hackathon",
    detail: "Won first place at the Zignasa national level hackathon.",
    date: "Dec 2024",
  },
  {
    title: "Runner-up - Project Expo",
    detail: "Secured runner-up position at the Project Expo.",
    date: "Jun 2025",
  },
];

export const certifications: Achievement[] = [
  {
    title: "Supervised Machine Learning",
    detail: "Stanford Online (Coursera)",
    date: "",
  },
  {
    title: "AI Foundations Associate",
    detail: "Oracle University",
    date: "",
  },
];

export const education: Education[] = [
  {
    school: "MLR Institute of Technology",
    degree: "B.Tech in Computer Science (Data Science)",
    date: "Sep 2023 - Sep 2027",
    grade: "CGPA: 8.78",
  },
];
