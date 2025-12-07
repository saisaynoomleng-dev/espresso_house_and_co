import BlogCard from '@/components/BlogCard';
import Bounded from '@/components/Bounded';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_BLOGS_QUERY } from '@/sanity/lib/queries';

const BlogPage = async () => {
  const { data: blogs } = await sanityFetch({ query: ALL_BLOGS_QUERY });

  return (
    <Bounded>
      <div className="space-y-2 font-sora">
        <p>Our Blog</p>
        <h2 className="font-medium text-fs-500">Latest News</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog?.slug?.current} {...blog} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default BlogPage;
