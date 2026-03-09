import Head from "next/head";
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contacto — ROCEC Arquitectura</title>
        <meta
          name="description"
          content="Ponte en contacto con ROCEC Arquitectura en Tijuana, B.C. para platicar sobre tu próximo proyecto."
        />
      </Head>

      <AnimatedSection className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <SectionHeading
          title="Contáctanos"
          subtitle="Nos encantaría conocer tu proyecto. Escríbenos y comencemos la conversación."
        />

        <div className="grid gap-16 md:grid-cols-5">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex h-full items-center justify-center py-20">
                <div className="text-center">
                  <p className="text-xl font-light text-foreground">
                    Gracias por escribirnos.
                  </p>
                  <p className="mt-2 text-muted">
                    Te responderemos en un máximo de 48 horas.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-muted"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-brand"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-muted"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-brand"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm text-muted"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-brand"
                    placeholder="Consulta de proyecto"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-muted"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full resize-none border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-brand"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-foreground px-8 py-3 text-sm tracking-wide text-background transition-colors hover:bg-brand"
                >
                  Enviar Mensaje
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8 md:col-span-2">
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground">
                Estudio — Tijuana
              </h3>
              <div className="space-y-3 text-muted">
                <p className="flex items-start gap-2 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  Blvd. Agua Caliente 1234, Zona Río
                  <br />
                  Tijuana, B.C. 22320
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Mail size={16} className="shrink-0" />
                  estudio@rocec.com
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Phone size={16} className="shrink-0" />
                  +52 (664) 123-4567
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground">
                Oficina — Culiacán
              </h3>
              <div className="space-y-3 text-muted">
                <p className="flex items-start gap-2 text-sm">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  Blvd. Niños Héroes 567, Col. Centro
                  <br />
                  Culiacán, Sin. 80000
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground">
                Horario de atención
              </h3>
              <div className="space-y-1 text-sm text-muted">
                <p>Lunes a Viernes: 9:00 AM — 6:00 PM</p>
                <p>Sábado: Con cita previa</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-foreground">
                Síguenos
              </h3>
              <div className="flex gap-4 text-sm text-muted">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
