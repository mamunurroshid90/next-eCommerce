import React from "react";
import { ProductType } from "../../type";
import PriceFormate from "./PriceFormate";

const ProductPrice = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discountPrice = (product?.price * product?.discountPercentage) / 100;
  return (
    <div className="flex items-center gap-2">
      <PriceFormate
        amount={discountPrice}
        className="text-gray-500 line-through font-normal"
      />
      <PriceFormate
        amount={regularPrice}
        className="font-semibold text-skyColor"
      />
    </div>
  );
};

export default ProductPrice;
