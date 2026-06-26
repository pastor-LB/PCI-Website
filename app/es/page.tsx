import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ayuda con Alimentos en Bridgeport CT — Park City Initiative",
  description:
    "Park City Initiative ofrece asistencia alimentaria, programas juveniles y apoyo comunitario en Bridgeport, CT.",
  alternates: {
    canonical: `${SITE.url}/es`,
    languages: {
      en: `${SITE.url}/`,
      "es-US": `${SITE.url}/es`,
      es: `${SITE.url}/es`,
    },
  },
  openGraph: {
    title: "Ayuda con Alimentos en Bridgeport CT — Park City Initiative",
    description:
      "Park City Initiative ofrece asistencia alimentaria, programas juveniles y apoyo comunitario en Bridgeport, CT.",
    url: `${SITE.url}/es`,
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayuda con Alimentos en Bridgeport CT — Park City Initiative",
    description:
      "Park City Initiative ofrece asistencia alimentaria, programas juveniles y apoyo comunitario en Bridgeport, CT.",
  },
};

export default function SpanishHomePage() {
  return (
    <div lang="es">
      <div className="flex min-h-[70vh] items-center bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-28 pb-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            ¿Necesitas ayuda con comida?
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Park City Initiative ofrece despensa de alimentos gratuita, programas juveniles y
            apoyo comunitario para familias de Bridgeport, Connecticut.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/get-help" variant="gold" size="lg">
              Obtener Ayuda
            </Button>
            <Button href="/volunteer" variant="outline-white" size="lg">
              Voluntario
            </Button>
            <Button href="/donate" variant="outline-white" size="lg">
              Donar
            </Button>
          </div>
          <p className="mt-8 font-heading text-3xl font-bold text-brand-gold">
            {SITE.phoneDisplay}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold text-brand-purple">
          Despensa de Alimentos Bishop Jean Williams
        </h2>
        <p className="mt-4 text-brand-gray">
          Ofrecemos alimentos gratuitos, cajas de cuidado para personas mayores, y entregas de
          despensa móvil a familias en toda la ciudad de Bridgeport.
        </p>
        <h3 className="mt-8 text-lg font-semibold text-brand-charcoal">Horario</h3>
        <p className="mt-2 text-brand-gray">
          Mercado Comunitario: Miércoles, sin cita previa
          <br />
          Entrega en auto: Martes y jueves
          <br />
          {SITE.address.full}
        </p>
      </div>
    </div>
  );
}
