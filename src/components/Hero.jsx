import "./Hero.css";
import heroImage from "../assets/image.jpeg";

function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      <div className="hero-decoration decoration-one"></div>
      <div className="hero-decoration decoration-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <p className="small-title">
            TRADITIONAL TASTE • QUALITY SNACKS
          </p>

          <h1>
            A Little Taste
            <span>of Happiness.</span>
          </h1>

          <p className="hero-text">
            Bringing delicious snacks and traditional favourites
            to every moment. Discover the taste of Samboy.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={scrollToProducts}
            >
              Explore Products
              <span>→</span>
            </button>

            <button
              className="secondary-button"
              onClick={scrollToAbout}
            >
              Our Story
            </button>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-snack-card">

            <img
              src={heroImage}
              alt="Samboy Food Products"
              className="hero-image"
            />

            <div className="floating-label">
              <strong>Samboy</strong>
              <small>Deliciously Yours</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;