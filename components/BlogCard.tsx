import { BlogCardProps } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ className, ...props }: BlogCardProps) => {
  const { title, slug, publishedAt, mainImage } = props;
  const imageURL = mainImage?.asset?.url;

  return (
    <Link
      href={`/blog/${slug?.current}`}
      className={clsx(
        'flex flex-col group gap-y-1 md:gap-y-2 max-w-[300px] md:max-w-[400px] shadow p-2',
        className,
      )}
    >
      <div className="overflow-hidden">
        {imageURL ? (
          <Image
            src={urlFor(imageURL).auto('format').format('webp').url()}
            alt={mainImage.alt as string}
            width={300}
            height={300}
            priority
            loading="eager"
            className="max-w-full object-cover"
          />
        ) : null}
      </div>

      {publishedAt ? (
        <p className="text-fs-200 font-medium text-brand-black/50">
          {formatDate(publishedAt)}
        </p>
      ) : null}

      <p className="font-semibold">{title}</p>
    </Link>
  );
};

export default BlogCard;
