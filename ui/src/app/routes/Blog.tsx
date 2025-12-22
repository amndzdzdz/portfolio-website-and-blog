import { useLocation } from 'react-router-dom';
import BlogSection from '../../components/blog/BlogSection';
import Contact from '../../components/contact/Contact';
import BlogHero from '../../components/hero/BlogHero';
import Navbar from '../../components/navbar/Navbar';
import { useEffect } from 'react';

export default function Blog() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <>
      <Navbar></Navbar>
      <BlogHero></BlogHero>
      <BlogSection></BlogSection>
      <Contact></Contact>
    </>
  );
}
