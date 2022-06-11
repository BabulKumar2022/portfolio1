import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";


function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
