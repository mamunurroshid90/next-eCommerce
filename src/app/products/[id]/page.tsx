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
import Image from "next/image";
import { paymentImage } from "@/assets";

interface Props {
  params: {
    id: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;

  const endpoint = `https://dummyjson.com/products/${id}`;
  let product: ProductType | null = null;

  try {
    product = await getData(endpoint);
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return <div className="text-center py-10">Failed to load product</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <ProductImages images={product.images} />

      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <div className="flex items-center justify-between gap-5">
          <ProductPrice product={product} />
          <div className="flex items-center gap-1">
            <div className="text-base text-lightText flex items-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const filled = index + 1 <= Math.floor(product!.rating);
                const halfFilled =
                  index + 1 > Math.floor(product!.rating) &&
                  index < Math.ceil(product!.rating);
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
            <p className="text-base font-semibold">{`(${product.rating.toFixed(
              1
            )} reviews)`}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye className="mr-1" />
          <span className="font-semibold mr-1">250+</span> people are viewing
          this right now
        </p>
        <p>
          You are saving
          <PriceFormate
            amount={(product.price * product.discountPercentage) / 100}
            className="text-base font-semibold text-green-500 mx-2"
          />
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{product.description}</p>
          <p className="text-base">{product.warrantyInformation}</p>
        </div>
        <p>
          Brand: <span className="font-medium">{product.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-medium capitalize">{product.category}</span>
        </p>
        {product.tags && (
          <p>
            Tags:{" "}
            {product.tags.map((item, index) => (
              <span key={index} className="font-medium capitalize">
                {item}
                {index < product.tags!.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}
        <AddToCardButton
          product={product}
          className="rounded-md uppercase font-semibold"
        />
        <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
          <Image
            src={paymentImage}
            alt="payment methods"
            className="w-auto object-contain"
            priority
          />
          <p className="font-semibold">Guaranteed safe & secure checkout</p>
        </div>
      </div>

      {/* Product Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex flex-wrap items-center gap-10">
          {product.reviews.map((item) => (
            <div
              key={item.reviewerName}
              className="bg-white/80 p-5 border border-slate-100 rounded-md hover:border-slate-500 hover:bg-white duration-200 flex flex-col gap-1"
            >
              <p className="text-base font-semibold">{item.comment}</p>
              <div className="text-xs">
                <p className="font-semibold">{item.reviewerName}</p>
                <p>{item.reviewerEmail}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <MdStar
                      key={index}
                      className={`${
                        index < item.rating
                          ? "text-yellow-500"
                          : "text-lightText"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default SingleProductPage;
