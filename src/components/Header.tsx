import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/" && !router.asPath.includes("#");
    if (href === "/#nosotros") return router.asPath === "/#nosotros";
    return router.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/LOGO_ROCEC_2026.png"
            alt="ROCEC - Construcción | Arquitectura"
            width={220}
            height={40}
            className={`h-9 w-auto object-contain transition-all ${
              theme === "dark" ? "invert" : ""
            }`}
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-brand ${
                  isActive(link.href) ? "text-brand" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground md:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 border-b border-border bg-background px-6 py-6 md:hidden"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base tracking-wide transition-colors hover:text-brand ${
                    isActive(link.href) ? "text-brand" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
