import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Proyectos — ROCEC Arquitectura</title>
        <meta
          name="description"
          content="Explora nuestro portafolio de proyectos residenciales, comerciales, de interiores y urbanismo."
        />
      </Head>

      <AnimatedSection className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <SectionHeading
          title="Proyectos"
          subtitle="Un cuerpo de trabajo que abarca residencias, hitos comerciales, interiores y espacios públicos."
        />

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`border px-5 py-2 text-sm tracking-wide transition-colors ${
                activeCategory === cat
                  ? "border-brand bg-brand text-white"
                  : "border-border text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted">
            Aún no hay proyectos en esta categoría.
          </p>
        )}
      </AnimatedSection>
    </>
  );
}
