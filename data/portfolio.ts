export const personalInfo = {
  name: 'Javlon',
  title: 'Fullstack Developer',
  description:
    "I'm a passionate full-stack developer with a main focus on Frontend using React and Backend with Node.js. I love clean code, thoughtful UX, and turning complex ideas into real products.",
  location: 'Uzbekistan, Tashkent',
  email: 'javlonbek.turdimatov96@gmail.com',
  phone: '+998 90 004 81 14',
  linkedin: 'https://linkedin.com/in/javlonbektj',
  telegram: 'https://t.me/javlonbek_0405',
  github: 'https://github.com/javlonbek-tj',
  photo: '/me.png',
  cv: '/Javlon_resume.pdf',
};

export type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  techs: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Next Pizza',
    description:
      'Full-stack pizza ordering app with dynamic product catalog, advanced filtering, multi-step checkout, and OTP email auth using Better Auth.',
    images: [
      '/projects/pizza_1.png',
      '/projects/pizza_2.png',
      '/projects/pizza_3.png',
      '/projects/pizza_4.png',
      '/projects/pizza_5.png',
    ],
    techs: [
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'Zustand',
      'shadcn/ui',
      'Tailwind CSS',
      'Better Auth',
    ],
    github: 'https://github.com/javlonbek-tj/next-pizza_with_better_auth',
    live: 'https://nextpizza.uz',
  },
  {
    id: 2,
    title: 'Manzillar Tizimi',
    description:
      "Full-stack address registry management system for Uzbekistan's administrative address data. Features an interactive Leaflet map with GeoJSON support displaying regions, districts, mahallas, streets, and properties with real-time filtering and role-based authentication.",
    images: [
      '/projects/manzil_1.png',
      '/projects/manzil_2.png',
      '/projects/manzil_3.png',
      '/projects/manzil_4.png',
      '/projects/manzil_5.png',
    ],
    techs: [
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'Leaflet',
      'shadcn/ui',
      'Tailwind CSS',
    ],
    github: 'https://github.com/javlonbek-tj/address',
    live: 'https://manzillar-tizimi.uz',
  },
  {
    id: 3,
    title: 'Geonomlar',
    description:
      'Full-stack geographic object naming management system with a multi-step government approval workflow supporting 10 distinct user types with role-based access control. Features an interactive map interface for geographic data visualization and object location management across Uzbekistan.',
    images: [
      '/projects/cabinet_1.png',
      '/projects/cabinet_2.png',
      '/projects/cabinet_3.png',
      '/projects/cabinet_4.png',
      '/projects/cabinet_5.png',
    ],
    techs: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Drizzle',
      'Ant Design',
    ],
    github: 'https://github.com/javlonbek-tj/geonames-backend',
    live: 'https://cabinet.geonomlar.uz',
  },
  {
    id: 4,
    title: 'Geonomlar — Citizen Portal',
    description:
      'Public citizen portal with Telegram authentication enabling users to submit and track geographic naming proposals. Features a comprehensive community voting system for democratic participation in geographic nomenclature decisions across Uzbekistan.',
    images: [
      '/projects/geonom_1.png',
      '/projects/geonom_2.png',
      '/projects/geonom_3.png',
      '/projects/geonom_4.png',
    ],
    techs: ['React', 'TypeScript', 'Ant Design'],
    github: 'https://github.com/javlonbek-tj/geonames-frontend',
    live: 'https://geonomlar.uz',
  },
];
