import { useState } from "react";
import "./Products.css";

const products = [
  {
    name: "Tomato Murku",
    category: "Traditional Snacks",
    image: "/src/assets/products/tomato-murku.jpeg",
  },
  {
    name: "Karakaddi",
    category: "Traditional Snacks",
    image: "/src/assets/products/karakaddi.jpeg",
  },
  {
    name: "Tapioca Chips",
    category: "Chips",
    image: "/src/assets/products/tapioca-chips.jpeg",
  },
  {
    name: "Kereng Chips",
    category: "Chips",
    image: "/src/assets/products/kereng-chips.jpeg",
  },
  {
    name: "Shev",
    category: "Savouries",
    image: "/src/assets/products/shev.jpeg",
  },
  {
    name: "Nippat",
    category: "Traditional Snacks",
    image: "/src/assets/products/nippat.jpeg",
  },  
  {
    name: "Banana Chips",
    category: "Chips",
    image: "/src/assets/products/banana-chips.jpeg",
  },
  {
    name: "Kodubale",
    category: "Traditional Snacks",
    image: "/src/assets/products/kodubale.jpeg",
  },
  {
    name: "Potato Sonte",
    category: "Savouries",
    image: "/src/assets/products/potato-soute.jpeg",
  },
  {
    name: "Corn Mixture",
    category: "Mixtures",
    image: "/src/assets/products/corn-mixture.jpeg",
  },
  {
    name: "Kereng Sonte",
    category: "Savouries",
    image: "/src/assets/products/kerung-sonte.jpeg",
  },
  {
    name: "Fryums",
    category: "Modern Snacks",
    image: "/src/assets/products/fryums.jpeg",
  },
  {
    name: "Garlic Ring",
    category: "Modern Snacks",
    image: "/src/assets/products/garlic-rings.jpeg",
  },
  {
    name: "Pasta",
    category: "Modern Snacks",
    image: "/src/assets/products/pasta.jpeg",
  },
  {
    name: "Cheese Ball",
    category: "Modern Snacks",
    image: "/src/assets/products/cheese-balls.jpeg",
  },
  {
    name: "3D",
    category: "Modern Snacks",
    image: "/src/assets/products/3d.jpeg",
  },
  {
    name: "Onion Ring",
    category: "Modern Snacks",
    image: "/src/assets/products/onion-rings.jpeg",
  },
];


function Products() {

  const [activeCategory, setActiveCategory] = useState("All");


  const categories = [
    "All",
    "Chips",
    "Traditional Snacks",
    "Savouries",
    "Mixtures",
    "Modern Snacks",
  ];


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