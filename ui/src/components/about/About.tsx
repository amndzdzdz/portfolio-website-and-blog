import profile from "../../assets/joseph.webp";

export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Left: Image (mirrors Hero image) */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-full max-w-md rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
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
