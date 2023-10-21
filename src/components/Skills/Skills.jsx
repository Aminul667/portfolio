import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaCuttlefish,
  FaRProject,
} from "react-icons/fa/index.esm";
import { SiExpress, SiMongodb } from "react-icons/si/index.esm";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbSql,
} from "react-icons/tb/index.esm";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div
        className="px-8 lg:px-24 mt-10 font-antique text-3xl lg:text-5xl"
        id="skills"
      >
        <h2 className="font-normal mb-4">Skills</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
          <div className="text-center border border-blue-800 p-3 rounded-lg m-auto">
            <FaPython className="text-blue-800 text-[100px] md:text-[150px]"></FaPython>
          </div>
          <div className="text-center border border-blue-600 p-3 rounded-lg m-auto">
            <FaCuttlefish className="text-blue-600 text-[100px] md:text-[150px]"></FaCuttlefish>
          </div>
          <div className="text-center border border-orange-700 p-3 rounded-lg m-auto">
            <FaHtml5 className="text-orange-700 text-[100px] md:text-[150px]"></FaHtml5>
          </div>
          <div className="text-center border border-blue-700 p-3 rounded-lg m-auto">
            <FaCss3Alt className="text-blue-700 text-[100px] md:text-[150px]"></FaCss3Alt>
          </div>
          <div className="text-center border border-yellow-500 p-3 rounded-lg m-auto">
            <TbBrandJavascript className="text-yellow-500 text-[100px] md:text-[150px]"></TbBrandJavascript>
          </div>
          <div className="text-center border border-blue-500 p-3 rounded-lg m-auto">
            <TbBrandTailwind className="text-blue-500 text-[100px] md:text-[150px]"></TbBrandTailwind>
          </div>
          <div className="text-center border border-purple-600 p-3 rounded-lg m-auto">
            <FaBootstrap className="text-purple-600 text-[100px] md:text-[150px]"></FaBootstrap>
          </div>
          <div className="text-center border border-cyan-500 p-3 rounded-lg m-auto">
            <FaReact className="text-cyan-500 text-[100px] md:text-[150px]"></FaReact>
          </div>
          <div className="text-center border border-green-500 p-3 rounded-lg m-auto">
            <FaNodeJs className="text-green-500 text-[100px] md:text-[150px]"></FaNodeJs>
          </div>
          <div className="text-center border border-gray-600 p-3 rounded-lg m-auto">
            <SiExpress className="text-gray-600 text-[100px] md:text-[150px]"></SiExpress>
          </div>
          <div className="text-center border border-green-800 p-3 rounded-lg m-auto">
            <SiMongodb className="text-green-800 text-[100px] md:text-[150px]"></SiMongodb>
          </div>
          <div className="text-center border border-blue-400 p-3 rounded-lg m-auto">
            <FaRProject className="text-blue-400 text-[100px] md:text-[150px]"></FaRProject>
          </div>
          <div className="text-center border border-blue-900 p-3 rounded-lg m-auto">
            <TbSql className="text-blue-700 text-[100px] md:text-[150px]"></TbSql>
          </div>
        </div>
      </div>

      {/* <div className="text-sphere">
        <span className="tagcloud" ref={containerRef}></span>
      </div> */}
    </>
  );
};

export default Skills;
