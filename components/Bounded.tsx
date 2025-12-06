import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  className,
  as: Comp = 'section',
  children,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'space-y-5 md:space-y-10 lg:space-y-12 px-3 py-4 md:px-5 lg:px-2 max-w-[1200px] lg:mx-auto divide-y divide-brand-black/20 pb-10',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
