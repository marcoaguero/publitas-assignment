import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import useShop from "../ShopContext";

const ProductDetails = () => {
  const { addToCart } = useShop();

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    const fetProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        console.log(data);
        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (e) {
        console.log(e);
      }
    };
    fetProduct();
  }, [id]);

  // const product = {
  //   id: 1,
  //   title: "iPhone 9",
  //   description: "An apple mobile which is nothing like apple",
  //   price: 549,
  //   discountPercentage: 12.96,
  //   rating: 4.69,
  //   stock: 94,
  //   brand: "Apple",
  //   category: "smartphones",
  //   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   images: [
  //     "https://i.dummyjson.com/data/products/1/1.jpg",
  //     "https://i.dummyjson.com/data/products/1/2.jpg",
  //     "https://i.dummyjson.com/data/products/1/3.jpg",
  //     "https://i.dummyjson.com/data/products/1/4.jpg",
  //     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   ],
  // };

  if (!product) return <ProductDetailsSkeleton />;

  return (
    product && (
      <div className="max-w-4xl mx-auto  py-20 p-4 md:p-8 dark:bg-slate-900 dark:text-white">
        <button className=" bg-pink-600 text-white py-2 px-4 mb-4  rounded-lg shadow hover:bg-pink-700 transition-colors duration-200">
          ← Go Back
        </button>
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
                ${product.price.toFixed()}
              </span>
              <span>
                {product.stock > 0
                  ? `${product.stock} in Stock`
                  : "Out of Stock"}
              </span>
            </div>
            {/* starts */}
            <div className="mb-4">
              <span className="text-yellow-500 text-lg">
                {"★".repeat(Math.round(product.rating))}
              </span>
              <span className="text-gray-200 text-lg">
                {"★".repeat(Math.round(5 - product.rating))}
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
