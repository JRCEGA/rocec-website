import Link from "next/link";
import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} ROCEC Arquitectura. Todos los
          derechos reservados.
        </p>

        <div className="flex items-center gap-5">
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-brand"
          >
            <Instagram size={18} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-brand"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="mailto:estudio@rocec.com"
            aria-label="Correo electrónico"
            className="text-muted transition-colors hover:text-brand"
          >
            <Mail size={18} />
          </Link>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand"
        >
          Volver arriba
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
