import { MemberCardProps } from '@/lib/types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

const MemberCard = ({ className, ...props }: MemberCardProps) => {
  const { name, role, mainImage } = props;
  const imgURL = mainImage?.asset?.url;

  return (
    <div className="shadow flex flex-col gap-y-2 p-2">
      <div>
        {imgURL ? (
          <Image
            src={urlFor(imgURL).auto('format').format('webp').url()}
            width={300}
            height={300}
            alt={mainImage.alt as string}
            priority
            loading="eager"
            className="object-cover min-w-full"
          />
        ) : null}
      </div>

      <p className="font-sora">{name}</p>
      <p className="text-fs-100">{role}</p>
    </div>
  );
};

export default MemberCard;
