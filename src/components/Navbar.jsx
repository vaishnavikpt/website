import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div
          className="brand"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/src/assets/logo.png"
            alt="Samboy Logo"
          />

          <span>SAMBOY</span>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          ☰
        </button>


        {/* NAVIGATION */}
        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About Us
          </button>

          <button onClick={() => scrollToSection("products")}>
            Products
          </button>

          <button
            className="contact-nav"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;