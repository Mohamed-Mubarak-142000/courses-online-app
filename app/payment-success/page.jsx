"use client";
import Lottie from "lottie-react";
import React from "react";
import successAnimate from "../../public/_lottie-react/success.json";
import Link from "next/link";
const page = () => {
  return (
    <div className="py-[5rem] flex justify-center items-center flex-col gap-4">
      <div className="w-[350px] h-[350px]">
        <Lottie animationData={successAnimate} />
      </div>
      <h2 className="capitalize text-[22px] ">payment successfull.!</h2>
      <h4 className="capitalize text-gray-400 text-center">
        we sent an email with your order confirmation along with digital
        content.!
      </h4>

      <Link
        href="/"
        className="capitalize py-2 px-20 bg-primary rounded hover:bg-primaryHover text-white "
      >
        go back home
      </Link>
    </div>
  );
};

export default page;
