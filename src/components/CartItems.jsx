import { GoTrash } from "react-icons/go";
import Payments from "./Payments";
import useShop from "../ShopContext";
const CartItems = () => {
  const { products, updatedProductQuantity, removeFromCart } = useShop();

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6  lg:space-y-0 lg:space-x-6 dark:bg-slate-900 dark:text-white">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-4">
          {products.length > 0
            ? "Your cart items"
            : "Your cart is empty right now please go a head and add some items"}{" "}
        </h1>

        {products.map((product) => (
          <div key={product.id} className="flex flex-start space-x-4 mb-4  ">
            <img
              className="w-24 h-24 object-cover rounded-lg  "
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="flex flex-col justify-between flex-1">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {/* quantity & price */}
              <div className="flex items-center justify-between mt-2">
                {/* price & quantity */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-pink-600 ">
                    ${product.price}
                  </span>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-semibold" htmlFor="quantity">
                      Quantity:
                    </label>
                    <input
                      defaultValue={product.quantity}
                      onChange={(e) =>
                        updatedProductQuantity(product, e.target.value)
                      }
                      className="w-14 border border-gray-200 rounded-sm p-2 text-center dark:border-gray-900 dark:text-black"
                      type="number"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product)}
                  className="text-red-500 hover:text-red-700  transition-colors duration-200  ease-in-out"
                >
                  <GoTrash className=" w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Payments />
    </div>
  );
};

export default CartItems;
