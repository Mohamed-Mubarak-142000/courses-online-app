import React from "react";

const SkeletonCourseList = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="w-[280px] h-[283px] bg-[#1f2b46] rounded-lg animate-pulse"></div>
      <div className="w-[280px] h-[30px] bg-[#1f2b46] rounded-lg animate-pulse"></div>
      <div className="flex items-center justify-between">
        <div className="w-[100px] h-[30px] bg-[#1f2b46] rounded-lg animate-pulse"></div>
        <div className="w-[100px] h-[30px] bg-[#1f2b46] rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCourseList;
