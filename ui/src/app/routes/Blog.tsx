import BlogSection from '../../components/blog/BlogSection';
import Contact from '../../components/contact/Contact';
import BlogHero from '../../components/hero/BlogHero';
import Navbar from '../../components/navbar/Navbar';

export default function Blog() {
  return (
    <>
      <Navbar></Navbar>
      <BlogHero></BlogHero>
      <BlogSection></BlogSection>
      <Contact></Contact>
    </>
  );
}
