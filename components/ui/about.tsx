"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Currently", value: "Computer Operations Specialist & Receptionist at Oriental Degree College" },
  { label: "Degree", value: "BS Computer Science, University of Peshawar" },
  { label: "Email", value: profile.email },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid w-[min(1180px,92%)] gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About</span>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold text-ink">
            Research-first marketing, built to ship.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I have structured high-converting Shopify stores, run market research and modeled targeted
            Ideal Customer Profiles (ICPs). I also create videos and brand assets, so a campaign can go
            from research to finished creative with one person.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass h-fit rounded-2xl p-7"
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">
            Quick facts
          </h3>
          <dl className="mt-5 grid gap-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium text-gold/80">{fact.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink/90">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
