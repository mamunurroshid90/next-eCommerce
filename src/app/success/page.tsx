"use client";
import Container from "@/components/Container";
import { resetCart } from "@/redux/eCommerceSlice";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sessionId) {
      redirect("/"); // ✅ Correct: Runs AFTER component mounts
    } else {
      dispatch(resetCart());
      toast.success("Payment received successfully");
    }
  }, [sessionId, dispatch]);

  // Early return if no sessionId (avoids flash of content)
  if (!sessionId) {
    return null; // or a loading spinner
  }

  return (
    <Container>
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Your Payment Accepted by Next e-commerce
        </h2>
        <p className="text-base py-5">
          You can view your order or continue shopping with us
        </p>
        <div className="flex flex-wrap justify-center gap-y-5 md:gap-y-0 items-center gap-x-5">
          <Link href={"/orders"}>
            <button className="bg-themeColor/90 text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-themeColor duration-300">
              View Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-themeColor/90 text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-themeColor duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SuccessPage;
