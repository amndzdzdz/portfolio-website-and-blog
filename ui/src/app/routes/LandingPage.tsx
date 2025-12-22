import { useLocation } from 'react-router-dom';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import EducationSection from '../../components/education/EducationSection';
import ExperienceSection from '../../components/experience/ExperienceSection';
import LandingPageHero from '../../components/hero/LandingPageHero';
import { useEffect } from 'react';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
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
