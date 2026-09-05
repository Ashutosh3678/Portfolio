import type { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";
import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/page-shell";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Ashutosh Singh | Full-Stack Developer",
  description:
    "Portfolio of Shiv Ashutosh Singh, a full-stack developer building scalable APIs, MERN stack apps, GraphQL systems, and real-world web products.",
  keywords: [
    "Shiv Ashutosh Singh",
    "Ashutosh Singh",
    "Ashutosh3678",
    "ashutosh.works",
    "Shiv Ashutosh Singh portfolio",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "GraphQL Developer",
  ],
  authors: [{ name: "Shiv Ashutosh Singh" }],
  creator: "Shiv Ashutosh Singh",
  openGraph: {
    title: "Shiv Ashutosh Singh | Full-Stack Developer",
    description:
      "Full-stack developer focused on scalable APIs, MERN apps, GraphQL, and product engineering.",
    url: "https://ashutosh.works/",
    siteName: "Shiv Ashutosh Singh",
    type: "website",
    images: [
      {
        url: "/images/projects/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiv Ashutosh Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiv Ashutosh Singh | Full-Stack Developer",
    description:
      "Portfolio of Shiv Ashutosh Singh, full-stack developer.",
    images: ["/images/projects/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inconsolata.variable} font-sans antialiased`}>
        <ThemeProvider>
          <PageShell>{children}</PageShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
