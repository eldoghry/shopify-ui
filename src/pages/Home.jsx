import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ProductList from "../components/Products";
import Slider from "../components/Slider";
import axios from "axios";
import Loader from "../components/Loader";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log("home rerender products");
        const res = await axios.get("http://localhost:3000/api/product/");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <Slider />
      <Categories />
      <ProductList products={products.slice(0, 12)} />
    </div>
  );
}

export default Home;
