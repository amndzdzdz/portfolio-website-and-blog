import { Link } from 'react-router-dom';

export default function Select() {
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
          flex-col-reverse items-center gap-6
          "
      >
        <div className="flex justify-center gap-4">
          <Link
            to={'/modify-post'}
            className="
                bg-white text-blue-700 font-semibold px-6 py-3 
                rounded-lg shadow-md hover:bg-blue-50 transition
              "
          >
            Update/Delete Blog Post
          </Link>
          <Link
            to={'/create-post'}
            className="
                border border-white text-white font-semibold 
                px-6 py-3 rounded-lg hover:bg-white/10 transition
              "
          >
            Create new Blog Post
          </Link>
        </div>
      </div>
    </section>
  );
}
