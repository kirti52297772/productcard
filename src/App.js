import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProductCard
        name="Wireless Headphones"
        price={2499}
        image="https://via.placeholder.com/200"
        inStock={true}
      />

      <ProductCard
        name="Smart Watch"
        price={3999}
        image="https://via.placeholder.com/200"
        inStock={false}
      />
    </div>
  );
}

export default App;
