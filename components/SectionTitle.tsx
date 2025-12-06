import clsx from 'clsx';

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={clsx('font-sora md:text-fs-500 uppercase', className)}>
      {children}
    </h3>
  );
};

export default SectionTitle;
