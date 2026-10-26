"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto w-[min(900px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Experience</span>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold text-ink">
            Where the work happened.
          </h2>
        </motion.div>

        <ol className="relative ml-3 border-l border-white/10">
          {experience.map((item, i) => (
            <motion.li
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 pl-10 last:mb-0"
            >
              <span className="absolute -left-[21px] top-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-void text-gold">
                <Briefcase size={16} />
              </span>
              {item.when && (
                <span className="mb-2 inline-block rounded-full bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold">
                  {item.when}
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
              <p className="mt-0.5 text-sm font-medium text-gold-dim">{item.org}</p>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
