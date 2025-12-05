import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import FAQs from '@/components/FAQs';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_BLOGS_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
  return (
    <Bounded>
      <Button>Click Me</Button>
    </Bounded>
  );
}
