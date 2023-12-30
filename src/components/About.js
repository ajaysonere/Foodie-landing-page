import aboutBanner from '../assests/About Page.png';
import aboutImage from '../assests/Homepage.png'

function About(){
    return(
       <section>
          <div className="container about-container">
              <img src={aboutBanner} alt='about'></img>
          </div>
          <img src={aboutBanner} alt='about' className='about-banner'></img>
       </section>
    );
};

export default About;