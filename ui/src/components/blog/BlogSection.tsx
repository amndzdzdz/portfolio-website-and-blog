import BlogPreview from "./BlogPreview";
import image from "../../assets/blog.webp";

const blogPosts = [
  {
    title:
      "The Future of Artificial Intelligence in 2026 The Future of Artificial Intelligence in 2026 The Future of Artificial Intelligence in 2026",
    caption:
      "Explore the latest trends and breakthroughs in AI technology, and how they will shape industries in the coming year.",
    category: "Technology",
    image: image,
    id: "asdf",
  },
  {
    title: "Sustainable Living: Small Steps for Big Impact",
    caption:
      "Discover practical tips for reducing your carbon footprint and living a more sustainable lifestyle at home.",
    category: "Environment",
    image: image,
    id: "asdf",
  },
  {
    title: "Mastering React Hooks: A Beginner’s Guide",
    caption:
      "Learn how to use React Hooks effectively to manage state and side effects in your applications. your applications your applications your applications.your applications.your applications.your applications. your applications.your applications.your applications.",
    category: "Development",
    image: image,
    id: "asdf",
  },
  {
    title: "The Art of Minimalist Design in 2025",
    caption:
      "Find out why minimalism continues to dominate design trends and how to apply it to your projects.",
    category: "Design",
    image: image,
    id: "asdf",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog-section"
      className="
        min-h-screen bg-gray-50 md:mt-12 text-gray-800"
    >
      <BlogPreview {...blogPosts[0]}></BlogPreview>
      <BlogPreview {...blogPosts[1]}></BlogPreview>
      <BlogPreview {...blogPosts[2]}></BlogPreview>
      <BlogPreview {...blogPosts[3]}></BlogPreview>
    </section>
  );
}
