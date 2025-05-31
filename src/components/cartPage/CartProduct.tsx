import React from "react";
import { ProductType } from "../../../type";
import Link from "next/link";
import Image from "next/image";

const CartProduct = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="h-24 w-24 sm:h-48 sm:w-48 border border-skyColor/30 hover:border-skyColor overflow-hidden flex items-center justify-center rounded-md"
      >
        <Image
          src={product?.images[0]}
          alt="productImage"
          width={300}
          height={300}
          className="h-full w-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200"
        />
      </Link>
    </div>
  );
};

export default CartProduct;
