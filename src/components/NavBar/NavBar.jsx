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
    <nav className="text-center text-lg lg:text-xl font-playfair">
      <div className="text-white w-full p-4 bg-neutral-900 opacity-80 fixed top-0 z-10 hidden lg:block">
        <HashLink
          to="#home"
          smooth
          className="mr-5 md:mr-10 hover:text-orange-400"
        >
          Home
        </HashLink>
        <HashLink
          to="#about"
          smooth
          className="mr-5 md:mr-10 hover:text-orange-400"
          scroll={(el) => scrollWithOffset(el, 100)}
        >
          About
        </HashLink>
        <HashLink
          to="#skills"
          smooth
          className="mr-5 md:mr-10 hover:text-orange-400"
          scroll={(el) => scrollWithOffset(el, 80)}
        >
          Skills
        </HashLink>
        <HashLink
          to="#projects"
          smooth
          className="mr-5 md:mr-10 hover:text-orange-400"
          scroll={(el) => scrollWithOffset(el, 80)}
        >
          Projects
        </HashLink>
        <HashLink
          to="#experience"
          smooth
          className="mr-5 md:mr-10 hover:text-orange-400"
          scroll={(el) => scrollWithOffset(el, 100)}
        >
          Experience
        </HashLink>
        <HashLink
          to="#contact"
          smooth
          className="mr-5 md:mr-10 hover:text-orange-400"
          scroll={(el) => scrollWithOffset(el, 80)}
        >
          Contact
        </HashLink>
        <a
          href="https://eclectic-c5aa0.web.app/category/all"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          Blog
        </a>
      </div>
      <div className="dropdown lg:hidden bg-neutral-900 opacity-80 fixed top-0 z-10">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
