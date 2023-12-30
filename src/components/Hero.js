import homepage from '../assests/Homepage.png';
import bannerbg from '../assests/Bannerbg.png';

const Hero = ()=> {
   return (
     <>
       <section>
         <div className="hero-container container">
           <div className="hero-left">
             <h2>Your Favourite Food <br/> Delivered Hot & <br/> Fresh</h2>
             <p>
               Healthy switcher chefs do all the prep work, like peeding,
               chopping & marinating, so you can cook a fresh food.
             </p>
             <button className='book-now hero-btn'>
               Order Now
               <span class="material-symbols-outlined">arrow_right_alt</span>
             </button>
           </div>
           <div className="hero-right">
              <img src={homepage} alt="hero"></img>
           </div>
         </div>
         <img src={bannerbg} alt='banner' className='hero-banner'></img>
       </section>
     </>
   );
};

export default Hero;