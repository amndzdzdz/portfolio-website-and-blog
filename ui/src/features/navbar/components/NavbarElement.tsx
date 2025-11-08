export default function NavbarElement({ text }: { text: string }) {
  return (
    <a
      className="
        relative inline-block text-white font-semibold px-3 md:py-2
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-0.5 after:w-full after:bg-current
        after:scale-x-0 after:origin-right
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100 hover:after:origin-left
        hover:cursor-pointer
        "
    >
      {text}
    </a>
  );
}
