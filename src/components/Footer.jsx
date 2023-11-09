import "../css/styles.css"

function Footer() {
  return (
    <section>
      <a href="#" className="logo">
        <img src="assets/log.png" width="10%" style={{ minWidth: '100px' }} alt="Logo" />
      </a>
      <div style={{ marginLeft: '10px' }}>
        <a href="https://www.linkedin.com/company/surakshaone/" target="_blank">
          <img src="assets/linkedinlogo.png" alt="linkedin" width="2%" style={{ minWidth: '20px' }} />
        </a>
        <a href="https://www.facebook.com/surakshaone?mibextid=ZbWKwL" target="_blank">
          <img src="assets/facebooklogo.png" alt="linkedin" width="2%" style={{ minWidth: '20px' }} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
