'use client';

import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form';
import { Input } from './ui/input';
import SubmitButton from './SubmitButton';
import { useActionState } from 'react';
import { handleNewsletter } from '@/lib/action';
import clsx from 'clsx';

const initialFormState = {
  status: '',
  message: '',
};

const NAV_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Menu', url: '/menu' },
  { name: 'Shop', url: '/shop' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' },
];

const UTILITY_LINKS = [
  { name: 'Accessibility Statement', url: '/accessibility-statement' },
  { name: 'Privacy Policy', url: '/privacy-policy' },
  { name: 'Reservation Policy', url: '/reservation-policy' },
];

const Footer = () => {
  const [state, actionFunction] = useActionState(
    handleNewsletter,
    initialFormState,
  );

  return (
    <footer className="bg-brand-black text-brand-cream py-3 md:py-5 max-w-[1200px] lg:mx-auto px-3 md:px-5 grid md:grid-cols-2 md:gap-x-5 lg:gap-x-8 gap-y-5 md:gap-y-8">
      <div className="flex flex-col gap-y-3">
        <Link href="/">
          <Image src="/logo-white.svg" width={100} height={50} alt="" />
        </Link>
        <p className="text-fs-200 text-brand-cream/60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ea
          soluta dolorum nihil laboriosam in.
        </p>
      </div>

      <Form action={actionFunction} className="space-y-2">
        <h2 className="font-semibold">Subscribe to our Newsletter</h2>
        <div className="grid grid-cols-[1fr_auto] gap-x-1">
          <div>
            <label htmlFor="email" className="sr-only">
              Enter Your Email
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              autoComplete="email"
            />
          </div>

          <SubmitButton className="border bg-brand-black rounded-sm w-20" />

          {state.status === 'error' ? (
            <p className="text-red-500 italic text-fs-200 col-span-full">
              {state.message}
            </p>
          ) : null}

          {state.status === 'success' ? (
            <p className="text-green-400 italic text-fs-200 col-span-full">
              {state.message}
            </p>
          ) : null}
        </div>
      </Form>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={clsx('hover:underline underline-offset-2')}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-y-2">
          {UTILITY_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={clsx('hover:underline underline-offset-2')}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <address className="flex flex-col gap-y-2 text-right">
        <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
        <Link
          href="mailto:hello@espress0house.com"
          className="hover:underline underline-offset-2"
        >
          hello@espressohouse.com
        </Link>
        <Link
          href="tel:+702 555 0122"
          className="hover:underline underline-offset-2"
        >
          +702 555 0122
        </Link>
      </address>

      <div className="divider col-span-full bg-brand-cream" />

      <div className="flex flex-col md:flex-row md:justify-between items-center text-brand-cream/60 text-fs-200 col-span-full">
        <p className="">
          Copyright &copy; 2012-{new Date().getFullYear()} Espresso House & Co.
        </p>
        <p>Developed by Sai Say Noom Leng</p>
      </div>
    </footer>
  );
};

export default Footer;
