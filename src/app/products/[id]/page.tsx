import Container from "@/components/Container";
import ProductImages from "@/components/ProductImages";
import { getData } from "@/helpers";
import React from "react";
import { ProductType } from "../../../../type";
import ProductPrice from "@/components/ProductPrice";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import PriceFormate from "@/components/PriceFormate";
import AddToCardButton from "@/components/AddToCardButton";

interface Props {
  params: {
    id: string;
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const awaitedParams = await params;
  const { id } = awaitedParams;

  const endpoint = `https://dummyjson.com/products/${id}`;
  const product: ProductType = await getData(endpoint);
  //   console.log(product);
  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <ProductImages images={product?.images} />
      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product?.title}</h2>
        <div className="flex items-center justify-between gap-5">
          <ProductPrice product={product} />
          <div className="flex items-center gap-1">
            <div className="text-base text-lightText flex items-center">
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);
                return (
                  <MdStar
                    key={index}
                    className={`${
                      filled
                        ? "text-[#fa8900]"
                        : halfFilled
                        ? "text-[#f7ca00]"
                        : "text-lightText"
                    }`}
                  />
                );
              })}
            </div>
            <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
              1
            )} reviews) `}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye className="mr-1" />
          <span className="font-semibold mr-1">250+</span> peoples are viewing
          this right now
        </p>
        <p>
          You are saving
          <PriceFormate
            amount={product?.discountPercentage / 100}
            className="text-base font-semibold text-green-500 mx-2"
          />
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{product?.description}</p>
          <p className="text-base">{product?.warrantyInformation}</p>
        </div>
        <p>
          Brand: <span className="font-medium">{product?.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-medium capitalize">{product?.category}</span>
        </p>
        <p>
          Tags:{" "}
          {product?.tags?.map((item, index) => (
            <span key={index} className="font-medium capitalize">
              {item}
              {index < product?.tags?.length - 1 && ", "}
            </span>
          ))}
        </p>
        <AddToCardButton />
      </div>
      {/* Product Reviews */}
    </Container>
  );
};

export default SingleProductPage;
