import { MenuCardProps } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const MenuCard = ({ className, ...props }: MenuCardProps) => {
  const { name, price, ingredients, mainImage } = props;
  const imgURL = mainImage?.asset?.url;

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 border-b border-brand-black/10 py-3 md:gap-x-5">
      <div>
        {imgURL ? (
          <Image
            src={urlFor(imgURL).auto('format').format('webp').url()}
            width={100}
            height={100}
            priority
            alt={mainImage?.alt as string}
            loading="eager"
            className="w-20 object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-3">
        <p className="font-semibold">{name}</p>
        <p className="text-fs-200">{ingredients}</p>
      </div>

      <div>{price && <p>{formatCurrency(price)}</p>}</div>
    </div>
  );
};

export default MenuCard;
