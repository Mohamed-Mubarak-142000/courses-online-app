"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../_checkoutForm/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIP_PUBLIC_KEY);

const page = () => {
  const searchParams = useSearchParams();

  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get("amount")),
  };
  return (
    <div className="pt-[5rem]">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm amount={Number(searchParams.get("amount"))} />
      </Elements>
    </div>
  );
};

export default page;
