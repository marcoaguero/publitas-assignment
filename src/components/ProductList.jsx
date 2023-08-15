import { useEffect, useState } from "react";
// import productsData from "../assets/productsData.json";
import ProductItem from "./ProductItem";
import axios from "axios";
import ProductSkeleton from "./ProductSkeleton";
const ProductList = ({ query, setQuery }) => {
  console.log("query", query);
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  // const [query, setQuery] = useState("");
  // const [records, setRecords] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${query}`
        );
        //   console.log(data.products);

        setProducts(data.products);

        setloading(false);
      } catch (e) {
        setloading(false);
        console.log(e);
      }
    };
    getProducts();
  }, [query]);

  if (loading) return <ProductSkeleton />;
  // const filter = (e) => {
  //   setRecords(
  //     products.filter((p) =>
  //       p.title.toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //   );
  // };

  return (
    <>
      <div className="grid grid-cols-1 m-6 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
