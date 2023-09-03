import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="text-center text-xl">
      <div className="text-white font-antique w-full p-4 bg-neutral-900 opacity-80 fixed top-0 z-10">
        <HashLink to="#home" smooth className="mr-10">
          Home
        </HashLink>
        <HashLink
          to="#about"
          smooth
          className="mr-10"
          scroll={(el) => scrollWithOffset(el, 100)}
        >
          About
        </HashLink>
        <HashLink
          to="#skills"
          smooth
          className="mr-10"
          scroll={(el) => scrollWithOffset(el, 80)}
        >
          Skills
        </HashLink>
        <HashLink
          to="#projects"
          smooth
          className="mr-10"
          scroll={(el) => scrollWithOffset(el, 80)}
        >
          Projects
        </HashLink>
        <HashLink
          to="#contact"
          smooth
          className="mr-10"
          scroll={(el) => scrollWithOffset(el, 80)}
        >
          Contact
        </HashLink>
        <a
          href="https://eclectic-c5aa0.web.app/category/all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
