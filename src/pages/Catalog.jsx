import React, { useEffect, useState } from "react";
import { getProducts } from "../services";
import useShop from "../ShopContext";

const Catalog = () => {
  const { addToCart } = useShop();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data.products));
  }, []);
  window.addEventListener("message", (event) => {
    if (event.data.type === "addToCart") {
      const productId = parseInt(event.data.productId);
      addToCart(products[productId - 1]);
    }
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://view.publitas.com/embed.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-height", "undefined");
    script.setAttribute(
      "data-publication",
      "https://view.publitas.com/marco-aguero/phones-dummy-shop/"
    );
    script.setAttribute("data-publication-aspect-ratio", "1");
    script.setAttribute("data-responsive", "true");
    script.setAttribute("data-width", "undefined");
    script.setAttribute("data-wrapper-id", "publitas-embed-lbnyybfhiv");
    script.setAttribute("publitas-embed", "");
    script.setAttribute("type", "text/javascript");

    document.body.appendChild(script);

    return () => {
      if (script.parentNode === document.body) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="publitas-embed-lbnyybfhiv"></div>;
};

export default Catalog;
