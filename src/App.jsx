import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Highlights />

      <About />

      <Products />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;