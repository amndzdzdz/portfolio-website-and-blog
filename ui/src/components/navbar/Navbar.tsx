export default function Navbar() {
  return (
    <>
      <div
        className="
          fixed top-0 left-0 
          w-full h-16 md:h-20
          bg-linear-to-r from-blue-400 to-blue-950
          rounded-b-lg blur-md opacity-25
          group-hover:opacity-100 transition duration-1000 group-hover:duration-200
          pointer-events-none z-0
      "
      ></div>
      <div
        className="
    grid grid-cols-1 md:grid-cols-2 gap-4
    top-0 fixed left-0 w-screen 
    bg-[#0f2a4f] text-white p-4
    "
      >
        <div className="hidden md:flex pl-4">
          <p
            className="
        relative inline-block text-white font-semibold px-3
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-0.5 after:w-full after:bg-current
        after:scale-x-0 after:origin-right
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100 hover:after:origin-left
        "
          >
            Joseph Dziri
          </p>
        </div>
        <div className="flex justify-evenly items-center">
          <a
            className="
        relative inline-block text-white font-semibold px-3
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-0.5 after:w-full after:bg-current
        after:scale-x-0 after:origin-right
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100 hover:after:origin-left
        "
          >
            Contact
          </a>
          <a
            className="
        relative inline-block text-white font-semibold px-3
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-0.5 after:w-full after:bg-current
        after:scale-x-0 after:origin-right
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100 hover:after:origin-left
        "
          >
            About me
          </a>
          <a
            className="
        relative inline-block text-white font-semibold px-3
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-0.5 after:w-full after:bg-current
        after:scale-x-0 after:origin-right
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100 hover:after:origin-left
        "
          >
            Blog
          </a>
        </div>
      </div>
    </>
  );
}
