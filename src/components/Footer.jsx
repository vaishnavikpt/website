import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

        <img
  src={logo}
  alt="Samboy Logo"
/>

          <p>
            Traditional taste.
            <br />
            Delicious moments.
          </p>

        </div>


        {/* FOOTER NAVIGATION */}
        <div className="footer-links">

          <button
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("products")}
          >
            Products
          </button>


          <button
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Samboy.
          All rights reserved.
        </p>

        <p>
          Baikampady, New Mangalore
        </p>

      </div>

    </footer>
  );
}

export default Footer;