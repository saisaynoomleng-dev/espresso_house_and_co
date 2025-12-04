import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/sanity/lib/live';

export default async function Home() {
  // const { data: products } = await sanityFetch({ query: ALL_PRODUCTS_QUERY });

  return (
    <div>
      <Button>Click Me</Button>

      <div>
        {/* {products.map((product) => (
          <ProductCard key={product.slug}
        ))} */}
      </div>
    </div>
  );
}
