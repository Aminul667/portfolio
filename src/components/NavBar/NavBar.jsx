import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <nav className="text-center text-xl">
      <div className="text-white font-antique w-full p-4 bg-neutral-900 opacity-80 fixed top-0 z-10">
        <HashLink to="#home" smooth className="mr-10">Home</HashLink>
        <HashLink to="#about" smooth className="mr-10">About</HashLink>
        <HashLink to="#skills" smooth className="mr-10">Skills</HashLink>
        <HashLink className="mr-10">Projects</HashLink>
        <HashLink to="#contact" smooth className="mr-10">Contact</HashLink>
      </div>
    </nav>
  );
};

export default NavBar;
