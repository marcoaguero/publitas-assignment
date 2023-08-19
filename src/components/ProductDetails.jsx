import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import useShop from "../ShopContext";
import { fetchProduct } from "../services";

const ProductDetails = () => {
  const { addToCart } = useShop();

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    fetchProduct(id).then((data) => {
      setProduct(data);
      setMainImage(data.thumbnail);
    });
  }, [id]);

  console.log(product);

  if (!product) return <ProductDetailsSkeleton />;

  return (
    product && (
      <div className="max-w-4xl mx-auto  py-20 p-4 md:p-8 dark:bg-slate-900 dark:text-white">
        <Link
          to="/products"
          className="hover:text-pink-700 hidden sm:block "
          href="/products"
        >
          <button className=" bg-pink-600 text-white py-2 px-4 mb-4  rounded-lg shadow hover:bg-pink-700 transition-colors duration-200">
            ← Go Back
          </button>
        </Link>
        <h1 className="text-3xl font-bold mb-6">{product.title}</h1>
        <div className="md:flex">
          <div className="md:w-1/2 mb-6 pr-4  md:mb-0">
            {/* Big-image */}
            <img
              className="w-full h-96 object-cover rounded-lg shadow-md  "
              src={mainImage}
              alt={product.title}
            />

            {/* image Gallery */}
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {product?.images?.map((img, index) => (
                <img
                  onClick={() => setMainImage(img)}
                  className="w-24 h-24  object-cover rounded-lg shadow cursor-pointer"
                  key={index}
                  src={img}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 pl-4">
            {/* description */}
            <p className="text-gray-600 mb-4 ">{product.description}</p>
            {/* price & stock */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-pink-600 font-semibold text-2xl">
                ${product.price}
              </span>
            </div>
            {/* button */}
            <button
              onClick={() => addToCart(product)}
              className="w-full md:w-72 py-2 px-5 rounded-lg bg-pink-600 text-white shadow hover:bg-pink-900 transition-colors duration-200 "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
