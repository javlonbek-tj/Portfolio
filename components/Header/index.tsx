'use client';
import { useState, useEffect } from 'react';
import { Download, Menu } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';
import MobileSheet from './MobileSheet';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#030712]
          border-b transition-colors duration-300
          ${scrolled
            ? 'border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-900/50'
            : 'border-transparent shadow-none'
          }
        `}
      >
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <a
            href='#about'
            className='text-xl font-bold text-gray-900 dark:text-white tracking-tight hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
          >
            {personalInfo.name}
          </a>

          <nav className='hidden md:flex items-center gap-8'>
            <NavLinks />
          </nav>

          <div className='hidden md:flex items-center gap-3'>
            <ThemeToggle />
            <a
              href={personalInfo.cv}
              download
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white text-sm font-medium transition-colors'
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className='md:hidden flex items-center gap-2'>
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label='Open menu'
              className='p-2 rounded-lg cursor-pointer text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileSheet open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
