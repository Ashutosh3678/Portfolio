"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/portfolio/section-label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/components/variants/motion-variants";
import { achievements, certifications, education } from "@/data/achievements";

export function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="py-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionLabel>ACHIEVEMENTS &amp; EDUCATION</SectionLabel>
      <motion.div
        className="mt-6 grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <Card className="h-full p-5">
            <h3 className="text-lg font-semibold tracking-normal">
              Achievements &amp; Certifications
            </h3>
            <ul className="mt-4 space-y-4">
              {[...achievements, ...certifications].map((item) => (
                <li key={item.title} className="text-sm leading-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-medium text-foreground">
                      {item.title}
                    </span>
                    {item.date && (
                      <Badge className="shrink-0 bg-background text-muted-foreground">
                        {item.date}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Card className="h-full p-5">
            <h3 className="text-lg font-semibold tracking-normal">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.school} className="text-sm leading-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-medium text-foreground">
                      {item.school}
                    </span>
                    <Badge className="shrink-0 bg-background text-muted-foreground">
                      {item.grade}
                    </Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground">{item.degree}</p>
                  <p className="mt-1 text-muted-foreground">{item.date}</p>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
