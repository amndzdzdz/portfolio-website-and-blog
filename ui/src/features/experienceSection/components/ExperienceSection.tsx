import roedlAndPartner from "../../../assets/roedl__partner_logo.webp";
import vrBank from "../../../assets/vrb.webp";
import type { InformationItem } from "../../../types/InformationItem";
import ExperienceItem from "./ExperienceItem";

const education: InformationItem[] = [
  {
    image: roedlAndPartner,
    uniName: "Internship - Audit",
    text: "I earned my foundational education at the University of Mannheim, \
    where I gained a strong grounding in economics and quantitative methods. \
     The university’s rigorous academic environment and diverse student \
     community helped me develop analytical thinking and problem-solving \
     skills that are essential in today’s business world.",
  },
  {
    image: vrBank,
    uniName: "Working Student - Data Analyst",
    text: "I further enhanced my international perspective at EDHEC \
    Business School, known for its expertise in finance and global business. \
    Studying there allowed me to engage with a multicultural student body, \
    deepen my knowledge of international markets, and develop a strategic \
    mindset for tackling complex business challenges.",
  },
  {
    image: vrBank,
    uniName: "Internship - Client Advisory",
    text: "I completed my bachelor’s degree in Economics at the Technical \
    University of Ingolstadt, located in the heart of Bavaria. The university \
    is known for its strong focus on innovation, technology, and practical \
    learning, providing students with a dynamic environment that connects \
    theory with real-world application.",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education-section"
      className="
        min-h-screen bg-gray-50 
        dark:bg-gray-900 text-gray-800 mt-12 sm:mt-0 dark:text-gray-100
      "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div
          className="
              flex flex-col sm:flex-row justify-center 
              sm:justify-between items-center mb-12
        "
        >
          <div className="flex-1 flex justify-center">
            <h1
              className="
                text-4xl md:text-6xl font-extrabold mb-6 leading-tight
                relative inline-block px-3 py-2
                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-1 after:w-full after:bg-current
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300 after:ease-out
                hover:after:scale-x-100
            "
            >
              My work experience
            </h1>
          </div>
          <div className="flex-1 hidden sm:block"></div>
        </div>
        <div className="flex flex-col gap-10">
          <ExperienceItem {...education[0]} />
          <ExperienceItem {...education[1]} />
          <ExperienceItem {...education[2]} />
        </div>
      </div>
    </section>
  );
}
