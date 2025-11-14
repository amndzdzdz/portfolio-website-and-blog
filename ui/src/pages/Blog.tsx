import BlogSection from "../features/blog/components/blogSection/BlogSection";
import Hero from "../features/blog/components/hero/Hero";
import Navbar from "../features/navbar/components/Navbar";

export default function Blog() {
  console.log("Landing page loaded");
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <BlogSection></BlogSection>
    </>
  );
}
