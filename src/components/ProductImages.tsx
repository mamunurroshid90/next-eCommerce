"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: string[];
}

const ProductImages = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(images?.[0]);
  return (
    <div className="flex float-start">
      <div>
        {images?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="productImage"
            width={200}
            height={200}
            className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-150 border border-gray-200 mb-1 p-1 rounded-sm ${
              currentImage === item && "border-gray-500 opacity-100"
            }`}
            onClick={() => setCurrentImage(item)}
          />
        ))}
      </div>
      <div className="bg-gray-100 rounded-md ml-5 w-full max-h-[550px]">
        <Image
          src={currentImage}
          alt="Product-images"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
