import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="border border-lg overflow-hidden shadow-sm hover:shadow-lg  transition-shadow duration-200 ease-in dark:bg-slate-900 dark:text-white"
      key={product.id}
    >
      <img
        className="w-full h-48 object-cover "
        src={product.thumbnail}
        alt="productImage"
      />
      <div className="p-4">
        <h1 className="font-bold text-xl mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4 truncate">{product.description}</p>
        <div className="flex justify-between">
          <span className="text-blue-500 font-semibold ">${product.price}</span>
        </div>

        <div className="mt-4"></div>
      </div>
    </Link>
  );
};

export default ProductItem;
