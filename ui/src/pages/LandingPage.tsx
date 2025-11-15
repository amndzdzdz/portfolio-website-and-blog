import { useLocation } from "react-router-dom";
import About from "../features/aboutSection/components/About";
import Contact from "../features/contactSection/components/Contact";
import EducationSection from "../features/educationSection/components/EducationSection";
import ExperienceSection from "../features/experienceSection/components/ExperienceSection";
import Hero from "../features/heroSection/components/Hero";
import Navbar from "../features/navbar/components/Navbar";
import { useEffect } from "react";

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

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
