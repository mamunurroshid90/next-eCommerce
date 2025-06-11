"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import PriceFormate from "../PriceFormate";
import { ProductType } from "../../../type";
import Button from "../Button";
import toast from "react-hot-toast";

interface Props {
  cart: ProductType[];
}

const CartSummary = ({ cart }: Props) => {
  const [totalAmnt, setTotalAmnt] = useState(0);
  const [discountAmnt, setDiscountAmnt] = useState(0);

  useEffect(() => {
    let amnt = 0;
    let discount = 0;
    cart?.map((item) => {
      amnt += item?.price * item?.quantity!;
      discount += ((item?.price * item?.quantity!) / 100) * item?.quantity!;
    });
    setTotalAmnt(amnt);
    setDiscountAmnt(discount);
  }, [cart]);

  const handleCheckout = () => {
    toast.success("Checkout is coming soon..");
  };

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Sub Total</Title>
          <PriceFormate amount={totalAmnt}></PriceFormate>
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Discount</Title>
          <PriceFormate amount={discountAmnt}></PriceFormate>
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Payable Amount</Title>
          <PriceFormate
            amount={totalAmnt - discountAmnt}
            className="text-lg font-bold"
          ></PriceFormate>
        </div>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartSummary;
