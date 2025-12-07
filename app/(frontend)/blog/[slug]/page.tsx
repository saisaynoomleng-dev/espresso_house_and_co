import Bounded from '@/components/Bounded';
import { formatDate } from '@/lib/utils';
import { MyPortableTextComponent } from '@/sanity/components/myPortableTextComponents';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { BLOG_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaCalendar, FaClock } from 'react-icons/fa';

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: blog } = await sanityFetch({
    query: BLOG_QUERY,
    params: await params,
  });

  if (!blog) notFound();

  return (
    <Bounded>
      <div>
        <Link href="/blog" className="flex items-center gap-x-1">
          <FaArrowLeft /> <span>Back to All Blogs</span>
        </Link>
      </div>
      <div className="grid gap-x-2 grid-cols-[1fr_auto] items-baseline-last">
        <h2 className="font-medium text-fs-500">{blog.title}</h2>
        <div className="flex gap-x-2">
          {blog?.publishedAt && (
            <p className="flex gap-x-1 items-center">
              <FaCalendar /> <span>{formatDate(blog.publishedAt)}</span>
            </p>
          )}
          {blog?.duration && (
            <p className="flex gap-x-1 items-center">
              <FaClock />
              <span>{blog.duration} mins</span>
            </p>
          )}
        </div>
      </div>

      <div>
        {blog?.mainImage?.asset?.url ? (
          <Image
            src={urlFor(blog.mainImage.asset.url).format('webp').url()}
            alt={blog.mainImage.alt || ''}
            width={1000}
            height={1000}
            priority
            loading="eager"
            className="min-w-full object-cover"
          />
        ) : null}
      </div>

      <div className="prose-sm md:prose-xl">
        {blog?.desc && (
          <PortableText
            value={blog.desc}
            components={MyPortableTextComponent}
          />
        )}
      </div>
    </Bounded>
  );
};

export default BlogDetail;
