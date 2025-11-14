import About from "../features/aboutSection/components/About";
import Contact from "../features/contactSection/components/Contact";
import EducationSection from "../features/educationSection/components/EducationSection";
import ExperienceSection from "../features/experienceSection/components/ExperienceSection";
import Hero from "../features/heroSection/components/Hero";
import Navbar from "../features/navbar/components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <ExperienceSection></ExperienceSection>
      <EducationSection></EducationSection>
      <Contact></Contact>
    </>
  );
}
