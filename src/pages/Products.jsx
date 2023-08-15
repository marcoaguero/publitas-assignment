/* eslint-disable no-unused-vars */
import ProductList from "../components/ProductList";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Products = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="max-w-4xl m-5 h-20 bg-gray-200 p-4 ">
        <form
          className="rounded-l-lg w-full   h-full p-2 flex items-center "
          action=""
        >
          <input
            className="w-full py-2 px-2 outline-none rounded-bl-lg rounded-tl-lg"
            onChange={(e) => setQuery(e.target.value)}
            type="text"
          />
          <button className="w-0.5/12  py-3 px-3  border border-none border-gray-700 bg-pink-600 text-white rounded-br-lg rounded-tr-lg">
            <FaSearch className="text-white" />
          </button>
        </form>
      </div>
      <ProductList query={query} setQuery={setQuery} />
    </>
  );
};

export default Products;
