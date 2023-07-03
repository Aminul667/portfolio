// import html from "../../assets/images/html.png";
// import css from "../../assets/images/css.png";
// import js from "../../assets/images/js.png";
// import tw from "../../assets/images/tailwind.png";
// import bs from "../../assets/images/bootstrap.png";
// import reactjs from "../../assets/images/react.png";
// import nodejs from "../../assets/images/node.jpg";
// import ex from "../../assets/images/express.png";
// import mongo from "../../assets/images/mongodb.png";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa/index.esm";
import { SiExpress, SiMongodb } from "react-icons/si/index.esm";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb/index.esm";

const Skills = () => {
  //   const itemList = [html, css, js, tw, bs, reactjs, nodejs, ex, mongo];

  return (
    <div className="px-24 mt-10 font-antique text-5xl" id="skills">
      <h2 className="font-normal mb-4">Skills</h2>
      <div className="flex">
        <div className="px-28 w-1/2">
          <h3 className="text-xl font-bold mb-5">Frontend development</h3>
          <div className="flex items-center gap-5 mb-3">
            <FaHtml5></FaHtml5>
            <progress
              className="progress progress-accent w-full h-6"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <FaCss3Alt></FaCss3Alt>
            <progress
              className="progress progress-accent w-full h-6"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <TbBrandJavascript></TbBrandJavascript>
            <progress
              className="progress progress-accent w-full h-6"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <TbBrandTailwind></TbBrandTailwind>
            <progress
              className="progress progress-accent w-full h-6"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <FaBootstrap></FaBootstrap>
            <progress
              className="progress progress-accent w-full h-6"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <FaReact></FaReact>
            <progress
              className="progress progress-accent w-full h-6"
              value="65"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="px-28 w-1/2">
        <h3 className="text-xl font-bold mb-5">Backend development</h3>
          <div className="flex items-center gap-5 mb-3">
            <FaNodeJs></FaNodeJs>
            <progress
              className="progress progress-accent w-full h-6"
              value="55"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <SiExpress></SiExpress>
            <progress
              className="progress progress-accent w-full h-6"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center gap-5 mb-3">
            <SiMongodb></SiMongodb>
            <progress
              className="progress progress-accent w-full h-6"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
