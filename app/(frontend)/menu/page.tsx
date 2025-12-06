import Bounded from '@/components/Bounded';
import MenuCard from '@/components/MenuCard';
import SectionTitle from '@/components/SectionTitle';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_MENU_ITEMS_QUERY } from '@/sanity/lib/queries';

const MenuPage = async () => {
  const { data: menu } = await sanityFetch({ query: ALL_MENU_ITEMS_QUERY });

  return (
    <Bounded>
      <div className="flex flex-col gap-y-2">
        <p>Our Menu</p>
        <SectionTitle className="capitalize!">Taste Sensations</SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {menu.map((menu) => (
          <MenuCard key={menu.slug?.current} {...menu} />
        ))}
      </div>
    </Bounded>
  );
};

export default MenuPage;
