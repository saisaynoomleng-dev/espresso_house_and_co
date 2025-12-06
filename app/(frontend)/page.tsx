import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import CTA from '@/components/CTA';
import FAQs from '@/components/FAQs';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import TextMenuCard from '@/components/TextMenuCard';
import { sanityFetch } from '@/sanity/lib/live';
import {
  ALL_BLOGS_QUERY,
  ALL_MENU_ITEMS_QUERY,
  ALL_PRODUCTS_QUERY,
} from '@/sanity/lib/queries';
import clsx from 'clsx';
import Image from 'next/image';

const AVATARS = [
  { name: '1', url: '/1.jpg' },
  { name: '2', url: '/2.jpg' },
  { name: '3', url: '/3.jpg' },
  { name: '4', url: '/4.jpg' },
];

export default async function Home() {
  const { data: products } = await sanityFetch({ query: ALL_PRODUCTS_QUERY });
  const { data: menus } = await sanityFetch({ query: ALL_MENU_ITEMS_QUERY });
  const { data: blogs } = await sanityFetch({ query: ALL_BLOGS_QUERY });

  if (!products || products.length === 0) return null;

  const bestSellingProducts = products.slice(5, 11);

  return (
    <Bounded>
      <div className="flex flex-col gap-y-3 md:gap-y-5 bg-brand-black text-brand-white py-3 md:py-5 px-2 md:px-4 pb-5 md:pb-10">
        <div className="grid md:grid-cols-2">
          <h1 className="text-fs-500 md:text-fs-600 capitalize md:self-end">
            A coffee
          </h1>
          <h1 className="text-fs-500 md:text-fs-600 capitalize md:col-start-1 md:row-start-2 md:col-span-full">
            Lover&apos;s paradise
          </h1>
          <div className="hidden md:flex md:flex-col md:col-start-2 text-fs-200 space-y-2 text-end items-end">
            <p>
              A haven of exqusite flavors, crafted with passion and expertise
            </p>
            <div className="flex">
              {AVATARS.map((avatar, i) => (
                <Image
                  key={avatar.url}
                  src={avatar.url}
                  width={35}
                  height={35}
                  alt={avatar.name}
                  className={clsx(
                    'rounded-full border border-brand-white',
                    i > 0 && '-ml-3',
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/home-hero-mobile.jpg"
            alt=""
            width={560}
            height={560}
            className="rounded-[4rem] object-cover min-w-full md:hidden mx-auto"
          />

          <Image
            src="/home-hero-mobile.jpg"
            alt=""
            width={760}
            height={760}
            className="rounded-[4rem] object-cover min-w-full hidden md:block lg:hidden mx-auto"
          />

          <Image
            src="/home-hero.jpg"
            alt=""
            width={1000}
            height={1000}
            className="rounded-[4rem] object-cover min-w-full hidden lg:block mx-auto"
          />

          <div className="absolute -top-13 right-12 md:right-15 z-30">
            <Image
              src="/espresso_banner.svg"
              width={100}
              height={100}
              alt=""
              className="animate-spinner"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-5 pb-5 md:pb-10">
        <div className="space-y-2 text-center">
          <SectionTitle>best selling products</SectionTitle>
          <p>Loved by many for their exceptional quality and popularity</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-center">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.slug?.current} {...product} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-5 px-3 pb-5 md:pb-10">
        <SectionTitle className="col-span-full text-center">
          a journey in to espresso
        </SectionTitle>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="self-center flex-1">
            <Image
              src="/home-shop.jpg"
              alt=""
              width={500}
              height={500}
              className="object-cover mx-auto"
            />
          </div>

          <div className="flex flex-col gap-y-3 md:gap-y-5 text-fs-300 flex-1">
            <p>
              Where every cup of coffee is an invitation to savor a moment of
              pure delight. Enter our inviting space, filled with the enchanting
              aroma of freshly brewed coffee and the joyful hum of
              conversations.
            </p>
            <p>
              Together, we create a ripple effect that extends far beyond our
              organization, empowering individuals and communities to thrive and
              embrace a brighter future.
            </p>

            <CTA url="/shop" className="self-start">
              Shop Now
            </CTA>
          </div>
        </div>
      </div>

      <div className="space-y-3 pb-5 md:pb-10">
        <div className="flex flex-col text-center">
          <SectionTitle>our menu</SectionTitle>
          <p>Discover a menu to satisfy every craving</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-5 md:gap-x-8 gap-y-3">
          {menus.slice(0, 8).map((menu) => (
            <TextMenuCard key={menu.slug?.current} {...menu} />
          ))}
        </div>
      </div>

      <div className="space-y-3 md:space-y-5 pb-5 md:pb-10">
        <div className="space-y-2 text-center">
          <SectionTitle>latest products</SectionTitle>
          <p>Newest additions your source for trendsetting products</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center justify-center">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.slug?.current} {...product} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-5 pb-5 md:pb-10">
        <div className="space-y-2 text-center">
          <SectionTitle>Latest Blogs</SectionTitle>
          <p>
            Our Blog Dive into a world of coffee inspiration, tips, and stories
          </p>

          <div className="grid md:grid-cols-3 gap-3 items-center justify-center">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug?.current} {...blog} />
            ))}
          </div>
        </div>
      </div>

      <FAQs />
    </Bounded>
  );
}
