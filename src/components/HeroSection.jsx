import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import "../styles.css"

function HeroSection() {
  useEffect(() => {
    const texts = document.querySelectorAll('.disptext');
    let currentText = 0;

    function showText() {
      texts.forEach((text) => (text.style.display = 'none'));
      texts[currentText].style.display = 'block';
      currentText = (currentText + 1) % texts.length;
    }

    showText(); 

    const animationContainer = document.querySelector('.lottie-container');
    const animData = {
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/anim1.json', 
    };

    // Load the animation
    lottie.loadAnimation(animData);

    const intervalId = setInterval(showText, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section>
      <div className="text-with-animation" id="home">
        <div className="text-content">
          <h1 className="disptextt" style={{ marginTop: '120px !important' }}>
            Suraksha One,
          </h1>
          <div className="container">
            <div className="fill-bar" id="fill-bar"></div>
          </div>
          <h1 className="disptext">One Loan at a Time</h1>
          <h1 className="disptext">Saving Lives</h1>
          <h1 className="disptext">For healthcare financing</h1>
          <div className="contdisc">
            <h3 className="disptextz">
              Suraksha One Is Your Reliable Solution For Healthcare Financing. We Offer Low-Interest Personal Health Loans
              Backed By Leading Banks, Making Medical Funding Accessible And Affordable At Hospitals
            </h3>
          </div>
        </div>
        <div className="lottie-container"></div>
      </div>
      <a href="https://calendly.com/suraksha1/suraksha-one?month=2023-06" style={{ textDecoration: 'none' }}>
        <button type="button" name="contact2" className="navbuttonn">
          Contact Us
        </button>
      </a>
    </section>
  );
}

export default HeroSection;
