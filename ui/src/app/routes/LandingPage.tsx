import { useLocation } from 'react-router-dom';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import EducationSection from '../../components/education/EducationSection';
import ExperienceSection from '../../components/experience/ExperienceSection';
import LandingPageHero from '../../components/hero/LandingPageHero';

export default function LandingPage() {
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
