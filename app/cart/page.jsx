"use client";
import React, { Suspense, useContext, useMemo, useState } from "react";
import { cartContext } from "../_context/cartContext";
import SkeletonCart from "../_skeletons/SkeletonCart";
import cartApis from "../_utils/cartApis";
import Popus from "../_components/Popus";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const { cart, setCart } = useContext(cartContext);
  const [showPopus, setShowPopus] = useState({});
  const router = useRouter();

  // FUNTION DELETE BY ID ITEM
  const deleteCartItem_ = (id) => {
    setShowPopus({ show: true, id });
  };

  //FUNCTION CONFIRM DELETE
  const onConfirm = async () => {
    const id = showPopus.id;
    cartApis.deleteCartItem(id).then(async (res) => {
      if (res) {
        await setCart((oldCart) =>
          oldCart.filter((item) => item.id !== res?.data?.data?.id)
        );
      }
    });
    setShowPopus({ show: false, id: null });
  };

  //FUNCTION CANCEL DELETE
  const onCancel = () => {
    setShowPopus({ show: false, id: null });
  };

  // CALCULATE TOTAL PRICE
  const totalAmount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + Number(item?.course?.attributes?.price),
      0
    );
  }, [cart]);

  return (
    <section className="pt-[4rem]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-white sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            {!cart.length && (
              <h1 className="text-center text-[20px] text-gray-700">
                Your Cart is Empty
              </h1>
            )}

            <ul className="space-y-4">
              {cart?.map((item, index) => {
                return (
                  <Suspense fallback={<SkeletonCart />} key={index}>
                    <div>
                      {item?.course?.attributes?.image?.data?.attributes
                        ?.url && (
                        <li className="flex items-center gap-4">
                          <img
                            src={
                              item?.course?.attributes?.image?.data?.attributes
                                ?.url
                            }
                            alt="image-course"
                            className="size-20 rounded object-cover"
                          />

                          <div>
                            <h3 className="text-lg capitalize text-white">
                              {item?.course?.attributes?.title}
                            </h3>

                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                              <div>
                                <dt className="inline text-sm">Description:</dt>
                                <dd className="block capitalize ">
                                  {item?.course?.attributes?.description}
                                </dd>
                              </div>

                              <div>
                                <dt className="inline text-sm capitalize">
                                  category:
                                </dt>
                                <dd className="block capitalize">
                                  {item?.course?.attributes?.category}
                                </dd>
                              </div>
                            </dl>
                          </div>

                          <div className="flex flex-1 items-center justify-end gap-5">
                            <h2 className="text-primary font-bold">
                              ${item?.course?.attributes?.price}
                            </h2>

                            <button
                              onClick={() => deleteCartItem_(item?.id)}
                              className="text-gray-600 transition hover:text-red-600"
                            >
                              <span className="sr-only">Remove item</span>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </li>
                      )}
                    </div>
                  </Suspense>
                );
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-400">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£{totalAmount.toFixed(2)}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      router.push(`/checkout?amount=${totalAmount}`)
                    }
                    className="block rounded border border-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-primary"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-red-400 capitalize  ">
            Note:All courses will be sent via email.
          </h2>
        </div>
      </div>

      {showPopus.show && <Popus onConfirm={onConfirm} onCancel={onCancel} />}
    </section>
  );
};

export default page;
