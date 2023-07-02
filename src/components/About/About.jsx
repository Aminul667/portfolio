import img from "../../assets/images/rahat.jpg";

const About = () => {
  return (
    <div
      className="px-28 flex justify-between items-center gap-10 mt-10 font-antique text-justify"
      id="about"
    >
      <img
        src={img}
        alt=""
        className="w-[300px] rounded-l-[50%] rounded-r-[50%]"
      />
      <div>
        <h2 className="text-5xl font-normal mb-4">About Me</h2>
        <p className="text-lg mb-3">
          I am Aminul, a skilled and versatile front-end developer proficient in
          HTML, CSS, JavaScript, Tailwind, Bootstrap, React, MongoDB, and
          ExpressJS. With a passion for crafting visually stunning and intuitive
          user interfaces, I bring a strong attention to detail and a keen eye
          for design to every project I undertake.
        </p>
        <p className="text-lg mb-3">
          Collaboration is at the core of my work ethic, and I thrive in team
          environments where I can effectively communicate and bring ideas to
          life. I have a proven track record of successfully partnering with
          designers, product managers, and stakeholders to deliver exceptional
          results on time and within budget.
        </p>
        <p className="text-lg mb-3">
          As a natural problem solver, I relish challenges and approach them
          with a proactive and innovative mindset. I am adaptable and thrive in
          fast-paced environments, where I can leverage my strong analytical
          skills to identify and implement efficient solutions.
        </p>
        <p className="text-lg mb-3">
          Continuous learning is an integral part of my professional journey. I
          am committed to staying up-to-date with the latest industry trends and
          technologies, always seeking new opportunities to enhance my skill set
          and deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
