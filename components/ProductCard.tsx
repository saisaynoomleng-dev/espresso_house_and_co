import { ProductTypeProps } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ className, ...props }: ProductTypeProps) => {
  const { name, slug, price, mainImage } = props;
  return (
    <Link
      href={`/shop/${slug?.current}`}
      className={clsx(
        'flex flex-col max-w-[300px] md:max-w-[400px] group p-3 md:p-5',
        className,
      )}
    >
      <div className="overflow-hidden relative bg-brand-khaki/50 h-[200px] p-5">
        {mainImage?.asset?.url ? (
          <Image
            src={urlFor(mainImage.asset.url)
              .auto('format')
              .format('webp')
              .url()}
            fill={true}
            priority
            loading="eager"
            alt={mainImage.alt as string}
            className="object-contain h-fit group-hover:scale-[1.1]"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-1">
        <p className="font-semibold capitalize">{name}</p>
        {price && <p>{formatCurrency(price)}</p>}
      </div>
    </Link>
  );
};

export default ProductCard;
