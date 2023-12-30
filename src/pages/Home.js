import About from "../components/About";
import Facilities from "../components/Facilities";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


function Home (){
   return(
      <>
        <Navbar />
        <Hero />
        <About />
        <Facilities />
      </>
   );
};

export default Home;