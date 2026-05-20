'use client';
import { X, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { navLinks } from './NavLinks';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSheet({ open, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden='true'
        onClick={onClose}
        className={`fixed inset-0 z-60 bg-black/50 transition-opacity duration-300 md:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Sheet */}
      <div
        role='dialog'
        aria-modal='true'
        className={`fixed inset-y-0 right-0 z-70 w-72 bg-white dark:bg-[#030712]
          border-l border-gray-200 dark:border-gray-800 shadow-2xl
          flex flex-col
          transition-transform duration-500 ease-in-out md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className='flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-800 shrink-0'>
          <span className='text-base font-semibold text-gray-900 dark:text-white'>
            Menu
          </span>
          <button
            onClick={onClose}
            aria-label='Close menu'
            className='p-2 rounded-lg cursor-pointer text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
          >
            <X size={20} />
          </button>
        </div>

        <nav className='flex flex-col px-6 py-6 gap-1 flex-1'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className='text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60 rounded-lg px-3 py-3 transition-colors cursor-pointer'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className='px-6 pb-8 shrink-0'>
          <a
            href={personalInfo.cv}
            download
            onClick={onClose}
            className='flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 text-white text-sm font-medium transition-colors'
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
