"use client";

import { motion } from "framer-motion";
import {
  Calendar, Compass, ExternalLink, PenLine, Search,
  ShoppingBag, TrendingUp, Users, Video, Palette,
} from "lucide-react";
import SpotlightCard from "./spotlight-card";
import { featureFolders, skillCards } from "@/lib/data";

const iconMap = {
  video: Video,
  palette: Palette,
  calendar: Calendar,
  "pen-line": PenLine,
  "shopping-bag": ShoppingBag,
  search: Search,
  "trending-up": TrendingUp,
  users: Users,
  compass: Compass,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Projects</span>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold text-ink">
            Finished work, live folders.
          </h2>
          <p className="mt-4 text-muted">
            Start with the video and branding folders for finished creative. The grid below covers the
            marketing and e-commerce work behind it.
          </p>
        </motion.div>

        {/* Feature folders */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {featureFolders.map((folder, i) => {
            const Icon = iconMap[folder.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={folder.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                custom={i + 1}
                variants={fadeUp}
              >
                <SpotlightCard className="h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-muted">
                      {folder.badge}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-xl font-semibold text-ink">{folder.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{folder.description}</p>
                  <a
                    href={folder.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light"
                  >
                    {folder.cta}
                    <ExternalLink size={14} />
                  </a>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Skill / project cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((card, i) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                custom={i + 3}
                variants={fadeUp}
              >
                <SpotlightCard tilt={false} className="h-full">
                  <Icon size={20} className="text-gold" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
