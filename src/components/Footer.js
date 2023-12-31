function Footer(){
    return (
      <footer
        className="container footer-container"
        style={{ display: "none" }}
      >
        <div className="footer-left">
          <p className="logo">FOODIE</p>
          <div className="footer-icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-card">
            <small>Quality</small>
            <small>Help</small>
            <small>Share</small>
            <small>Carrers</small>
            <small>Work</small>
            <small>Testimonials</small>
          </div>
          <div className="footer-card">
            <small>+91 0123456789</small>
            <small>help@gmail.com</small>
            <small>demo@gmail.com</small>
            <small>example@gmail.com</small>
          </div>
          <div className="footer-card">
            <small>Terms & conditions</small>
            <small>Privacy Policy</small>
          </div>
        </div>
      </footer>
    );
};

export default Footer;