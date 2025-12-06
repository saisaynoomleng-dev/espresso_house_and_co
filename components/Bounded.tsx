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
        'space-y-10 md:space-y-16 lg:space-y-20 px-3 py-4 md:px-5 lg:px-2 max-w-[1200px] lg:mx-auto pb-10',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
