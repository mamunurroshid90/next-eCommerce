import React from "react";
import Title from "../Title";
import PriceFormate from "../PriceFormate";

const CartSummary = () => {
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>
      <div>
        <div>
          <Title className="text-lg font-medium">Sub Total</Title>
          <PriceFormate amount={100}></PriceFormate>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
