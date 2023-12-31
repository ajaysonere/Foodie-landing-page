import About from "../components/About";
import Facilities from "../components/Facilities";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";


function Home (){
   return(
      <>
        <Navbar />
        <Hero />
        <About />
        <Facilities />
        <Testimonials />
      </>
   );
};

export default Home;