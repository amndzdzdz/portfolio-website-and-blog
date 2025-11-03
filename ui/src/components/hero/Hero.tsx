import josephImg from "../../assets/joseph.webp";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">
      <section className="min-h-screen bg-linear-to-r from-blue-600 to-indigo-700 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-12 w-full">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hey, I'm Joseph Dziri
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              I have a passion for economics. Get to know me and my previous
              experience. Check out my blog too!
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#get-started"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
              >
                Get to know me
              </a>
              <a
                href="#learn-more"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                My blog
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={josephImg}
              alt="App screenshot"
              className="sm:w-50 md:w-120 rounded-full shadow-lg"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
    </section>
  );
}
