'use client';
import { SKILLS } from '@/data/skills';
import { SkillIcon } from './SkillIcon';

export default function Skills() {
  return (
    <section id='skills' className='py-24 bg-white dark:bg-[#030712]'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-14'>
          <p className='text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2'>
            Tech Stack
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            Skills
          </h2>
          <div className='w-10 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mb-4' />
          <p className='text-gray-500 dark:text-gray-400 max-w-xl'>
            Technologies I work with daily.
          </p>
        </div>

        <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-6'>
          {SKILLS.map((skill) => (
            <a
              key={skill.name}
              href={skill.docs}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-200'
            >
              <div className='transition-transform duration-200 group-hover:scale-110'>
                <SkillIcon skill={skill} />
              </div>
              <span className='text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center leading-tight'>
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
