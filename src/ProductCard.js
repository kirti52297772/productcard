import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />

      <h2>{name}</h2>

      <p className="price">₹ {price.toFixed(2)}</p>

      <p className={inStock ? "available" : "out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
