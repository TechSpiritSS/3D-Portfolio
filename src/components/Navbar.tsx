'use client';

import { useActivePath } from '@/hooks/useActivePath';
import Link from 'next/link';

const Navbar = () => {
  const checkPath = useActivePath();

  const links = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={'header'}>
      <Link
        href={'/'}
        className={
          'w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'
        }
      >
        <p className={'blue-gradient_text'}>SS</p>
      </Link>
      <nav className={'flex text-lg gap-7 font-medium'}>
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={checkPath(link.path) ? 'text-blue-500' : 'text-black'}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
