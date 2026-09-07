import "./Contact.css";

function Contact() {
  const openLocation = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Plot+No+9C+Industrial+Area+Baikampady+New+Mangalore+575011",
      "_blank"
    );
  };

  return (
    <section id="contact" className="contact section">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-content">

          <div className="section-tag">
            GET IN TOUCH
          </div>

          <h2>
            We'd love to
            <span> hear from you.</span>
          </h2>

          <p>
            Have a question about our products or want to
            get in touch with Samboy? Reach out to us.
          </p>


          {/* CONTACT DETAILS */}
          <div className="contact-details">

            {/* PHONE */}
            <div className="contact-detail">

              <div className="contact-icon">
                ☎
              </div>

              <div>
                <small>PHONE</small>

                <strong>
                  9845149112
                </strong>
              </div>

            </div>


            {/* EMAIL */}
            <div className="contact-detail">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <small>EMAIL</small>

                <strong>
                  sst.samboy@gmail.com
                </strong>
              </div>

            </div>


            {/* LOCATION */}
            <div className="contact-detail">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <small>LOCATION</small>

                <strong>
                  Baikampady, New Mangalore
                </strong>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-card">

          <div className="contact-card-top">

            <span>
              VISIT US
            </span>

            <div>
              ↗
            </div>

          </div>


          <h3>
            S.S.T Food
            <br />
            Products
          </h3>


          <p>
            Plot No. 9C, Industrial Area,
            Baikampady,
            New Mangalore - 575 011
          </p>


          <button onClick={openLocation}>
            Open Location →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;