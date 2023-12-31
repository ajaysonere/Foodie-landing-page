import About from "../components/About";
import Facilities from "../components/Facilities";
import Faqsection from "../components/Faqsection";
import Footer from "../components/Footer";
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
        <Faqsection />
        <Footer />
      </>
   );
};

export default Home;