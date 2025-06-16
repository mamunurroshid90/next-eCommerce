"use client";
import React, { useEffect, useState } from "react";
import Title from "../Title";
import PriceFormate from "../PriceFormate";
import { ProductType } from "../../../type";
import Button from "../Button";
import { useSession } from "next-auth/react";
import { loadStripe, StripeError } from "@stripe/stripe-js";

interface Props {
  cart: ProductType[];
}

const CartSummary = ({ cart }: Props) => {
  const [totalAmnt, setTotalAmnt] = useState(0);
  const [discountAmnt, setDiscountAmnt] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    let amnt = 0;
    let discount = 0;

    cart.forEach((item) => {
      const quantity = item.quantity || 1;
      amnt += item.price * quantity;
      discount += item.price * (item.discountPercentage / 100) * quantity;
    });

    setTotalAmnt(amnt);
    setDiscountAmnt(discount);
  }, [cart]);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: session?.user?.email,
      }),
    });

    const checkoutSession = await response.json();

    if (!checkoutSession?.id) {
      console.error("Failed to create checkout session");
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    if (result.error) {
      window.alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title>Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Sub Total</Title>
          <PriceFormate amount={totalAmnt} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Discount</Title>
          <PriceFormate amount={discountAmnt} />
        </div>
        <div className="flex items-center justify-between">
          <Title className="text-lg font-medium">Payable Amount</Title>
          <PriceFormate
            amount={totalAmnt - discountAmnt}
            className="text-lg font-bold"
          />
        </div>
        <Button onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartSummary;
