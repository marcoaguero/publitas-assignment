/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
// import productsData from "../assets/productsData.json";
import ProductItem from "./ProductItem";
import axios from "axios";
import ProductSkeleton from "./ProductSkeleton";
import useDebounce from "../useDebounce";
import { FaSearch } from "react-icons/fa";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [debouncedSearchItem, setDebouncedSearchItem] = useState("");
  const [originalProducts, setOriginalProducts] = useState("");

  const searchRef = useRef(null);
  // const [query, setQuery] = useState("");
  // const [records, setRecords] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(`https://dummyjson.com/products`);
        //   console.log(data.products);

        setProducts(data.products);
        setOriginalProducts(data.products);
        setloading(false);
      } catch (e) {
        setloading(false);
        // console.log(e);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchItem(searchItem);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchItem]);

  useEffect(() => {
    if (debouncedSearchItem) {
      const getProducts = async () => {
        try {
          setloading(true);
          const { data } = await axios.get(
            `https://dummyjson.com/products/search?q=${searchItem}`
          );
          //   console.log(data.products);

          setProducts(data.products);
          setloading(false);
        } catch (e) {
          setloading(false);
          // console.log(e);
        }
      };
      getProducts();
    } else {
      setProducts(originalProducts);
    }
  }, [debouncedSearchItem]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [products]);

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
      <div className="max-w-4xl m-5 h-20 bg-gray-200 p-4  dark:bg-slate-900 ">
        <form
          className="rounded-l-lg w-full   h-full p-2 flex items-center "
          action=""
        >
          <input
            ref={searchRef}
            value={searchItem}
            className="w-full py-2 px-2 outline-none rounded-bl-lg rounded-tl-lg"
            onChange={(e) => setSearchItem(e.target.value)}
            type="text"
          />
          <button className="w-0.5/12  py-3 px-3  border border-none border-gray-700 bg-pink-600 text-white rounded-br-lg rounded-tr-lg">
            <FaSearch className="text-white" />
          </button>
        </form>
      </div>
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
