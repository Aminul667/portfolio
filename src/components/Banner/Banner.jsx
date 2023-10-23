import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa/index.esm";
import "./Banner.css";
import { BiSolidContact } from "react-icons/bi/index.esm";
// import myResume from "../../assets/Resume_Md_Aminul_Islam.pdf";
import myResume from "../../assets/CV_Md_Aminul_Islam.pdf";
import { TypeAnimation } from "react-type-animation";
import { HashLink } from "react-router-hash-link";
import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const Banner = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    // const container = ".tagcloud";
    const container = containerRef.current;
    const texts = [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit",
      "HTML",
      "CSS",
      "Bootstrap",
      "TailwindCSS",
      "JavaScript",
      "React",
      "NodeJS",
      "ES6",
      "ExpressJS",
      "MongoDB",
      "Firebase",
      "Git",
      "GitHub",
      "C",
      "Matlab",
      "SAS",
      "R",
    ];

    const options = {
      radius: 250,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div
      className="font-playfair text-white banner-container flex justify-around items-center h-[100vh]"
      id="home"
    >
      <div className="md:w-1/2">
        <div className="text-2xl lg:text-4xl font-medium text-center">
          <TypeAnimation
            sequence={[
              "Hello, I am Aminul !",
              2000,
              "Thanks for visiting me",
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
            <FaGithub className="text-4xl md:text-5xl hover:text-orange-400"></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/md-aminul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl md:text-5xl hover:text-blue-500"></FaLinkedin>
          </a>
          <a
            href="https://www.youtube.com/@programmingmathematicslite5118"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-5xl md:text-5xl hover:text-red-500"></FaYoutube>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-8">
          <a
            href={myResume}
            download="Resume_Md_Aminul_Islam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="font-medium text-2xl flex gap-3 items-center px-4 md:px-5 py-2 md:py-3 border-2 rounded-md hover:border-orange-400">
              Resume <FaDownload></FaDownload>
            </button>
          </a>
          <HashLink to="#contact" smooth>
            <button className="font-medium text-2xl flex gap-3 items-center px-4 md:px-5 py-2 md:py-3 border-2 rounded-md hover:border-orange-400">
              Contact <BiSolidContact></BiSolidContact>
            </button>
          </HashLink>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <div className="text-sphere">
          <span className="tagcloud" ref={containerRef}></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
