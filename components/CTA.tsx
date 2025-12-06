import { CTAProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';

const CTA = ({ className, children, url }: CTAProps) => {
  return (
    <Link
      href={url}
      className={clsx(
        'cursor-pointer hover:scale-[1.01] transition-transform duration-200 block border border-brand-black px-2 py-1 rounded-2xl',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CTA;
