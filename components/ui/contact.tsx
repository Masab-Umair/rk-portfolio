"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Linkedin, Mail, MessageSquare, Phone, X, Youtube } from "lucide-react";
import { profile } from "@/lib/data";
import SpotlightCard from "./spotlight-card";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    copyValue: profile.email,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: Phone,
    copyValue: profile.phone,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "YouTube",
    value: profile.youtube.replace("https://", ""),
    href: profile.youtube,
    icon: Youtube,
    external: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleCopy(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard not available — link remains usable directly.
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto w-[min(1180px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</span>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-semibold text-ink">
            Let&apos;s work together.
          </h2>
          <p className="mt-4 text-muted">
            Send a message about a store, a campaign or a video project. Reply comes by email, phone or
            LinkedIn — whichever works best.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            data-cursor-hover
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-void transition-colors hover:bg-gold-light"
          >
            <MessageSquare size={16} />
            Quick contact
          </button>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard tilt={false} className="flex items-center justify-between gap-4">
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    data-cursor-hover
                    className="flex min-w-0 flex-1 items-center gap-4"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{link.label}</span>
                      <span className="block truncate text-sm font-medium text-ink">{link.value}</span>
                    </span>
                  </a>
                  {link.copyValue && (
                    <button
                      aria-label={`Copy ${link.label}`}
                      onClick={() => handleCopy(link.label, link.copyValue!)}
                      data-cursor-hover
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-gold hover:text-gold"
                    >
                      {copied === link.label ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-void/80 backdrop-blur-sm p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-md rounded-2xl p-7"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">Start a conversation</h3>
                  <p className="mt-1 text-sm text-muted">Pick whatever&apos;s fastest for you.</p>
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setModalOpen(false)}
                  data-cursor-hover
                  className="text-muted hover:text-ink"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  data-cursor-hover
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  <Mail size={16} /> {profile.email}
                </a>
                <a
                  href={`tel:${profile.phoneHref}`}
                  data-cursor-hover
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  <Phone size={16} /> {profile.phone}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  <Linkedin size={16} /> Message on LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
