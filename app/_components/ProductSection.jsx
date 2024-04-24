"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductAPIS from "../_utils/productAPIS";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";

const ProductSection = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllProducts_ = () => {
    setLoading(true);
    ProductAPIS.getAllProducts().then((res) => {
      console.log("first", res.data.data);
      setAllCourses(res.data.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    getAllProducts_();
  }, []);
  return (
    <div className="px-10 md:px-40">
      <h1 className="my-6 capitalize font-extrabold text-3xl flex gap-1 border-b-2 border-primary w-fit text-center mx-auto">
        <FaQuoteLeft className="text-gray-700" />
        Our latest courses
        <FaQuoteRight className="text-gray-700" />
      </h1>
      <ProductList allCourses={allCourses} loading={loading} />
    </div>
  );
};

export default ProductSection;
