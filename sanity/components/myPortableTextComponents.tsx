import { PortableTextComponents } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '../lib/image';

export const MyPortableTextComponent: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          src={urlFor(props.value).format('webp').url()}
          alt={props.value.alt}
          width={600}
          height={400}
          priority
          className="object-cover mx-auto rounded-sm"
        />
      ) : null,
  },
};
