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

const services = [
  "Diseño Arquitectónico",
  "Construcción",
  "Proyectos Industriales",
  "Proyectos Comerciales",
  "Proyectos Residenciales",
  "Consultoría en Sustentabilidad",
];

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
        <div className="absolute inset-0 bg-black/40" />

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

      {/* Sobre ROCEC */}
      <section id="nosotros" className="scroll-mt-20 border-t border-border">
        <AnimatedSection className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden bg-border">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Estudio ROCEC"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
                Sobre ROCEC
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
                Con casi 30 años de trayectoria, ROCEC Arquitectura es un
                estudio fundado en la convicción de que la arquitectura debe ser
                serena, reflexiva y profundamente arraigada en su entorno.
                Creemos que los mejores edificios son aquellos que apenas se
                notan — espacios tan sintonizados con su contexto que se sienten
                como si siempre hubieran estado ahí.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
                Con sede en Tijuana, Baja California, y presencia en Culiacán,
                Sinaloa, el estudio trabaja en diversas escalas — desde
                residencias íntimas hasta proyectos comerciales e industriales de
                gran envergadura — siempre con el mismo compromiso con el
                oficio, la honestidad material y la generosidad espacial.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
