import { projects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id='projects' className='py-24 bg-[#F9FAFB] dark:bg-[#111827]'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-14'>
          <p className='text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2'>
            My Work
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            Projects
          </h2>
          <div className='w-10 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mb-4' />
          <p className='text-gray-500 dark:text-gray-400 max-w-xl'>
            A selection of projects I&apos;ve built.
          </p>
        </div>

        <div className='flex flex-col gap-8'>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
