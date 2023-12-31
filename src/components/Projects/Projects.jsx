import { FaLink } from "react-icons/fa/index.esm";
import cookbook from "../../assets/images/cookbook.png";
import kidstoy from "../../assets/images/kidstoy.png";
import music from "../../assets/images/music.png";
import sales from "../../assets/images/sales.png";
import matlabGui from "../../assets/images/MatlabGui.png";
import bistro from "../../assets/images/bistro.png";
import heartAttack from "../../assets/images/heartAttack.png";
import patientProfile from "../../assets/images/patientProfile.png";
import covid19 from "../../assets/images/covid19.png";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      img: heartAttack,
      liveLink:
        "https://github.com/Aminul667/heart_attack_prediction/blob/main/program/heart_attack_prediction.ipynb",
      projectName: "Heart Attack Prediction",
      techonologies: "Python, NumPy, Pandas, Plotly, scikit-learn",
      client: "https://github.com/Aminul667/heart_attack_prediction",
    },
    {
      id: 2,
      img: patientProfile,
      liveLink: "https://patient-profile.streamlit.app",
      projectName: "Patient Profile",
      techonologies: "Python, NumPy, Pandas, Plotly, Streamlit",
      client: "https://github.com/Aminul667/webapp-profile",
    },
    {
      id: 3,
      img: covid19,
      liveLink:
        "https://www.kaggle.com/code/rahathossain096/about-covid19-visualization",
      projectName: "COVID-19 data analysis",
      techonologies: "Python, NumPy, Pandas, Matplotlib, Seaborn, Plotly",
      client:
        "https://www.kaggle.com/code/rahathossain096/about-covid19-visualization",
    },
    {
      id: 4,
      img: sales,
      liveLink:
        "https://github.com/Aminul667/Project_DA/blob/main/SalesAnalysis/SalesAnalysis.ipynb",
      projectName: "Sales Analysis",
      techonologies: "Python, Pandas, Matplotlib, Seaborn, Data Manipulation",
      client: "https://github.com/Aminul667/Project_DA/tree/main/SalesAnalysis",
    },
    {
      id: 5,
      img: matlabGui,
      liveLink: "https://www.youtube.com/watch?v=u4_Tn_UCD_k",
      projectName: "GUI for solving Parabolic IBVP",
      techonologies: "Matplotlib, Matlab app designer",
      client: "https://github.com/Aminul667/MatlabGUI",
    },
    {
      id: 6,
      img: kidstoy,
      liveLink: "https://b7a11-kids-toy.web.app/",
      projectName: "KidsHero",
      techonologies: "React JS, MongoDB, Tailwind CSS, ExpressJS, Firebase",
      client: "https://github.com/Aminul667/kids-hero",
      server: "https://github.com/Aminul667/kids-hero-server",
    },
    {
      id: 7,
      img: cookbook,
      liveLink: "https://b710-chef-recipe-1e36e.web.app/",
      projectName: "CookBook",
      techonologies: "React JS, MongoDB, Tailwind CSS, Express JS, Firebase",
      client: "https://github.com/Aminul667/cook-book-client",
      server: "https://github.com/Aminul667/cook-book-server",
    },
    {
      id: 8,
      img: music,
      liveLink: "https://b712-school-music.web.app/",
      projectName: "SchoolOfMusic",
      techonologies:
        "ReactJS, MongoDB, Tailwind CSS, Express JS, Firebase, Axios, Tanstack query, JWT",
      client: "https://github.com/Aminul667/school-of-music-client",
      server: "https://github.com/Aminul667/school-of-music-server",
    },
    {
      id: 9,
      img: bistro,
      liveLink: "https://bistro-boss-client-987d5.web.app/",
      projectName: "Bistro Boss Restaurant",
      techonologies:
        "ReactJS, MongoDB, Tailwind CSS, Express JS, Firebase, Axios, Tanstack query, JWT, Payment System",
      client: "https://github.com/Aminul667/bistro-boss-m74",
      server: "https://github.com/Aminul667/bistro-boss-m74-server",
    },
  ];

  return (
    <>
      <div
        className="px-8 lg:px-28 mt-10 text-3xl lg:text-5xl font-playfair"
        id="projects"
      >
        <h2 className="mb-4">Projects</h2>
        <div className="flex flex-wrap gap-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="grow basis-72 border-2 rounded-lg border-orange-500 px-3 py-2"
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
                {project?.server && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
