import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

const contactItems = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: 'text-red-500',
    bg: 'bg-red-100 dark:bg-red-900/20',
  },
  {
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    icon: Phone,
    color: 'text-green-500',
    bg: 'bg-green-100 dark:bg-green-900/20',
  },
  {
    label: 'Telegram',
    value: 't.me/javlonbek_0405',
    href: personalInfo.telegram,
    icon: FaTelegramPlane,
    color: 'text-sky-500',
    bg: 'bg-sky-100 dark:bg-sky-900/20',
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    description: 'See my open-source work',
    href: personalInfo.github,
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    description: 'Connect professionally',
    href: personalInfo.linkedin,
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id='contact' className='py-24 bg-[#F9FAFB] dark:bg-[#111827]'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-14'>
          <p className='text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2'>
            Contact
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
            Get in Touch
          </h2>
          <div className='w-10 h-1 bg-gray-400 dark:bg-gray-600 rounded-full mb-4' />
          <p className='text-gray-500 dark:text-gray-400 max-w-xl'>
            I&apos;m currently open to new opportunities. Feel free to reach out
            if you are looking for a developer.
          </p>
        </div>

        {/* Primary contact cards */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl'>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className='group flex items-center gap-4 py-5 px-3 rounded-2xl bg-white dark:bg-[#1F2937] border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transition-all duration-200'
            >
              <div className={`p-3 rounded-xl ${item.bg} shrink-0`}>
                <item.icon size={22} className={item.color} />
              </div>
              <div className='min-w-0'>
                <p className='text-xs text-gray-400 dark:text-gray-500 font-medium mb-0.5'>
                  {item.label}
                </p>
                <p className='text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors'>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social links — pill style */}
        <div className='flex flex-wrap gap-3 mt-5 max-w-4xl'>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-3 px-5 py-3 rounded-full bg-white dark:bg-[#1F2937] border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-200'
            >
              <link.icon
                size={18}
                className='text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'
              />
              <span className='text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'>
                {link.label}
              </span>
              <span className='text-xs text-gray-400 dark:text-gray-500'>
                {link.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
