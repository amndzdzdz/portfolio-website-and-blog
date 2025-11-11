import blog from "../../../assets/blog.webp";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="
        min-h-screen bg-linear-to-r from-blue-600 to-indigo-700
        text-white flex items-center py-24
      "
    >
      <div
        className="
          max-w-7xl mx-auto w-full px-6 flex 
          flex-col-reverse md:flex-row items-center gap-6
          "
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={blog}
            alt="App screenshot"
            className="w-50 md:w-120 rounded-full shadow-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Welcome to my blog
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <br />
          <p className="text-lg text-blue-100 mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#about-section"
              className="
                bg-white text-blue-700 font-semibold px-6 py-3 
                rounded-lg shadow-md hover:bg-blue-50 transition
              "
            >
              Start reading!
            </a>
          </div>
        </div>

        <div
          className="
            hidden sm:block absolute bottom-8 
            left-1/2 transform -translate-x-1/2
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
