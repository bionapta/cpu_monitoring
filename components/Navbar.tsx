'use client';

import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export function Navbar({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
    },
    {
      href: `/presentation`,
      label: 'Presentation',
      active: pathname === `/presentation`,
    },
    {
      href: `/about`,
      label: 'About',
      active: pathname === `/about`,
    },
    {
      href: `/contact`,
      label: 'Contact Us',
      active: pathname === `/contact`,
    },
    {
      href: `/api-docs`,
      label: 'API Docs',
      active: pathname === `/api-docs`,
    },
  ];

  return (
    <nav className={cn('fixed-navbar bg-gray-900 p-4 flex-wrap', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl focus:outline-none"
      >
        ☰
      </button>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-3xl font-bold hover:transition-all duration-500 dashboard-title"
        >
          CPU Monitor Dashboard
        </Link>
        <div className="logo-container">
          <Link href="https://scada.co.id/">
            <Image
              src="/images/spc.png"
              alt="PT SPC Logo"
              width={200}
              height={100}
              className="h-8"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4 justify-between">
          <div className="flex-grow">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-white mx-2 hover:text-yellow-300 transition-all duration-500 hover-underline-animation',
                  route.active ? 'border-b-2 border-yellow-300' : ''
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
