// import html from "../../assets/images/html.png";
// import css from "../../assets/images/css.png";
// import js from "../../assets/images/js.png";
// import tw from "../../assets/images/tailwind.png";
// import bs from "../../assets/images/bootstrap.png";
// import reactjs from "../../assets/images/react.png";
// import nodejs from "../../assets/images/node.jpg";
// import ex from "../../assets/images/express.png";
// import mongo from "../../assets/images/mongodb.png";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa/index.esm";
import { SiExpress, SiMongodb } from "react-icons/si/index.esm";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb/index.esm";

const Skills = () => {
  //   const itemList = [html, css, js, tw, bs, reactjs, nodejs, ex, mongo];

  return (
    <div
      className="px-8 lg:px-24 mt-10 font-antique text-3xl lg:text-5xl"
      id="skills"
    >
      <h2 className="font-normal mb-4">Skills</h2>
      {/* <div className="flex flex-col lg:flex-row">
        <div className="lg:px-28 lg:w-1/2">
          <h3 className="text-xl font-bold mb-5">Frontend development</h3>
          <div className="flex items-center gap-5 mb-3">
            <FaHtml5 className="text-orange-700 text-[100px] border border-red-700"></FaHtml5>
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
        <div className="lg:px-28 lg:w-1/2">
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
      </div> */}
      <div className="grid grid-cols-4 gap-4 items-center justify-center">
        <div className="text-center border border-red-600 m-auto">
          <FaHtml5 className="text-orange-700 text-[150px]"></FaHtml5>
        </div>
        <div className="text-center border border-red-600 m-auto">
          <FaCss3Alt className="text-orange-700 text-[150px]"></FaCss3Alt>
        </div>
        <div className="text-center border border-red-600 m-auto">
          <TbBrandJavascript className="text-orange-700 text-[150px]"></TbBrandJavascript>
        </div>
        <div className="text-center border border-red-600 m-auto">
          <TbBrandTailwind className="text-orange-700 text-[150px]"></TbBrandTailwind>
        </div>
        <div className="text-center border border-red-600 m-auto">
          <FaBootstrap className="text-orange-700 text-[150px]"></FaBootstrap>
        </div>
      </div>
    </div>
  );
};

export default Skills;
