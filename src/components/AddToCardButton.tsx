"use client";
import { twMerge } from "tailwind-merge";
import { ProductType, StateType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/eCommerceSlice";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

const AddToCardButton = ({
  product,
  className,
}: {
  product: ProductType;
  className?: string;
}) => {
  const { cart } = useSelector((state: StateType) => state.eCommerce);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === product.id);
    setExistingProduct(availableProduct || null);
  }, [cart, product]);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title.substring(0, 10)}... added successfully`);
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
            onClick={() => {
              dispatch(decreaseQuantity(product.id));
              toast.success("Quantity decreased successfully");
            }}
            disabled={!existingProduct || existingProduct.quantity! <= 1}
            className="bg-[#f7f7f7] text-black p-2 border border-gray-200 hover:border-sky-300 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct.quantity}
          </p>
          <button
            onClick={() => {
              dispatch(increaseQuantity(product.id));
              toast.success("Quantity increased successfully");
            }}
            className="bg-[#f7f7f7] text-black p-2 border border-gray-200 hover:border-sky-300 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2",
            className
          )}
        >
          Add to Cart
        </button>
      )}
    </>
  );
};

export default AddToCardButton;
