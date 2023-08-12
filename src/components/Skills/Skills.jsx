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
  FaPython,
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
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="text-center border border-orange-700 p-3 rounded-lg m-auto">
          <FaHtml5 className="text-orange-700 text-[150px]"></FaHtml5>
        </div>
        <div className="text-center border border-blue-700 p-3 rounded-lg m-auto">
          <FaCss3Alt className="text-blue-700 text-[150px]"></FaCss3Alt>
        </div>
        <div className="text-center border border-yellow-500 p-3 rounded-lg m-auto">
          <TbBrandJavascript className="text-yellow-500 text-[150px]"></TbBrandJavascript>
        </div>
        <div className="text-center border border-blue-500 p-3 rounded-lg m-auto">
          <TbBrandTailwind className="text-blue-500 text-[150px]"></TbBrandTailwind>
        </div>
        <div className="text-center border border-purple-600 p-3 rounded-lg m-auto">
          <FaBootstrap className="text-purple-600 text-[150px]"></FaBootstrap>
        </div>
        <div className="text-center border border-cyan-500 p-3 rounded-lg m-auto">
          <FaReact className="text-cyan-500 text-[150px]"></FaReact>
        </div>
        <div className="text-center border border-green-500 p-3 rounded-lg m-auto">
          <FaNodeJs className="text-green-500 text-[150px]"></FaNodeJs>
        </div>
        <div className="text-center border border-gray-600 p-3 rounded-lg m-auto">
          <SiExpress className="text-gray-600 text-[150px]"></SiExpress>
        </div>
        <div className="text-center border border-green-800 p-3 rounded-lg m-auto">
          <SiMongodb className="text-green-800 text-[150px]"></SiMongodb>
        </div>
        <div className="text-center border border-blue-800 p-3 rounded-lg m-auto">
          <FaPython className="text-blue-800 text-[150px]"></FaPython>
        </div>
      </div>
    </div>
  );
};

export default Skills;
