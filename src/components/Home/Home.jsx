import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
};

export default Home;
