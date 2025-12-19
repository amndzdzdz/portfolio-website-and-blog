import { useLocation } from 'react-router-dom';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import EducationSection from '../../components/education/EducationSection';
import ExperienceSection from '../../components/experience/ExperienceSection';
import LandingPageHero from '../../components/hero/LandingPageHero';
import { useEffect } from 'react';

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [hash]);

  return (
    <>
      <LandingPageHero></LandingPageHero>
      <About></About>
      <ExperienceSection></ExperienceSection>
      <EducationSection></EducationSection>
      <Contact></Contact>
    </>
  );
}
