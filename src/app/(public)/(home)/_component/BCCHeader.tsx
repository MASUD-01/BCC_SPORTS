'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import BCCHeaderMobile from './BCCHeaderMobile';

const BCCHeader = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/', label: 'GALLERY' },
    { href: '/fans-tournament', label: 'FAN’S TOURNAMENT' },
    { type: 'image', src: '/bccImages/logo.jpg', alt: 'Star Icon' },
    { href: '/', label: 'ABOUT US' },
    { href: '/', label: 'PLAYER LIST' },
    { href: '/', label: 'CONTACT US' },
  ];

  return (
    <div>
      <header className='hidden md:block mt-4 container'>
        <div className='relative w-full h-20'>
          {/* SVG Shape */}
          <svg
            viewBox='0 0 1000 80'
            preserveAspectRatio='none'
            className='absolute top-0 left-0 w-full h-full'
          >
            <polygon points='0,0 1000,0 980,80 20,80' fill='white' stroke='black' strokeWidth='1' />
          </svg>

          {/* Content inside header */}
          <div className='absolute inset-0 flex items-center justify-between px-6'>
            <nav className='hidden md:flex items-center justify-between w-full gap-8'>
              {navLinks.map((link, index) =>
                link.type === 'image' ? (
                  <Image
                    key={index}
                    src={link.src}
                    alt={link.alt}
                    width={100}
                    height={30}
                    className='object-contain'
                  />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href || ''}
                    className={`text-lg font-bold transition ${
                      pathname === link.href
                        ? 'text-blue-900'
                        : 'text-blue-950 hover:text-[#E1E100]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      </header>

      <BCCHeaderMobile />
    </div>
  );
};

export default BCCHeader;
