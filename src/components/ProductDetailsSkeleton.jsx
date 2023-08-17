const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto my-20 p-4 md:p-8 animate-pulse">
      <button className="w-1/2 h-10 bg-gradient-to-r from-gray-200 to-gray-300 "></button>
      <div className="w-24 h-10 bg-gradient-to-r from-gray-200 to-gray-300  mb-2"></div>

      <div className="md:flex">
        <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
          <div className="w-full h-96 bg-gradient-to-r from-gray-200 to-gray-300  "></div>
          <div className="flex overflow-x-hidden space-x-2">
            <div className="w-24 h-24 mt-4  bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg "></div>
            <div className="w-24 h-24 mt-4  bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg "></div>
            <div className="w-24 h-24 mt-4  bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg "></div>
            <div className="w-24 h-24 mt-4  bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg "></div>
            <div className="w-24 h-24 mt-4  bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg "></div>
          </div>
        </div>
        <div className="w-1/2 pl-4 space-y-4">
          <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          {/* price & stock */}
          <div className="flex justify-between ">
            <div className="w-1/4 h-8 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-1/4 h-8 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          </div>
          {/* stars */}
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          </div>
          {/* add to cart */}
          <div className="w-1/2 h-10 bg-gradient-to-r from-gray-200 to-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
