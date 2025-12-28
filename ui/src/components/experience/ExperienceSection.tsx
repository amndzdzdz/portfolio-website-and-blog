import roedlAndPartner from '../../assets/roedl__partner_logo.webp';
import vrBank from '../../assets/vrb.webp';
import type { InformationItemProps } from '../../types/InformationItemProps';
import ExperienceItem from './ExperienceItem';

const education: InformationItemProps[] = [
  {
    image: roedlAndPartner,
    uniName: 'Internship - Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \
    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et \
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem \
    ipsum dolor sit amet.',
  },
  {
    image: vrBank,
    uniName: 'Working Student - Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \
    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et \
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem \
    ipsum dolor sit amet.',
  },
  {
    image: vrBank,
    uniName: 'Internship - Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \
    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et \
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem \
    ipsum dolor sit amet.',
  },
];

export default function EducationSection() {
  return (
    <section
      id="education-section"
      className="
        bg-gray-50
       text-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 pt-6 w-full">
        <div
          className="
              flex flex-col lg:flex-row justify-center 
              lg:justify-between items-center
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
