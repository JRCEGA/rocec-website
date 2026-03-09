import Head from "next/head";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const services = [
  "Diseño Arquitectónico",
  "Diseño de Interiores",
  "Urbanismo y Paisajismo",
  "Estudios de Factibilidad",
  "Renovación y Reutilización Adaptativa",
  "Consultoría en Sustentabilidad",
];

const awards = [
  { year: 2024, title: "Premio CMIC Baja California — Casa Serena" },
  { year: 2023, title: "Bienal de Arquitectura del Noroeste — Centro Corporativo Río" },
  { year: 2023, title: "Premio CAM-SAM — Spa Agua Caliente" },
  { year: 2022, title: "Premio Obras CEMEX — Plaza Cívica Culiacán" },
  { year: 2022, title: "Mención Honorífica Bienal Nacional — Residencia Chapultepec" },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Nosotros — ROCEC Arquitectura</title>
        <meta
          name="description"
          content="Conoce ROCEC Arquitectura — casi 30 años diseñando desde Tijuana, Baja California."
        />
      </Head>

      <AnimatedSection className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden bg-border">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Estudio ROCEC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Sobre ROCEC
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              Con casi 30 años de trayectoria, ROCEC Arquitectura es un estudio
              fundado en la convicción de que la arquitectura debe ser serena,
              reflexiva y profundamente arraigada en su entorno. Creemos que los
              mejores edificios son aquellos que apenas se notan — espacios tan
              sintonizados con su contexto que se sienten como si siempre
              hubieran estado ahí.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
              Con sede en Tijuana, Baja California, y presencia en Culiacán,
              Sinaloa, el estudio trabaja en diversas escalas — desde interiores
              residenciales íntimos hasta proyectos comerciales y urbanos de gran
              envergadura — siempre con el mismo compromiso con el oficio, la
              honestidad material y la generosidad espacial.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
            Nuestro Enfoque
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
            Cada proyecto comienza con escuchar. Nos sumergimos en el sitio, el
            clima, la cultura y los ritmos cotidianos de las personas que
            habitarán los espacios que creamos. A partir de ahí, la arquitectura
            emerge — no como una forma impuesta, sino como una respuesta. Los
            materiales se eligen por sus cualidades táctiles y ambientales. Los
            detalles se resuelven a escala real. Nada es arbitrario.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionHeading
            title="Servicios"
            subtitle="Ofrecemos una gama completa de servicios de arquitectura y diseño."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="border border-border px-6 py-5 text-base text-foreground transition-colors hover:border-brand"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <SectionHeading
            title="Reconocimientos"
            subtitle="Premios y distinciones seleccionados."
          />
          <div className="divide-y divide-border">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between gap-4 py-5"
              >
                <span className="text-base text-foreground">{award.title}</span>
                <span className="shrink-0 text-sm text-muted">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
