"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Play, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

function MagneticButton({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "line";
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <a
      ref={ref}
      href={href}
      data-cursor-hover
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" }}
      className={
        variant === "solid"
          ? "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-void shadow-[0_0_40px_-10px_rgba(232,180,84,0.6)] transition-colors hover:bg-gold-light"
          : "inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
      }
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Mesh / particle background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[64px]" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-gold-dim/10 blur-[72px] animate-float" />
        <div className="absolute -right-10 top-1/3 h-[300px] w-[300px] rounded-full bg-gold/10 blur-[56px] animate-float" style={{ animationDelay: "1.5s" }} />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto w-[min(1180px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold"
        >
          <Sparkles size={14} />
          Available for freelance &amp; collaboration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-4xl text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[1.02] tracking-tight text-ink"
        >
          {profile.name}
          <span className="block text-gradient-gold">builds campaigns that convert.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 flex items-center gap-2 text-sm text-muted"
        >
          <MapPin size={16} className="text-gold" />
          {profile.location}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-3 max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={profile.youtube} external>
            <Play size={16} />
            Watch my YouTube channel
          </MagneticButton>
          <MagneticButton href="#projects" variant="line">
            View projects
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#about"
          data-cursor-hover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 inline-flex items-center gap-2 text-xs text-muted hover:text-gold"
        >
          <ArrowDown size={14} className="animate-float" />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
