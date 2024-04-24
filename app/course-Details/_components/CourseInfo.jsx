import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { LuBadgeCheck } from "react-icons/lu";
import { TbAlertOctagonFilled } from "react-icons/tb";
import SkeletonInfo from "../../_skeletons/SkeletonInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApis from "../../_utils/cartApis";
import { cartContext } from "../../_context/cartContext";

const CourseInfo = ({ course }) => {
  const { user } = useUser();
  const route = useRouter();
  const { cart, setCart } = useContext(cartContext);
  const handleClickAddToCart = () => {
    if (!user) {
      route.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          courses: [course?.id],
        },
      };
      cartApis
        .addToCart(data)
        .then((res) => {
          console.log("cart created successfully", res?.data?.data);
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              course: course,
            },
          ]);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  return (
    <div className="leading-10 mt-5 capitalize">
      {course?.id ? (
        <>
          <h2>{course?.attributes?.title}</h2>
          <h2 className="text-gray-500">{course?.attributes?.category}</h2>
          <h2 className="line-clamp-3">{course?.attributes?.description}</h2>
          <span className="text-gray-500 capitalize font-[12px] flex items-center gap-2">
            {course?.attributes?.checkDelivery ? (
              <LuBadgeCheck color="green" />
            ) : (
              <TbAlertOctagonFilled color="gold" />
            )}
            eligable for instant delivery
          </span>
          <h2 className="text-primary text-[22px] my-4">
            $ {course?.attributes?.price}
          </h2>

          <button
            onClick={handleClickAddToCart}
            className="bg-primary text-white flex items-center justify-center rounded-lg capitalize text-[18px] gap-2 py-1 w-1/2 hover:bg-primaryHover"
          >
            <MdShoppingCart />
            add to cart
          </button>
        </>
      ) : (
        <SkeletonInfo />
      )}
    </div>
  );
};

export default CourseInfo;
