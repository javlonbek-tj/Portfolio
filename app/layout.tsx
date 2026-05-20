import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Javlon — Full Stack Developer',
  description:
    'Portfolio of Javlon, a Full Stack Developer from Tashkent, Uzbekistan. Specializing in React, Next.js, Node.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const theme =localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',theme==='dark');}catch(e){}`,
          }}
        />
      </head>
      <body className='bg-white dark:bg-[#030712] text-gray-900 dark:text-white antialiased'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
