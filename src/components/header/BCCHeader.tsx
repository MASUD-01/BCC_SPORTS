'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const BCCHeader = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/fans-tournament', label: 'FAN’S TOURNAMENT' },
    { type: 'image', src: '/bccImages/logo.jpg', alt: 'Star Icon' }, // ⭐ Added image here
    { href: '/about-us', label: 'ABOUT US' },
    { href: '/player-list', label: 'PLAYER LIST' },
    { href: '/contact-us', label: 'CONTACT US' },
  ];

  return (
    <header className='flex justify-center py-4 w-full'>
      <div className='bg-white clip-div  h-20 md:h-20 w-full rounded-[10px] shadow-[inset_2px_2px_0px_0px_rgba(113,133,2,0.25)] border border-neutral-200 flex items-center justify-between px-6 md:px-10'>
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
                  pathname === link.href ? 'text-blue-900' : 'text-blue-950 hover:text-[#E1E100]'
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <style jsx>{`
          .clip-div {
            clip-path: polygon(0 0, 100% 0, 98% 100%, 2% 100%);
          }
        `}</style>
      </div>
    </header>
  );
};

export default BCCHeader;
