import "./About.css";
import aboutImage from "../assets/image.jpeg";

function About() {
  return (
    <section id="about" className="about section">

      {/* SECTION TITLE */}
      <div className="section-tag">
        ABOUT SAMBOY
      </div>


      <div className="about-grid">

        {/* LEFT SIDE - IMAGE */}
        <div className="about-image">

          <div className="about-pattern"></div>

 <img
  src={aboutImage}
  alt="Samboy Food Products"
  className="about-photo"
/>
          <div className="about-badge">
            <strong>16</strong>
            <span>Employees</span>
          </div>

        </div>


        {/* RIGHT SIDE - CONTENT */}
        <div className="about-content">

          <h2>
            Made with care,
            <span> shared with joy.</span>
          </h2>


          <p>
            Samboy is a food manufacturing business based in
            Baikampady, New Mangalore, offering a variety of
            traditional snacks, savouries, chips and other
            delicious food products.
          </p>


          <p>
            From familiar traditional favourites to fun modern
            snacks, Samboy brings together a wide range of
            flavours for snack lovers.
          </p>


          {/* COMPANY DETAILS */}
          <div className="company-details">

            <div>
              <strong>09:00 AM</strong>
              <span>Opening Time</span>
            </div>

            <div>
              <strong>05:00 PM</strong>
              <span>Closing Time</span>
            </div>

            <div>
              <strong>17+</strong>
              <span>Snack Varieties</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;