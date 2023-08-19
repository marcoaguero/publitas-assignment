import useShop from "../ShopContext";

const Payments = () => {
  const { total } = useShop();

  return (
    <div className="lg:w-1/3 ">
      <div className="border p-4 rounded-lg">
        {/* subtotal - total */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-lg font-semibold">SubTotal</span>
          <span className="text-gray-600 font-semibold text-2xl">{total}</span>
        </div>

        <div className="mt-4">
          <button className="w-full bg-pink-600 text-white  px-5 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200 ">
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
