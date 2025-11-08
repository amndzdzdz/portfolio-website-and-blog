import NavbarElement from "./NavbarElement";

export default function Navbar() {
  return (
    <>
      <div
        className="
          fixed top-0 left-0 
          w-full h-16 md:h-20
          bg-linear-to-r from-white to-blue-950
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
          <NavbarElement text="Joseph Dziri"></NavbarElement>
        </div>
        <div className="flex justify-evenly items-center">
          <NavbarElement text="Contact"></NavbarElement>
          <NavbarElement text="About me"></NavbarElement>
          <NavbarElement text="Blog"></NavbarElement>
        </div>
      </div>
    </>
  );
}
