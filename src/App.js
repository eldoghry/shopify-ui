import "./App.css";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Cart /> */}
        {/* <Home /> */}
        {/* <ProductList /> */}
        <Product />
      </Layout>
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
