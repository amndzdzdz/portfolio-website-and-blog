export default function Navbar() {
  return (
    <div
      className="
    grid grid-cols-1 md:grid-cols-2 gap-4
    top-0 fixed left-0 w-screen 
    bg-[#0f2a4f] text-white p-4
    "
    >
      <div className="hidden md:flex pl-4">Joseph Dziri</div>
      <div className="flex justify-evenly items-center">
        <a className="col-span-1 underline underline-offset-3 px-3">Contact</a>
        <a className="col-span-1 underline underline-offset-3 px-3">About me</a>
        <a className="col-span-1 underline underline-offset-3px-3">Blog</a>
      </div>
    </div>
  );
}
