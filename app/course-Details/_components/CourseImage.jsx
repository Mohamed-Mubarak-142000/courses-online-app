import Image from "next/image";
import React from "react";
import SkeletonImage from "../../_skeletons/SkeletonImage";

const CourseImage = ({ course }) => {
  return (
    <div>
      {course?.id ? (
        <Image
          src={course?.attributes?.image?.data?.attributes?.url}
          width={450}
          height={400}
          alt="image-course"
          className="h-[400px] object-cover rounded-lg"
        />
      ) : (
        <SkeletonImage />
      )}
    </div>
  );
};

export default CourseImage;
