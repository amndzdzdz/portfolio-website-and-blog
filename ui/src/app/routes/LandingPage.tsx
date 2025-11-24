import { useLocation } from 'react-router-dom';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import EducationSection from '../../components/education/EducationSection';
import ExperienceSection from '../../components/experience/ExperienceSection';
import LandingPageHero from '../../components/hero/LandingPageHero';
import Navbar from '../../components/navbar/Navbar';
import { useEffect } from 'react';

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Navbar></Navbar>
      <LandingPageHero></LandingPageHero>
      <About></About>
      <ExperienceSection></ExperienceSection>
      <EducationSection></EducationSection>
      <Contact></Contact>
    </>
  );
}
