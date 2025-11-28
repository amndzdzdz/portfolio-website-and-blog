import BlogPreview from './BlogPreview';
import { useEffect, useRef, useState } from 'react';
import { getBlogPostPreviews } from '../../app/api/blogPostApi';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function BlogSection() {
  const [blogPostPreviews, setBlogPostPreviews] = useState<any>([]);
  const [after, setAfter] = useState<string | undefined>(undefined);
  const [hasMore, setHasMore] = useState(true);
  const limit = 6;
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      initialFetch();
      loadBlogPostPreviews();
    }
  }, []);

  async function initialFetch() {
    try {
      const initialDate = new Date().toISOString();
      const blogPosts = await getBlogPostPreviews(limit, initialDate);
      const newBlogs = blogPosts['blogPosts'];
      const nextAfter = blogPosts['furthestDate'];
      if (newBlogs.length < limit) {
        setHasMore(false);
      }
      setBlogPostPreviews((prev: any) => [...prev, ...newBlogs]);
      setAfter(nextAfter);
    } catch (err) {
      console.log('An error occured: ' + err);
    }
  }

  async function loadBlogPostPreviews() {
    if (after) {
      try {
        const blogPosts = await getBlogPostPreviews(limit, after);
        const newBlogs = blogPosts['blogPosts'];
        const nextAfter = blogPosts['furthestDate'];
        if (newBlogs.length < limit) {
          setHasMore(false);
        }
        setBlogPostPreviews((prev: any) => [...prev, ...newBlogs]);
        setAfter(nextAfter);
      } catch (err) {
        console.log('An error occured: ' + err);
      }
    }
  }

  return (
    <section
      id="blog-section"
      className="
        min-h-screen bg-gray-50 pb-12 md:pt-6 text-gray-800"
    >
      <InfiniteScroll
        dataLength={blogPostPreviews.length}
        next={loadBlogPostPreviews}
        hasMore={hasMore}
        loader={<p></p>}
        endMessage={<p></p>}
      >
        {blogPostPreviews.map((blogPost: any) => {
          return <BlogPreview key={blogPost._id} {...blogPost}></BlogPreview>;
        })}
      </InfiniteScroll>
    </section>
  );
}
