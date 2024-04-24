"use client";
import Lottie from "lottie-react";
import React from "react";
import loadingAnimate from "../public/_lottie-react/loadingAnimate.json";
const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1000] bg-[#11141dbe] flex items-center justify-center ">
      <Lottie animationData={loadingAnimate} className="w-[100px]" />
    </div>
  );
};

export default Loading;
