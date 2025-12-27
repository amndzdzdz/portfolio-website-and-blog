import { Link } from 'react-router-dom';
import profile from '../../assets/john_doe.webp';

export default function LandingPageHero() {
  const handleClick = () => {
    const el = document.getElementById('about-section');
    el?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', '#about-section');
  };
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
        <div className="w-full sm:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hey, I'm John Doe
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="#about-section"
              onClick={handleClick}
              className="
                bg-white text-blue-700 font-semibold px-6 py-3 
                rounded-lg shadow-md hover:bg-blue-50 transition
              "
            >
              Get to know me
            </Link>
            <Link
              to={'/blog'}
              onClick={() => window.scrollTo(0, 0)}
              className="
                border border-white text-white font-semibold 
                px-6 py-3 rounded-lg hover:bg-white/10 transition
              "
            >
              My blog
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="App screenshot"
            className="w-50 md:w-120 rounded-full shadow-lg"
          />
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
