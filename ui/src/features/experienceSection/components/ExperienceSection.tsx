import roedl_partner from "../../../assets/roedl__partner_logo.webp";
import vrb from "../../../assets/vrb.webp";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    image: roedl_partner,
    title: "Internship - Audit",
    date: "Sept 2025 - present",
    bulletpoints: ["I did x", "then I did y", "THen I did z"],
  },
  {
    image: vrb,
    title: "Working Student - Sales Management",
    date: "Dec 2023 - July 2024",
    bulletpoints: ["I did x", "then I did y", "THen I did z"],
  },
  {
    image: vrb,
    title: "Internship - Corporate Client Advisor",
    date: "Aug 2023 - Sept 2023",
    bulletpoints: ["I did x", "then I did y", "THen I did z"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="
        bg-gray-50 dark:bg-gray-900
        text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            flex flex-col md:flex-row 
            items-center justify-between gap-8"
        >
          <h1
            className="
              text-4xl md:text-6xl font-extrabold mb-6 leading-tight
              relative inline-block px-3 md:py-2
              after:content-[''] after:absolute after:left-0 after:bottom-0
              after:h-1 after:w-full after:bg-current
              after:scale-x-0 after:origin-right
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100 hover:after:origin-left
          "
          >
            My work experience
          </h1>
        </div>
        <p
          className="
            text-lg mt-5 text-gray-600 dark:text-gray-300 leading-relaxed
        "
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <ExperienceItem {...experiences[0]}></ExperienceItem>
        <ExperienceItem {...experiences[1]}></ExperienceItem>
        <ExperienceItem {...experiences[2]}></ExperienceItem>
      </div>
    </section>
  );
}
