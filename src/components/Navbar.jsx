import "../css/styles.css"; 

// eslint-disable-next-line react/prop-types
function Navbar({ onNavToggleChange, checked }) {
  return (
    <div className="root" style={{ padding: '10px' }}>
      <div className="cont">
        <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
          <nav style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/home" className="navlinks" style={{ margin: '0 15px' }}>
              Home
            </a>
            <a href="/home#features" className="navlinks" style={{ margin: '0 15px' }}>
              Features
            </a>
            <a href="/home#aboutus" className="navlinks" style={{ margin: '0 15px' }}>
              About Us
            </a>
            <a href="/blog" className="navlinks" style={{ margin: '0 15px' }}>
              Blogs
            </a>
            <a
              href="https://calendly.com/suraksha1/suraksha-one?month=2023-06"
              style={{ textDecoration: 'none', margin: '0 15px' }}
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
