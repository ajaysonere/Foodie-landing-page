import aboutBanner from '../assests/About Section Background.png';
import aboutImage from '../assests/About Page.png';

function About(){
    return (
      <section>
        <div className="container about-container">
          <img src={aboutImage} alt="about"></img>
          <div className="about-left">
            <small className='section-heading'>About</small>
            <h2>Food Is An Important Part Of A Balanced Diet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
            <div className="about-icons">
              <button className="book-now hero-btn"> Learn More</button>
              <span class="material-symbols-outlined mobile-hide">play_circle</span>
              <small className='mobile-hide'>Watch video</small>
            </div>
          </div>
        </div>
        <img src={aboutBanner} alt="about" className="about-banner"></img>
      </section>
    );
};

export default About;