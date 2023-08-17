import useShop from "../ShopContext";

const Payments = () => {
  const { total } = useShop();

  return (
    <div className="lg:w-1/3 ">
      <div className="border p-4 rounded-lg">
        <h2 className="text-2xl font-semibold">Choose Payment Method</h2>

        <div className="space-y-4">
          <label htmlFor="" className="flex items-center space-x-2">
            <input type="radio" name="payment" className="text-pink-600" />
            <span>Card Payment</span>
          </label>
          <label htmlFor="" className="flex items-center space-x-2">
            <input type="radio" name="payment" className="text-pink-600" />
            <span>Cash On Delivery </span>
          </label>
        </div>

        {/* subtotal - total */}
        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 text-lg font-semibold">
              SubTotal
            </span>
            <span className="text-gray-600 font-semibold text-2xl">
              {total}
            </span>
          </div>

          <div className="mt-4">
            <button className="w-full bg-pink-600 text-white  px-5 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200 ">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
