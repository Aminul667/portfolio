import { FaLink } from "react-icons/fa/index.esm";
import cookbook from "../../assets/images/cookbook.png";
import kidstoy from "../../assets/images/kidstoy.png";
import music from "../../assets/images/music.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

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
      {/* <div className="px-8 lg:px-28 mt-10 text-3xl lg:text-5xl font-antique" id="projects">
        <h2 className="mb-4">Projects</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-5">
              <img src={cookbook} alt="" className="w-[300px] h-[200px] lg:w-[550px] lg:h-auto" />
              <div>
                <div className="flex items-center gap-3 text-2xl lg:text-3xl font-bold mb-4">
                  <FaLink></FaLink>
                  <a
                    href="https://b710-chef-recipe-1e36e.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CookBook
                  </a>
                </div>
                <p className="text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Description:</span> A
                  Bangladeshi recipe website where people will find recipes from
                  famous Bangladeshi cooks.
                </p>
                <p className="text-lg lg:text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Technologies:</span>{" "}
                  React JS, MongoDB, Tailwind CSS, Express JS, Firebase.
                </p>
                <p className="text-lg lg:text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Features:</span> <br />
                  <span className="ml-6">
                    -You can see all the cooks we have and their recipes.
                  </span>{" "}
                  <br />
                  <span className="ml-2 lg:ml-6">
                    -To see the full recipe, you have to login into the site.
                  </span>{" "}
                  <br />
                  <span className="ml-2 lg:ml-6">
                    -You can also bookmark the recipes you like most.
                  </span>
                </p>
                <div className="text-xl lg:text-2xl mb-3">
                  <h2 className="font-bold">GitHub:</h2>
                  <div className="flex items-center gap-3 text-lg lg:text-xl ml-3 lg:ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/cook-book-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-lg lg:text-xl ml-3 lg:ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/cook-book-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-5">
              <img src={kidstoy} alt="" className="w-[300px] h-[200px] lg:w-[550px] lg:h-auto" />
              <div>
                <div className="flex items-center gap-3 text-2xl lg:text-3xl font-bold mb-4">
                  <FaLink></FaLink>
                  <a
                    href="https://b7a11-kids-toy.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KidsHero
                  </a>
                </div>
                <p className="text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Description:</span> A
                  An e-commerce website to sell toys. You will find toys for kids here.
                </p>
                <p className="text-lg lg:text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Technologies:</span>{" "}
                  React JS, MongoDB, Tailwind CSS, ExpressJS, Firebase.
                </p>
                <p className="text-lg lg:text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Features:</span> <br />
                  <span className="ml-6">
                    -You can choose any toy from our toy gallery.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -You can search for a toy from our search option.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -You can add a toy to your cart.
                  </span>
                </p>
                <div className="text-xl lg:text-2xl mb-3">
                  <h2 className="font-bold">GitHub:</h2>
                  <div className="flex items-center gap-3 text-lg lg:text-xl ml-3 lg:ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/kids-hero"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-lg lg:text-xl ml-3 lg:ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/kids-hero-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center gap-5">
              <img src={music} alt="" className="w-[300px] h-[200px] lg:w-[550px] lg:h-auto" />
              <div>
                <div className="flex items-center gap-3 text-2xl lg:text-3xl font-bold mb-4">
                  <FaLink></FaLink>
                  <a
                    href="https://b712-school-music.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SchoolOfMusic
                  </a>
                </div>
                <p className="text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Description:</span> A
                  A summer school camp to learn music
                </p>
                <p className="text-lg lg:text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Technologies:</span>{" "}
                  ReactJS, MongoDB, Tailwind CSS, Express JS, Firebase, Axios, Tanstack query, JWT, payment system.
                </p>
                <p className="text-lg lg:text-xl mb-3">
                  <span className="text-xl lg:text-2xl font-bold">Features:</span> <br />
                  <span className="ml-6">
                    -There are three authentication systems admins, instructors, and users.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -Admins have their own dashboard to control everything.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -Instructors can add a class and review it.
                  </span>
                </p>
                <div className="text-xl lg:text-2xl mb-3">
                  <h2 className="font-bold">GitHub:</h2>
                  <div className="flex items-center gap-3 text-lg lg:text-xl ml-3 lg:ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/school-of-music-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-lg lg:text-xl ml-3 lg:ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/school-of-music-server"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div
        className="px-8 lg:px-28 mt-10 text-3xl lg:text-5xl font-antique"
        id="projects"
      >
        <h2 className="mb-4">Projects</h2>
        {/* <div className="flex flex-wrap gap-3">
          <div className="grow basis-52 border-2 rounded-lg border-orange-500 px-3 py-2">
            <img src={kidstoy} alt="" />
            <div className="flex items-center gap-3 text-xl lg:text-2xl font-bold my-4">
              <FaLink></FaLink>
              <a
                href="https://b7a11-kids-toy.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                KidsHero
              </a>
            </div>
            <p className="text-lg mb-3 font-medium">
              <span className="font-bold">Technologies:</span> React JS,
              MongoDB, Tailwind CSS, ExpressJS, Firebase.
            </p>
            <div className="text-lg mb-3">
              <h2 className="font-bold">GitHub:</h2>
              <div className="flex items-center gap-3 text-lg ml-3 lg:ml-6 font-medium">
                <FaLink></FaLink>
                <a
                  href="https://github.com/Aminul667/kids-hero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client
                </a>
              </div>
              <div className="flex items-center gap-3 text-lg ml-3 lg:ml-6 font-medium">
                <FaLink></FaLink>
                <a
                  href="https://github.com/Aminul667/kids-hero-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server
                </a>
              </div>
            </div>
          </div>
          <div className="grow basis-52 border-2 rounded-lg border-orange-500 px-3 py-2">
            <img src={cookbook} alt="" />
            <div className="flex items-center gap-3 text-xl lg:text-2xl font-bold my-4">
              <FaLink></FaLink>
              <a
                href="https://b710-chef-recipe-1e36e.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CookBook
              </a>
            </div>
          </div>
          <div className="grow basis-52 border-2 rounded-lg border-orange-500 px-3 py-2">
            <img src={music} alt="" />
            <div className="flex items-center gap-3 text-xl lg:text-2xl font-bold my-4">
              <FaLink></FaLink>
              <a
                href="https://b712-school-music.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SchoolOfMusic
              </a>
            </div>
          </div>
        </div> */}
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
