import profile from '../../assets/john_doe.webp';

export default function About() {
  return (
    <section
      id="about-section"
      className="
        bg-gray-50 text-gray-800 
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
              A little bit about me
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div
            className="
        flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0
    "
          >
            <div className="flex-1 pr-0 md:pr-8 flex justify-center md:justify-end">
              <div className="flex justify-center w-full md:w-4/4">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-2/3 max-w-md md:w-full rounded-full shadow-lg object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start pl-0 md:pl-8">
              <div className="w-full text-center md:text-left">
                <p
                  className="
                    text-lg text-gray-600 dark:text-gray-300 
                    leading-relaxed text-justify"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <br></br>
                <p
                  className="
                    text-lg text-gray-600 dark:text-gray-300 
                    leading-relaxed text-justify"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
                <br></br>
                <p
                  className="
                text-lg text-gray-600 dark:text-gray-300 
                leading-relaxed text-justify"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
