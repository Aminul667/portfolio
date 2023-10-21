import img from "../../assets/images/rahat.jpg";

const About = () => {
  return (
    <div
      className="px-8 lg:px-28 flex flex-col lg:flex-row justify-between items-center gap-10 mt-10 font-playfair text-justify"
      id="about"
    >
      <img
        src={img}
        alt=""
        className="w-[150px] h-[150px] rounded-full lg:w-[300px] lg:h-auto lg:rounded-l-[50%] lg:rounded-r-[50%]"
      />
      <div>
        <h2 className="text-3xl text-center lg:text-left lg:text-5xl font-normal mb-4">
          About Me
        </h2>
        <p className="text-lg mb-3 font-medium">
          Hello, I am Aminul, and I am a mathematics enthusiast with a profound love for programming. Graduating with a degree in mathematics has equipped me with a solid foundation in analytical thinking and problem-solving. But my journey extends beyond the world of equations and proofs, as I have discovered a deep passion for the art of coding and software development.
        </p>
        <p className="text-lg mb-3 font-medium">
        For me, programming is not just a skill. It is a creative outlet and a means to bring abstract mathematical concepts to life. I revel in the process of crafting lines of code to build practical and innovative solutions. Whether it is developing web applications, optimizing algorithms, or delving into the intricacies of data analysis, I find programming to be a source of inspiration and empowerment.
        </p>
        <p className="text-lg mb-3 font-medium">
          As a natural problem solver, I relish challenges and approach them with a proactive and innovative mindset. I am adaptable and thrive in fast-paced environments, where I can leverage my strong analytical skills to identify and implement efficient solutions.
        </p>
        <p className="text-lg mb-3 font-medium">
          Continuous learning is an integral part of my professional journey. I am committed to staying up-to-date with the latest industry trends and technologies, always seeking new opportunities to enhance my skill set
          and deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
