import '../css/styles.css'; // Import your CSS file here

function ContactSection() {
  return (
    <section className="contact-section">
      <br /><br /><br />
      <h4 className="disptextz center-heading" id="aboutus">
        ABOUT US
      </h4>
      <div className="aboutus">
        We Are A Fintech-Health Tech Company Incorporated In 2022. At Suraksha One, We Believe That Everyone Deserves Access To Quality Healthcare, Regardless Of Their Financial Circumstances. We Are A Dedicated Team Of Professionals Passionate About Bridging The Gap In Healthcare Financing And Empowering Individuals To Take Control Of Their Well-Being.
      </div>
      <br /><br /><br />
      <div className="sometblue">
        <h3 className="whitebold">Bridging the Financial Gap in <br />Healthcare with Suraksha One: <br />Your Trusted Partner for Affordable Medical Funding</h3>
        <a href="https://calendly.com/suraksha1/suraksha-one?month=2023-06" style={{ textDecoration: 'none' }}>
          <button type="button" name="contact2" className="navbutton">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
