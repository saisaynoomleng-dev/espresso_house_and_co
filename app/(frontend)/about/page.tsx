import Bounded from '@/components/Bounded';
import MemberCard from '@/components/MemberCard';
import SectionTitle from '@/components/SectionTitle';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_TEAM_MEMBERS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const INNOVATIONS = [
  'A future of Growth and Exploration',
  'Supporting Local Communities and Framers',
  'Promoting Wellness and Well-being',
  'Embracing Sustainability and Ethical Sourcing',
];

const AboutPage = async () => {
  const { data: members } = await sanityFetch({
    query: ALL_TEAM_MEMBERS_QUERY,
  });

  return (
    <Bounded>
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <p>Our Story</p>
        <h2 className="font-sora text-fs-400 md:text-fs-500">About Espresso</h2>
        <div>
          <Image
            src="/about-hero-mobile.jpg"
            alt=""
            width={560}
            height={560}
            priority
            className="object-cover min-w-full md:hidden"
          />

          <Image
            src="/about-hero-tablet.jpg"
            alt=""
            width={750}
            height={750}
            priority
            className="object-cover min-w-full hidden lg:hidden md:block"
          />

          <Image
            src="/about-hero-desktop.jpg"
            alt=""
            width={1000}
            height={1000}
            priority
            className="object-cover min-w-full hidden lg:block"
          />
        </div>

        <div className="grid md:grid-cols-2 justify-between gap-y-2">
          <SectionTitle className="capitalize!">
            savor the essence of serenity in every cup
          </SectionTitle>
          <p>
            Experience pure tranquility with each sip, as our carefully crafted
            brews soothe your senses and elevate your ritual to new heights.
            From the first aroma to the last drop, let the harmonious flavors
            envelop you in a moment of serenity and bliss.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <Image
            src="/about-mission.jpg"
            alt=""
            width={800}
            height={800}
            className="min-w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-y-3 md:justify-center">
          <SectionTitle className="text-fs-400 capitalize!">
            Our Mission
          </SectionTitle>
          <p>
            Our mission is to ignite positive transformations by driving
            innovation, fostering inclusivity, and making a lasting impact on
            the lives we touch.
          </p>
          <p>
            Together, we create a ripple effect that extends far beyond our
            organization, empowering individuals and communities to thrive and
            embrace a brighter future.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 flex flex-col gap-y-3 md:justify-center">
          <SectionTitle className="text-fs-400 capitalize!">
            Empowering Fair Trade
          </SectionTitle>

          <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 text-fs-200">
            <p>
              <span className="text-fs-400 block">30+</span>
              Beverages Varieties
            </p>
            <p>
              Implement sustainable practices and demonstrating your commitment
              to environmental responsibility.
            </p>

            <div className="divider col-span-full bg-brand-black/10" />

            <p>
              <span className="text-fs-400 block">100%</span>
              Quality Beans
            </p>
            <p>
              Our passion for excellence begins with sourcing the finest beans
              from around the world.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="/about-fair-trade.jpg"
            alt=""
            width={800}
            height={800}
            className="min-w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <Image
            src="/about-innovating.jpg"
            alt=""
            width={800}
            height={800}
            className="min-w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-y-3 md:justify-center">
          <SectionTitle className="text-fs-400 capitalize!">
            Innovating with Espresso
          </SectionTitle>
          <ul className="pl-10 space-y-2">
            {INNOVATIONS.map((text, i) => (
              <li
                key={i}
                className="relative before:content-['✓'] before:absolute before:-left-6"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <SectionTitle>Meet our team</SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {members.map((member) => (
            <MemberCard key={member.slug?.current} {...member} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AboutPage;
