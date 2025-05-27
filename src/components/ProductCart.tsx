import React from "react";
import { ProductType } from "../../type";
import Link from "next/link";
import Image from "next/image";

const ProductCart = ({ product }: { product: ProductType }) => {
  return (
    <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md group overflow-hidden relative">
      {/* image */}
      <Link href={"/products"}>
        <Image
          src={product?.images[0]}
          alt="product-image"
          width={500}
          height={500}
          priority={true}
          className="w-full h-64 object-contain hover:scale-110 duration-300"
        />
        <p className="absolute top-2 right-2 bg-orange-500 text-white py-1 px-2 text-xs rounded-md">
          {product?.discountPercentage}%
        </p>
      </Link>
      {/* description */}
    </div>
  );
};

export default ProductCart;
