import React from "react";
import Categories from "../components/Categories";
import ProductList from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <ProductList />
    </div>
  );
}

export default Home;
