/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Catalog from "./pages/Catalog.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import { ShopProvider } from "./ShopContext.jsx";
import { DarkModeProvider } from "./DarkModeContext.jsx";

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-details/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
      <DarkModeProvider>
        <RouterProvider router={routerProvider} />
      </DarkModeProvider>
    </ShopProvider>
  </React.StrictMode>
);
