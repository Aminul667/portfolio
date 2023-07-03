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
  return (
    <>
      <div className="px-28 mt-10 text-5xl font-antique">
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
            <div className="flex justify-between gap-5">
              <img src={cookbook} alt="" className="w-[550px]" />
              <div>
                <div className="flex items-center gap-3 text-3xl font-bold mb-4">
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
                  <span className="text-2xl font-bold">Description:</span> A
                  Bangladeshi recipe website where people will find recipes from
                  famous Bangladeshi cooks.
                </p>
                <p className="text-xl mb-3">
                  <span className="text-2xl font-bold">Technologies:</span>{" "}
                  React JS, MongoDB, Tailwind CSS, Express JS, Firebase.
                </p>
                <p className="text-xl mb-3">
                  <span className="text-2xl font-bold">Features:</span> <br />
                  <span className="ml-6">
                    -You can see all the cooks we have and their recipes.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -To see the full recipe, you have to login into the site.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -You can also bookmark the recipes you like most.
                  </span>
                </p>
                <div className="text-2xl mb-3">
                  <h2 className="font-bold">GitHub:</h2>
                  <div className="flex items-center gap-3 text-xl ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/cook-book-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-xl ml-6">
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
            <div className="flex justify-between gap-5">
              <img src={kidstoy} alt="" className="w-[550px]" />
              <div>
                <div className="flex items-center gap-3 text-3xl font-bold mb-4">
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
                  <span className="text-2xl font-bold">Description:</span> A
                  Bangladeshi recipe website where people will find recipes from
                  famous Bangladeshi cooks.
                </p>
                <p className="text-xl mb-3">
                  <span className="text-2xl font-bold">Technologies:</span>{" "}
                  React JS, MongoDB, Tailwind CSS, Express JS, Firebase.
                </p>
                <p className="text-xl mb-3">
                  <span className="text-2xl font-bold">Features:</span> <br />
                  <span className="ml-6">
                    -You can see all the cooks we have and their recipes.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -To see the full recipe, you have to login into the site.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -You can also bookmark the recipes you like most.
                  </span>
                </p>
                <div className="text-2xl mb-3">
                  <h2 className="font-bold">GitHub:</h2>
                  <div className="flex items-center gap-3 text-xl ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/cook-book-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-xl ml-6">
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
            <div className="flex justify-between gap-5">
              <img src={music} alt="" className="w-[550px]" />
              <div>
                <div className="flex items-center gap-3 text-3xl font-bold mb-4">
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
                  <span className="text-2xl font-bold">Description:</span> A
                  Bangladeshi recipe website where people will find recipes from
                  famous Bangladeshi cooks.
                </p>
                <p className="text-xl mb-3">
                  <span className="text-2xl font-bold">Technologies:</span>{" "}
                  React JS, MongoDB, Tailwind CSS, Express JS, Firebase.
                </p>
                <p className="text-xl mb-3">
                  <span className="text-2xl font-bold">Features:</span> <br />
                  <span className="ml-6">
                    -You can see all the cooks we have and their recipes.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -To see the full recipe, you have to login into the site.
                  </span>{" "}
                  <br />
                  <span className="ml-6">
                    -You can also bookmark the recipes you like most.
                  </span>
                </p>
                <div className="text-2xl mb-3">
                  <h2 className="font-bold">GitHub:</h2>
                  <div className="flex items-center gap-3 text-xl ml-6">
                    <FaLink></FaLink>
                    <a
                      href="https://github.com/Aminul667/cook-book-client"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-xl ml-6">
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
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
