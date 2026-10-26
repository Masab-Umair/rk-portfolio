export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto w-[min(1180px,92%)] flex flex-col items-center justify-between gap-3 text-center text-xs text-muted sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} Roman Khan. Peshawar, Pakistan.</p>
        <p>Built with Next.js &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
