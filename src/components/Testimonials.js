import testImage from '../assests/Ellipse 1.png';

function Testimonials(){
    return (
      <section
        className="container testimonials-container facilities-container"  >
        <div className="testimonials-left">
          <small className="section-heading">Testimonials</small>
          <h2>What they are saying </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="testimonials-right card">
          <img src={testImage} alt="testimonials-img"></img>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="rating">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
          </div>
          <h4>John Doe</h4>
        </div>
      </section>
    );
};

export default Testimonials;