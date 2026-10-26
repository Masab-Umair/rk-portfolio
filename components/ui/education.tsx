"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SpotlightCard from "./spotlight-card";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Education</span>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold text-ink">
            Foundations.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SpotlightCard className="h-full">
                <GraduationCap size={22} className="text-gold" />
                <h3 className="font-display mt-4 text-base font-semibold text-ink">{item.degree}</h3>
                <p className="mt-2 text-sm text-muted">{item.org}</p>
                {item.detail && <p className="mt-1 text-sm text-gold-dim">{item.detail}</p>}
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
