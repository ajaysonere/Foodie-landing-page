function Faqsection(){
    return (
      <section className="container faq-section facilities-container ">
        <div className="faq-left">
          <h2>Have Question In Mind? Let Us Help You</h2>
        </div>
        <div className="faq-right">
          <input type="text" placeholder="yourmail@gmail.com"></input>
          <button type="submit" className="book-now hero-btn">
            Submit
          </button>
        </div>
      </section>
    );
};

export default Faqsection;