'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const BCCHeaderMobile = () => {
  const [showTooltip, setShowTooltip] = useState(false); // Track tooltip visibility
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '', label: 'GALLERY' },
    { href: '/fans-tournament', label: 'FAN’S TOURNAMENT' },
    { href: '', label: 'ABOUT US' },
    { href: '', label: 'PLAYER LIST' },
    { href: '', label: 'CONTACT US' },
  ];

  return (
    <header className='w-full md:hidden relative bg-white z-50'>
      <div className='flex items-center justify-between h-16 px-4'>
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
        <button className='text-5xl text-black' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full backdrop-blur-xl bg-white/80 border-t border-black/10 flex flex-col gap-4 p-4 z-40 rounded-b-lg shadow-lg'>
          {navLinks.map((link) => (
            <>
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold text-center py-2 transition ${
                  pathname === link.href ? 'text-yellow-500' : 'text-black hover:text-yellow-500'
                }`}
                onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
                onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when hover ends
              >
                {link.label}
              </Link>

              {/* Conditionally render tooltip */}
              {showTooltip && link.href === '' && (
                <span
                  className='absolute left-1/2 -translate-x-1/2 -top-8
                                        whitespace-nowrap
                                        bg-black text-white text-sm px-2 py-1 rounded
                                        opacity-0 group-hover:opacity-100
                                        transition pointer-events-none'
                >
                  Comming soon..
                </span>
              )}
            </>
          ))}
        </div>
      )}
    </header>
  );
};

export default BCCHeaderMobile;
