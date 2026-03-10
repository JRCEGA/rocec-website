import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const featured = getFeaturedProjects();

export default function Home() {
  return (
    <>
      <Head>
        <title>ROCEC Arquitectura</title>
        <meta
          name="description"
          content="ROCEC Arquitectura — diseño consciente para el entorno construido."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconRCC.ico" />
      </Head>

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Arquitectura hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
            Arquitectura con
            <br />
            <span className="font-normal italic">intención</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base text-white/80 md:text-lg">
            Diseñamos espacios que honran su contexto, sirven a las personas y
            perduran en el tiempo.
          </p>
          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 border border-white/40 px-8 py-3 text-sm tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Ver Proyectos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Proyectos destacados */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          title="Obras Selectas"
          subtitle="Una selección curada de proyectos recientes en diversas escalas y tipologías."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm tracking-wide text-muted transition-colors hover:text-brand"
          >
            Ver todos los proyectos
            <ArrowRight size={14} />
          </Link>
        </div>
      </AnimatedSection>

      {/* Intro / Acerca de */}
      <AnimatedSection className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
              Diseñando para las personas,
              <br />
              el lugar y el propósito
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-muted">
              Con casi 30 años de trayectoria desde Tijuana, Baja California,
              ROCEC es un estudio fundado en la convicción de que la arquitectura
              debe ser serena, reflexiva y profundamente arraigada en su entorno.
              Colaboramos estrechamente con nuestros clientes para crear espacios
              que se sienten inevitables — como si no pudieran existir en ningún
              otro lugar.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-brand transition-colors hover:text-brand-dark"
            >
              Conoce más sobre nosotros
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
