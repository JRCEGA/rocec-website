export interface Project {
  slug: string;
  title: string;
  category: "Residencial" | "Comercial" | "Industrial";
  year: number;
  location: string;
  description: string;
  coverImage: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "casa-serena",
    title: "Casa Serena",
    category: "Residencial",
    year: 2024,
    location: "Playas de Tijuana, B.C.",
    description:
      "Una residencia frente al mar que disuelve el límite entre interior y paisaje. Ventanales de piso a techo enmarcan vistas panorámicas al océano Pacífico, mientras que el concreto aparente y la madera cálida crean un diálogo entre materialidad cruda y vida refinada. El volumen superior en voladizo se suspende sobre un jardín nativo, ofreciendo refugio sin cortar la conexión con el terreno.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "centro-corporativo-rio",
    title: "Centro Corporativo Río",
    category: "Comercial",
    year: 2023,
    location: "Zona Río, Tijuana, B.C.",
    description:
      "Un edificio corporativo de seis niveles en el corazón de la Zona Río. La intervención combina una fachada de cristal con quiebrasoles de aluminio que regulan la incidencia solar, logrando un equilibrio entre transparencia y eficiencia energética. Los espacios de trabajo se organizan en planta libre alrededor de un atrio central iluminado cenitalmente, fomentando la colaboración y el bienestar de los usuarios.",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "nave-industrial-otay",
    title: "Nave Industrial Otay",
    category: "Industrial",
    year: 2024,
    location: "Parque Industrial Otay, Tijuana, B.C.",
    description:
      "Una nave industrial de 5,000 metros cuadrados diseñada para operaciones de manufactura de alta tecnología. La estructura de acero de grandes claros permite una flexibilidad total en la distribución de líneas de producción. Lucernarios estratégicamente ubicados reducen la dependencia de iluminación artificial, mientras que el sistema de ventilación cruzada optimiza las condiciones de trabajo durante todo el año.",
    coverImage:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "residencia-chapultepec",
    title: "Residencia Chapultepec",
    category: "Residencial",
    year: 2022,
    location: "Chapultepec, Tijuana, B.C.",
    description:
      "Una residencia que emerge de la topografía del fraccionamiento Chapultepec como si siempre hubiera sido parte del paisaje. Gruesos muros de concreto aparente regulan la temperatura de forma pasiva, mientras que profundas terrazas y persianas de madera retráctiles modulan la luz y la brisa del Pacífico. El edificio se organiza en torno a un patio central con espejo de agua, creando un microclima de quietud.",
    coverImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1200&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80",
    ],
    featured: true,
  },
  {
    slug: "torre-tres-rios",
    title: "Torre Tres Ríos",
    category: "Comercial",
    year: 2024,
    location: "Culiacán, Sinaloa",
    description:
      "Una torre de uso mixto de 12 pisos con una fachada de aletas de aluminio operables que responden a la orientación solar de Culiacán. El basamento alberga espacios comerciales y una galería de arte, mientras que los pisos superiores contienen oficinas y consultorios. Terrazas ajardinadas cada cuatro niveles crean pausas verticales, fomentando la comunidad dentro de una tipología de altura en el centro de la ciudad.",
    coverImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    ],
    featured: false,
  },
  {
    slug: "planta-procesadora-culiacan",
    title: "Planta Procesadora Culiacán",
    category: "Industrial",
    year: 2023,
    location: "Culiacán, Sinaloa",
    description:
      "Una planta procesadora de alimentos de 8,000 metros cuadrados que integra estándares de inocuidad alimentaria con un diseño arquitectónico que dignifica el espacio de trabajo. Muros de panel aislado y cubierta tipo sándwich garantizan el control térmico. Áreas administrativas con fachada acristalada conectan visualmente con la zona de producción, promoviendo transparencia operativa.",
    coverImage:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3c3250a8b0?w=1200&q=80",
    ],
    featured: false,
  },
  {
    slug: "plaza-comercial-agua-caliente",
    title: "Plaza Comercial Agua Caliente",
    category: "Comercial",
    year: 2023,
    location: "Agua Caliente, Tijuana, B.C.",
    description:
      "Una plaza comercial de 3,500 metros cuadrados que reinterpreta el concepto de centro comercial a escala de barrio. Locales de doble altura con fachadas modulares permiten una identidad visual propia a cada comercio, mientras que pasillos abiertos con vegetación regional y pérgolas de acero crean un recorrido agradable. El diseño prioriza la permeabilidad y la conexión con la calle.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1200&q=80",
    ],
    featured: false,
  },
  {
    slug: "bodega-logistica-mesa-otay",
    title: "Bodega Logística Mesa de Otay",
    category: "Industrial",
    year: 2022,
    location: "Mesa de Otay, Tijuana, B.C.",
    description:
      "Un centro de distribución y bodega logística de 12,000 metros cuadrados estratégicamente ubicado cerca de la garita de Otay. El diseño optimiza los flujos de carga y descarga con andenes a distintas alturas y patios de maniobras amplios. La envolvente de paneles metálicos aislados y la cubierta con tragaluces prismáticos aseguran eficiencia térmica y lumínica para operaciones las 24 horas.",
    coverImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",
    ],
    featured: false,
  },
];

export const categories = [
  "Todos",
  "Residencial",
  "Comercial",
  "Industrial",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "Todos") return projects;
  return projects.filter((p) => p.category === category);
}
