import React from "react";

const SkeletonCart = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <div className="bg-[#1f2b46] size-16 rounded animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#1f2b46] w-10 h-3 rounded animate-pulse"></div>
          <div className="bg-[#1f2b46] w-12 h-3 rounded animate-pulse"></div>
          <div className="bg-[#1f2b46] w-11 h-3 rounded animate-pulse"></div>{" "}
          <div className="bg-[#1f2b46] w-8 h-3 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-[#1f2b46] w-8 h-3 rounded animate-pulse"></div>
        <div className="bg-[#1f2b46] w-8 h-3 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCart;
