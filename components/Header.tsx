'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoBagOutline } from 'react-icons/io5';
import { Button } from './ui/button';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Menu', url: '/menu' },
  { name: 'Shop', url: '/shop' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="max-w-[1200px] lg:mx-auto py-2 md:py-4 px-3 md:px-5 lg:px-2 font-sora relative h-12 md:h-20 z-50 ">
      {/* desktop nav */}
      <div className="hidden md:grid grid-cols-[1fr_200px_1fr] items-center">
        <nav
          role="navigation"
          className={clsx('flex gap-x-3 items-center text-fs-200')}
          aria-label="main menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={clsx(
                '',
                pathname === link.url ? 'font-semibold' : 'font-normal',
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="place-self-center">
          <Link href="/">
            <Image src="/logo.svg" width={100} height={50} alt="" />
          </Link>
        </div>

        <div className="flex gap-x-2 items-center justify-end">
          <div>
            <Link href="/cart">
              <IoBagOutline size={25} />
            </Link>
          </div>
          <div>
            <Link
              href="/reservation"
              className="uppercase text-fs-200 border border-brand-black px-3 py-2 font-semibold rounded-2xl"
            >
              Book a table
            </Link>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className="flex justify-between items-center md:hidden h-[5vh]">
        <div className="relative z-50">
          <Link href="/">
            <Image src="/logo.svg" width={100} height={50} alt="" />
          </Link>
        </div>

        <div className="flex gap-x-2">
          <div className="relative z-50">
            <Link href="/cart">
              <IoBagOutline size={20} />
            </Link>
          </div>

          <div>
            <button
              onClick={() => {
                setNavOpen((prevOpen) => !prevOpen);
              }}
              className={clsx(
                'relative z-50 w-5 h-0.5 rounded-2xl bg-brand-black/80 before:w-5  before:rounded-sm before:bottom-2 before:right-0 after:absolute after:bg-brand-black after:w-5 after:h-0.5 after:bottom-1 after:right-0 after:rounded-sm before:h-0.5 before:bg-brand-black before:absolute transition-all duration-200',
                navOpen
                  ? 'rotate-45 before:hidden after:rotate-90 after:bottom-[0.5px]  bottom-1'
                  : '',
              )}
              aria-label="toggle main menu"
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
            />
            <nav
              id="mobile-nav"
              role="navigation"
              aria-label="Main Menu"
              className={clsx(
                'flex flex-col fixed inset-0 top-12 bg-brand-cream gap-y-5 items-center bottom-[55vh] px-2 border-y border-brand-black/20 py-3 transition-all duration-400 shadow-2xl',
                navOpen ? 'translate-x-0' : 'translate-x-full',
              )}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  onClick={() => {
                    setNavOpen(false);
                  }}
                  key={link.url}
                  href={link.url}
                  className={clsx(
                    '',
                    pathname === link.url ? 'font-semibold' : 'font-normal',
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="w-full">
                <Link href="/reservation" className="uppercase text-fs-200">
                  <Button className="px-3 py-2 font-semibold rounded-2xl w-full bg-transparent border border-brand-black text-brand-black">
                    Book a table
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
