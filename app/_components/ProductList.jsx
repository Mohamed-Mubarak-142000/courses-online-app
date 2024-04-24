import React from "react";
import OneCourse from "./OneCourse";

const ProductList = ({ allCourses, loading }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 mt-20">
      {allCourses.map((course) => (
        <OneCourse key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ProductList;
