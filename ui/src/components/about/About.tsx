import profile from "../../assets/joseph.webp";

export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6 w-full">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-full max-w-md rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
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
            A little bit about me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <br></br>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <br></br>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  );
}
