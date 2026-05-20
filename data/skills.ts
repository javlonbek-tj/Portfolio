import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiSass,
  SiTailwindcss,
  SiFigma,
  SiAntdesign,
  SiShadcnui,
} from 'react-icons/si';
import { ShieldCheck } from 'lucide-react';

export type SkillEntry = {
  name: string;
  icon: React.ComponentType<{ size?: number | string; color?: string }>;
  color: string;
  themeAdaptive?: boolean;
  docs: string;
};

export const SKILLS: SkillEntry[] = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    docs: 'https://www.typescriptlang.org/docs/',
  },
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    docs: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#000000',
    themeAdaptive: true,
    docs: 'https://nextjs.org/docs',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
    docs: 'https://nodejs.org/en/docs/',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#000000',
    themeAdaptive: true,
    docs: 'https://expressjs.com/',
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
    color: '#E0234E',
    docs: 'https://docs.nestjs.com/',
  },
  {
    name: 'Socket.io',
    icon: SiSocketdotio,
    color: '#000000',
    themeAdaptive: true,
    docs: 'https://socket.io/docs/v4/',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
    docs: 'https://www.postgresql.org/docs/',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    docs: 'https://www.mongodb.com/docs/',
  },
  {
    name: 'Sass/Scss',
    icon: SiSass,
    color: '#CC6699',
    docs: 'https://sass-lang.com/documentation/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    docs: 'https://tailwindcss.com/docs/',
  },
  {
    name: 'Figma',
    icon: SiFigma,
    color: '#F24E1E',
    docs: 'https://help.figma.com/',
  },
  {
    name: 'Ant Design',
    icon: SiAntdesign,
    color: '#0170FE',
    docs: 'https://ant.design/docs/react/introduce',
  },
  {
    name: 'shadcn/ui',
    icon: SiShadcnui,
    color: '#000000',
    themeAdaptive: true,
    docs: 'https://ui.shadcn.com/',
  },
  {
    name: 'Better Auth',
    icon: ShieldCheck,
    color: '#6366F1',
    docs: 'https://www.better-auth.com/docs',
  },
];
