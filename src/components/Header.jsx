import { Link } from "react-router-dom";
import useShop from "../ShopContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../DarkModeContext";

const Header = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { products } = useShop();
  var amountProducts = 0;
  for (let i = 0; i < products.length; i++) {
    amountProducts = amountProducts + parseInt(products[i].quantity);
  }
  return (
    <div className="fixed  top-0  left-0 right-0 bg-white bg-opacity-60  backdrop-blur-md shadow z-10 dark:bg-gray-900  ">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4     ">
        <Link
          to="/"
          className="text-xl  font-semibold text-gray-700 dark:text-gray-200 "
        >
          Publitas assessment
        </Link>
        <ul className="flex  items-center  space-x-8  text-gray-700 dark:text-white">
          <Link to="/" className="hover:text-pink-700 hidden sm:block" href="/">
            Store
          </Link>
          <Link
            to="/catalog"
            className="hover:text-pink-700 hidden sm:block"
            href="/catalog"
          >
            Catalog
          </Link>

          <button onClick={() => toggle(!darkMode)}>
            {darkMode ? (
              <BsFillSunFill className="text-2xl text-[#32b3ed]" />
            ) : (
              <BsFillMoonStarsFill className="text-2xl" />
            )}
          </button>

          <div className="relative">
            <Link to="/cart" className="hover:text-pink-700" href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="absolute  -top-1 -right-1  rounded-full w-5 h-5 bg-pink-600  text-white flex justify-center items-center">
                {amountProducts}
              </span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
