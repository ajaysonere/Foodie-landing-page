import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [showNevigation , setShowNevigation] = useState(false);
    return (
      <header className="nav-header">
        <nav className="container">
          <div className="logo">
            <p>FOODIE</p>
          </div>
          <ul className={`nav-links ${showNevigation ? "show-menu" : "hide-menu"}`}>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">About</NavLink>
            </li>
            <li>
              <NavLink to="#">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="#">Contact</NavLink>
            </li>
            <span class="material-symbols-outlined">shopping_cart</span>
            <button className="book-now"> Book Now </button>
          </ul>
          <button className="toggle-btn"  onClick={()=> setShowNevigation(prev => !prev)}>
            <span class="material-symbols-outlined">
            {
              showNevigation ? "close" : "menu"
            }
            </span>
          </button>
        </nav>
      </header>
    );
};

export default Navbar;