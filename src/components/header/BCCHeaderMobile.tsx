'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const BCCHeaderMobile = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/fans-tournament', label: 'FAN’S TOURNAMENT' },
    { href: '/about-us', label: 'ABOUT US' },
    { href: '/player-list', label: 'PLAYER LIST' },
    { href: '/contact-us', label: 'CONTACT US' },
  ];

  return (
    <header className='w-full md:hidden relative bg-white'>
      <div className='flex items-center justify-between h-16 px-4 '>
        {/* Left: Logo */}
        <div className='flex-shrink-0'>
          <Link href='/'>
            <Image
              src='/bccImages/logo.jpg'
              alt='Logo'
              width={70}
              height={40}
              className='object-contain'
            />
          </Link>
        </div>

        {/* Right: Hamburger */}
        <button
          className='text-5xl text-black' // white for visibility on green background
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full backdrop-blur-xl bg-white/10 border-t border-white/20 flex flex-col gap-4 p-4 z-40 rounded-b-lg'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold text-center py-2 transition ${
                pathname === link.href ? 'text-yellow-300' : 'text-white hover:text-yellow-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default BCCHeaderMobile;
