import React from "react";

const SkeletonInfo = () => {
  return (
    <section className="flex flex-col justify-start gap-7">
      <div className="bg-[#1f2b46] w-[450px] h-[30px] rounded-lg animate-pulse"></div>
      <div className="bg-[#1f2b46] w-[100px] h-[30px] rounded-lg animate-pulse"></div>
      <div className="bg-[#1f2b46] w-[400px] h-[30px] rounded-lg animate-pulse"></div>
      <div className="bg-[#1f2b46] w-[350px] h-[30px] rounded-lg animate-pulse"></div>
      <div className="bg-[#1f2b46] w-[250px] h-[30px] rounded-lg animate-pulse"></div>
      <div className="bg-[#1f2b46] w-[200px] h-[30px] rounded-lg animate-pulse"></div>
    </section>
  );
};

export default SkeletonInfo;
