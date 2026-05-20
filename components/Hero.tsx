import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id='about' className='bg-white dark:bg-[#030712] pt-16'>
      <div className='max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center'>
        {/* Left */}
        <div className='space-y-5 order-2 md:order-1'>
          <p className='text-gray-500 dark:text-gray-400 font-semibold tracking-wide uppercase text-sm'>
            Full Stack Developer
          </p>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight'>
            Hi, I am{' '}
            <span className='text-gray-700 dark:text-gray-100'>
              {personalInfo.name}
            </span>
          </h1>

          <p className='text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg'>
            {personalInfo.description}
          </p>

          <div className='flex flex-col gap-3 pt-1'>
            <div className='flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm'>
              <MapPin
                size={16}
                className='text-gray-400 dark:text-gray-500 shrink-0'
              />
              <span>{personalInfo.location}</span>
            </div>

            <div className='flex items-center gap-2.5'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500' />
              </span>
              <span className='text-green-600 dark:text-green-400 font-medium text-sm'>
                Open to work
              </span>
            </div>
          </div>

          <div className='flex items-center gap-3 pt-1'>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/80 transition-all duration-200 text-sm font-medium'
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href={personalInfo.telegram}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Telegram'
              className='flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700/80 transition-all duration-200 text-sm font-medium'
            >
              <SiTelegram size={18} />
              Telegram
            </a>
          </div>
        </div>

        {/* Right */}
        <div className='flex justify-center md:justify-end order-1 md:order-2'>
          <div className='relative'>
            <div className='absolute -inset-4 rounded-full bg-linear-to-br from-gray-300/30 to-gray-500/20 dark:from-gray-600/20 dark:to-gray-800/20 blur-3xl' />
            <div className='relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-300/40 dark:border-gray-600/30 shadow-2xl shadow-gray-400/10 dark:shadow-gray-900/30'>
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
