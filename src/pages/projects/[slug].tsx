import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Tag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ImageLightbox from "@/components/ImageLightbox";
import { projects, getProjectBySlug, type Project } from "@/data/projects";

interface ProjectPageProps {
  project: Project;
  prevSlug: string | null;
  nextSlug: string | null;
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = ({ params }) => {
  const project = getProjectBySlug(params!.slug as string);
  if (!project) return { notFound: true };

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prevSlug = idx > 0 ? projects[idx - 1].slug : null;
  const nextSlug = idx < projects.length - 1 ? projects[idx + 1].slug : null;

  return { props: { project, prevSlug, nextSlug } };
};

export default function ProjectDetail({
  project,
  prevSlug,
  nextSlug,
}: ProjectPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>{project.title} — ROCEC Arquitectura</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="relative h-[60vh] w-full md:h-[75vh]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <AnimatedSection className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
        >
          <ArrowLeft size={14} />
          Todos los Proyectos
        </Link>

        <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">
          {project.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Tag size={14} />
            {project.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {project.year}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {project.location}
          </span>
        </div>

        <p className="mt-10 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
          {project.description}
        </p>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-border"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={img}
                alt={`${project.title} — imagen ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-4xl justify-between px-6 py-10">
          {prevSlug ? (
            <Link
              href={`/projects/${prevSlug}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
            >
              <ArrowLeft size={14} />
              Proyecto Anterior
            </Link>
          ) : (
            <span />
          )}
          {nextSlug ? (
            <Link
              href={`/projects/${nextSlug}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand"
            >
              Siguiente Proyecto
              <ArrowRight size={14} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={project.images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() =>
              setLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + project.images.length) % project.images.length
                  : 0
              )
            }
            onNext={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % project.images.length : 0
              )
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}
