import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Catalog from "./pages/Catalog";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { ShopProvider } from "./ShopContext";
import { DarkModeProvider } from "./DarkModeContext";

const RoutesConfig = () => (
  <Routes>
    <Route path="/publitas-assignment/" element={<App />}>
      <Route index element={<Products />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="products" element={<Products />} />
      <Route path="product-details/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
      <DarkModeProvider>
        <Router>
          <RoutesConfig />
        </Router>
      </DarkModeProvider>
    </ShopProvider>
  </React.StrictMode>
);
