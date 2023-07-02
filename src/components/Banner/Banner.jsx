import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa/index.esm";
import "./Banner.css";
import { BiSolidContact } from "react-icons/bi/index.esm";
import myResume from "../../assets/Resume_Md_Aminul_Islam.pdf";
import { TypeAnimation } from "react-type-animation";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div className="font-antique banner-container text-white">
      <div className="text-7xl font-medium text-center">
        <TypeAnimation
          sequence={[
            "Hello, I am Md. Aminul Islam",
            2000,
            "Hello, I am a front-end developer",
            2000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        ></TypeAnimation>
      </div>
      <div className="flex justify-center items-center gap-5 mt-8">
        <a
          href="https://github.com/Aminul667"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-5xl hover:text-orange-400"></FaGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/md-aminul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-5xl hover:text-orange-400"></FaLinkedin>
        </a>
      </div>
      <div className="flex gap-4 justify-center items-center mt-8">
        <a
          href={myResume}
          download="Resume_Md_Aminul_Islam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-medium text-3xl flex gap-3 items-center px-5 py-3 border-2 rounded-md hover:border-orange-400">
            Resume <FaDownload></FaDownload>
          </button>
        </a>
        <HashLink to="#about" smooth>
          <button className="font-medium text-3xl flex gap-3 items-center px-5 py-3 border-2 rounded-md hover:border-orange-400">
            Contact <BiSolidContact></BiSolidContact>
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default Banner;
