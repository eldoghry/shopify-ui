import "./App.css";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const loggedIn = true;

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/products/" element={<ProductList />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
