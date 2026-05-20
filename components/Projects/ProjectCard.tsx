'use client';
import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import type { Project } from '@/data/portfolio';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className='rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-md dark:hover:shadow-gray-900/50 transition-shadow duration-300'>
      {/* Screenshot */}
      <div className='lg:w-[45%] bg-[#F9FAFB] dark:bg-[#374151] p-6 lg:p-8 flex items-center justify-center'>
        <Gallery
          options={{
            padding: { top: 40, bottom: 40, left: 60, right: 60 },
            zoom: false,
            imageClickAction: 'toggle-controls',
          }}
        >
          <div className='relative w-full aspect-video'>
            {project.images.map((image, i) => (
              <Item
                key={i}
                original={image}
                thumbnail={image}
                width={1920}
                height={1080}
              >
                {({ ref, open }) =>
                  i === 0 ? (
                    <div
                      ref={ref}
                      onClick={open}
                      className='absolute inset-0 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105'
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot`}
                        fill
                        className='object-cover rounded-xl shadow-md'
                      />
                      {project.images.length > 1 && (
                        <div className='absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full z-10'>
                          1 / {project.images.length}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      ref={ref}
                      href={image}
                      style={{ display: 'none' }}
                      aria-hidden='true'
                    />
                  )
                }
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      {/* Info */}
      <div className='lg:w-[55%] bg-white dark:bg-[#1F2937] p-8 lg:p-10 flex flex-col justify-center gap-6'>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
          {project.title}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-base'>
          {project.description}
        </p>
        <div className='flex flex-wrap gap-2'>
          {project.techs.map((tech) => (
            <span
              key={tech}
              className='px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex items-center gap-3 pt-1'>
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium transition-colors'
            >
              <SiGithub size={16} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white text-sm font-medium transition-colors'
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
