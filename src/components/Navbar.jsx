import "../styles.css"

// eslint-disable-next-line react/prop-types
function Navbar({ onNavToggleChange, checked }) {
  return (
    <div className="root">
      <div className="cont">
        <div className="navbar">
          <div className="mobile-nav">
            <a href="#" className="logo">
              <img src="assets/log.png" width="70%" alt="Logo" />
            </a>
            <input
              type="checkbox"
              id="nav-toggle"
              className="nav-toggle"
              checked={checked}
              onChange={onNavToggleChange}
            />
            <label htmlFor="nav-toggle" className="nav-toggle-label">
              <span></span>
            </label>
          </div>
          <nav>
            <a href="/home" className="navlinks">
              Home
            </a>
            <a href="/home#features" className="navlinks">
              Features
            </a>
            <a href="/home#aboutus" className="navlinks">
              About Us
            </a>
            <a href="/blog" className="navlinks">
              Blogs
            </a>
            <a
              href="https://calendly.com/suraksha1/suraksha-one?month=2023-06"
              style={{ textDecoration: 'none' }}
            >
              <button type="button" name="contact2" className="navbutton">
                Contact Us
              </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
