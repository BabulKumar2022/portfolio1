import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Particle from "./Particle";


const HomePage = () => {
  return (
    <div>
      <Particle></Particle>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
