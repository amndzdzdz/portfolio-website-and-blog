import type { NavbarElementProps } from '../../types/NavbarElementProps';
import { Link } from 'react-router-dom';

export default function NavbarElement(navbarElement: NavbarElementProps) {
  const handleClick = () => {
    const el = document.getElementById(navbarElement.section);
    el?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', navbarElement.to);
  };
  return (
    <Link
      to={navbarElement.to}
      onClick={handleClick}
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
      {navbarElement.text}
    </Link>
  );
}
