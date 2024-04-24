"use client";
import React, { useEffect, useState } from "react";
import productAPIS from "../../_utils/productAPIS";
import BreadCumb from "../../_components/BreadCumb";
import CourseImage from "../_components/CourseImage";
import CourseInfo from "../_components/CourseInfo";
import { usePathname } from "next/navigation";
import ProductList from "../../_components/ProductList";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const pageDetails = ({ params }) => {
  const [courseDetails, setCourseDetails] = useState({});
  const [coursesList, setCoursesList] = useState([]);
  const path = usePathname();
  const pathRes = path.split("/");
  console.log("first", pathRes);

  /**GET ONE PRODUCT BY ID ***/
  const getSingleProductByID_ = () => {
    productAPIS.getSingleProductByID(params?.courseID).then((res) => {
      console.log(res.data.data);
      setCourseDetails(res?.data?.data);
      getAllCoursesByCategory_(res?.data?.data);
    });
  };

  /**GET ALL PRODUCT BY CATEGORY ***/
  const getAllCoursesByCategory_ = (course) => {
    productAPIS
      .getAllCoursesByCategory(course?.attributes?.category)
      .then((res) => {
        setCoursesList(res?.data?.data);
      });
  };

  useEffect(() => {
    getSingleProductByID_();
  }, [params?.courseID]);

  return (
    <div className="pt-[5rem] w-[70%] 800px:w-[90%] mx-auto">
      <BreadCumb path={pathRes} />
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around mt-10 py-10">
        <CourseImage course={courseDetails} />
        <CourseInfo course={courseDetails} />
      </div>

      <div className="mt-24">
        <h1 className="my-6 capitalize font-extrabold text-3xl flex gap-1 border-b-2 border-primary w-fit text-center mx-auto">
          <FaQuoteLeft className="text-gray-700" />
          similar courses
          <FaQuoteRight className="text-gray-700" />
        </h1>{" "}
        <ProductList allCourses={coursesList} />
      </div>
    </div>
  );
};

export default pageDetails;
