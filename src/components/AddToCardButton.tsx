"use client";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../../type";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/eCommerceSlice";

const AddToCardButton = ({
  product,
  className,
}: {
  product: ProductType;
  className?: string;
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };
  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2",
        className
      )}
    >
      Add to Cart
    </button>
  );
};

export default AddToCardButton;
