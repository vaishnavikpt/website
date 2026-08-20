import "./Highlights.css";

function Highlights() {
  return (
    <section className="highlights">

      {/* HIGHLIGHT 1 */}
      <div className="highlight-item">

        <div className="highlight-icon">
          ✦
        </div>

        <div>
          <strong>Traditional Taste</strong>
          <span>Flavours you'll remember</span>
        </div>

      </div>


      {/* HIGHLIGHT 2 */}
      <div className="highlight-item">

        <div className="highlight-icon">
          ✓
        </div>

        <div>
          <strong>Quality Snacks</strong>
          <span>Made with care</span>
        </div>

      </div>


      {/* HIGHLIGHT 3 */}
      <div className="highlight-item">

        <div className="highlight-icon">
          ♡
        </div>

        <div>
          <strong>Wide Variety</strong>
          <span>Something for every craving</span>
        </div>

      </div>

    </section>
  );
}
          
export default Highlights;      