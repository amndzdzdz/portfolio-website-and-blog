import edhec from '../../assets/edhec.webp';
import thi from '../../assets/thi.webp';
import mannheim from '../../assets/uni_mannheim.webp';
import type { InformationItemProps } from '../../types/InformationItemProps';
import EducationSectionItem from './EducationSectionItem';

const education: InformationItemProps[] = [
  {
    image: mannheim,
    uniName: 'University of Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \
    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et \
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem \
    ipsum dolor sit amet  consetetur sadipscing elitr, sed diam nonumy eirmod \
    tempor invidunt ut.',
  },
  {
    image: edhec,
    uniName: 'Lorem Ipsum Business School',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \
    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et \
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem \
    ipsum dolor sit amet  consetetur sadipscing elitr, sed diam nonumy eirmod \
    tempor invidunt ut.',
  },
  {
    image: thi,
    uniName: 'Technical University of Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam \
    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et \
    ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem \
    ipsum dolor sit amet  consetetur sadipscing elitr, sed diam nonumy eirmod \
    tempor invidunt ut.',
  },
];

export default function EducationSection() {
  return (
    <section
      id="education-section"
      className="
       bg-gray-50 pb-12 text-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 pt-6 w-full">
        <div
          className="
              flex flex-col lg:flex-row justify-center 
              lg:justify-between items-center
        "
        >
          <div className="flex-1 hidden lg:block"></div>
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
              My academic record
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <EducationSectionItem {...education[0]} />
          <EducationSectionItem {...education[1]} />
          <EducationSectionItem {...education[2]} />
        </div>
      </div>
    </section>
  );
}
