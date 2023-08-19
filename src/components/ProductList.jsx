import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../services";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 m-6 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
