import { useState } from "react";
import "./Products.css";

// Product Images
import tomatoMurku from "../assets/products/tomato-murku.jpeg";
import karakaddi from "../assets/products/karakaddi.jpeg";
import tapiocaChips from "../assets/products/tapioca-chips.jpeg";
import kerengChips from "../assets/products/kereng-chips.jpeg";
import shev from "../assets/products/shev.jpeg";
import nippat from "../assets/products/nippat.jpeg";
import bananaChips from "../assets/products/banana-chips.jpeg";
import kodubale from "../assets/products/kodubale.jpeg";
import potatoSonte from "../assets/products/potato-soute.jpeg";
import cornMixture from "../assets/products/corn-mixture.jpeg";
import kerengSonte from "../assets/products/kerung-sonte.jpeg";
import fryums from "../assets/products/fryums.jpeg";
import garlicRing from "../assets/products/garlic-rings.jpeg";
import pasta from "../assets/products/pasta.jpeg";
import cheeseBall from "../assets/products/cheese-balls.jpeg";
import threeD from "../assets/products/3d.jpeg";
import onionRing from "../assets/products/onion-rings.jpeg";


// PRODUCTS LIST
const products = [
  {
    name: "Tomato Murku",
    category: "Traditional Snacks",
    image: tomatoMurku,
  },
  {
    name: "Karakaddi",
    category: "Traditional Snacks",
    image: karakaddi,
  },
  {
    name: "Tapioca Chips",
    category: "Chips",
    image: tapiocaChips,
  },
  {
    name: "Kereng Chips",
    category: "Chips",
    image: kerengChips,
  },
  {
    name: "Shev",
    category: "Savouries",
    image: shev,
  },
  {
    name: "Nippat",
    category: "Traditional Snacks",
    image: nippat,
  },
  {
    name: "Banana Chips",
    category: "Chips",
    image: bananaChips,
  },
  {
    name: "Kodubale",
    category: "Traditional Snacks",
    image: kodubale,
  },
  {
    name: "Potato Sonte",
    category: "Savouries",
    image: potatoSonte,
  },
  {
    name: "Corn Mixture",
    category: "Mixtures",
    image: cornMixture,
  },
  {
    name: "Kereng Sonte",
    category: "Savouries",
    image: kerengSonte,
  },
  {
    name: "Fryums",
    category: "Modern Snacks",
    image: fryums,
  },
  {
    name: "Garlic Ring",
    category: "Modern Snacks",
    image: garlicRing,
  },
  {
    name: "Pasta",
    category: "Modern Snacks",
    image: pasta,
  },
  {
    name: "Cheese Ball",
    category: "Modern Snacks",
    image: cheeseBall,
  },
  {
    name: "3D",
    category: "Modern Snacks",
    image: threeD,
  },
  {
    name: "Onion Ring",
    category: "Modern Snacks",
    image: onionRing,
  },
];


function Products() {

  // Active category
  const [activeCategory, setActiveCategory] = useState("All");


  // Categories
  const categories = [
    "All",
    "Chips",
    "Traditional Snacks",
    "Savouries",
    "Mixtures",
    "Modern Snacks",
  ];


  // Filter products
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory
        );


  return (
    <section
      id="products"
      className="products section"
    >

      {/* SECTION HEADING */}
      <div className="products-heading">

        <div>

          <div className="section-tag">
            OUR PRODUCTS
          </div>

          <h2>
            Something delicious
            <span> for every craving.</span>
          </h2>

        </div>


        <p>
          Explore our selection of traditional snacks,
          crispy chips, savouries and fun favourites.
        </p>

      </div>


      {/* CATEGORY FILTERS */}
      <div className="category-buttons">

        {categories.map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? "category active"
                : "category"
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* PRODUCT GRID */}
      <div className="product-grid">

        {filteredProducts.map(
          (product, index) => (

            <div
              className="product-card"
              key={product.name}
            >

              {/* PRODUCT IMAGE */}
              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* PRODUCT INFORMATION */}
              <div className="product-info">

                <span>
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}


export default Products;