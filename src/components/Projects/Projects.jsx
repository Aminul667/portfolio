import { FaLink } from "react-icons/fa/index.esm";
import cookbook from "../../assets/images/cookbook.png";
import kidstoy from "../../assets/images/kidstoy.png";
import music from "../../assets/images/music.png";


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      img: kidstoy,
      liveLink: "https://b7a11-kids-toy.web.app/",
      projectName: "KidsHero",
      techonologies: "React JS, MongoDB, Tailwind CSS, ExpressJS, Firebase",
      client: "https://github.com/Aminul667/kids-hero",
      server: "https://github.com/Aminul667/kids-hero-server",
    },
    {
      id: 2,
      img: cookbook,
      liveLink: "https://b710-chef-recipe-1e36e.web.app/",
      projectName: "CookBook",
      techonologies: "React JS, MongoDB, Tailwind CSS, Express JS, Firebase",
      client: "https://github.com/Aminul667/cook-book-client",
      server: "https://github.com/Aminul667/cook-book-server",
    },
    {
      id: 2,
      img: music,
      liveLink: "https://b712-school-music.web.app/",
      projectName: "SchoolOfMusic",
      techonologies: "ReactJS, MongoDB, Tailwind CSS, Express JS, Firebase, Axios, Tanstack query, JWT, Payment System",
      client: "https://github.com/Aminul667/school-of-music-client",
      server: "https://github.com/Aminul667/school-of-music-server",
    },
  ];

  console.log(projectsData);

  return (
    <>
      <div
        className="px-8 lg:px-28 mt-10 text-3xl lg:text-5xl font-antique"
        id="projects"
      >
        <h2 className="mb-4">Projects</h2>
        <div className="flex flex-wrap gap-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="grow basis-52 border-2 rounded-lg border-orange-500 px-3 py-2"
            >
              <img src={project.img} alt="" />
              <div className="flex items-center gap-3 text-xl lg:text-2xl font-bold my-4">
                <FaLink></FaLink>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.projectName}
                </a>
              </div>
              <p className="text-lg mb-3 font-medium">
                <span className="font-bold">Technologies:</span>{" "}
                {project.techonologies}
              </p>
              <div className="text-lg mb-3">
                <h2 className="font-bold">GitHub:</h2>
                <div className="flex items-center gap-3 text-lg ml-3 lg:ml-6 font-medium">
                  <FaLink></FaLink>
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client
                  </a>
                </div>
                <div className="flex items-center gap-3 text-lg ml-3 lg:ml-6 font-medium">
                  <FaLink></FaLink>
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;