import React from "react";

const OrderCard = ({ children, order, title, style }) => {
  // Define different colors for each order to create variety
  const getOrderColors = (orderNum) => {
    switch(orderNum) {
      case 1: return "bg-cosmic-pink text-white";
      case 2: return "bg-cosmic-coral text-white";
      case 3: return "bg-cosmic-cyan text-black";
      case 4: return "bg-cosmic-gradient text-white";
      default: return "bg-cosmic-pink text-white";
    }
  };

  const getHoverDecoration = (orderNum) => {
    switch(orderNum) {
      case 1: return "group-hover:decoration-cosmic-pink";
      case 2: return "group-hover:decoration-cosmic-coral";
      case 3: return "group-hover:decoration-cosmic-cyan";
      case 4: return "group-hover:decoration-cosmic-pink";
      default: return "group-hover:decoration-cosmic-pink";
    }
  };

  return (
    <div className={`group relative block min-h-60 w-full ${style} transition-transform	hover:scale-110`}>
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative h-full transform p-2 border-2 border-black bg-white transition-transform -translate-x-2 -translate-y-2 shadow-lg shadow-gray-500">
        <div className={`absolute -left-5 -top-5 border border-black rounded-full w-20 h-20 flex justify-center items-center text-4xl font-semibold font-stopbuck ${getOrderColors(order)}`}>
          <span className="text-center">{order}</span>
        </div>

        <div className="p-4 transition-opacity relative opacity-100 sm:p-6 lg:p-8 font-mono">
          <h3 className={`mt-1 text-2xl text-center font-medium sm:text-2xl uppercase font-stopbuck text-[#3d332b] group-hover:underline ${getHoverDecoration(order)}`}>
            {title}
          </h3>

          <p className="mt-4 text-lg text-justify flex justify-center text-black">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
