import img from "../../../../assets/blog.webp";

export default function BlogPreview() {
  return (
    <div id="content" className="flex flex-col items-center">
      <div
        className="
            bg-white w-9/10 md:w-2/3 min-h-70 shadow-lg mt-10 
            rounded-xl flex flex-col md:flex-row"
      >
        <div
          className="
                w-full md:w-1/3 h-64 md:h-auto overflow-hidden 
                rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        >
          <img
            src={img}
            alt="Blog post"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-2/3 p-5 flex flex-col justify-between">
          <span
            className="
                inline-block bg-blue-200 text-blue-800 
                text-xs px-2 py-1 rounded-full mb-3 w-fit
                "
          >
            Technology
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
            This is going to be the title!
          </h1>
          <p className="text-gray-600 mb-5">
            This is a short caption describing the blog post in 2-3 lines. It
            gives a brief overview of what the reader can expect.
          </p>
          <a
            href="#read-more"
            className="
                border border-blue-600 text-blue-600 font-semibold 
                px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white 
                transition w-fit mt-auto
            "
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
