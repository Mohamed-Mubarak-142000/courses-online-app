"use client";
import React, { useContext, useState } from "react";
import { cartContext } from "../_context/cartContext";
import Link from "next/link";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  return (
    <div
      className="absolute right-0 overflow-auto h-[350px] rounded-md shadow-lg w-screen max-w-sm border border-primary bg-gray-900 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        {!cart?.length && (
          <h2 className="text-gray-500 text-[18px] text-center mt-2">
            Your Cart is Empty
          </h2>
        )}
        <ul className="space-y-4">
          {cart?.map((item) => {
            return (
              <li className="flex items-center gap-4">
                <img
                  src={item?.course?.attributes?.image?.data?.attributes?.url}
                  alt="image-course"
                  className="size-16 rounded object-cover"
                />

                <div>
                  <h3 className="text-sm text-white">
                    {item?.course?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Category:</dt>
                      <dd className="inline line-clamp-1">
                        {item?.course?.attributes?.category}
                      </dd>
                    </div>

                    <div>
                      <dt className="inline">Price:</dt>
                      <dd className="inline font-bold text-gray-400">
                        ${item?.course?.attributes?.price}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label htmlFor="Line1Qty" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600">
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
            );
          })}
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href="/cart"
            className="block rounded border border-primary px-5 py-3 text-sm text-white transition hover:ring-1 hover:ring-primary"
          >
            View my cart ({cart?.length})
          </Link>

          <a
            href="#"
            className="block rounded bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-primaryHover"
          >
            Checkout
          </a>

          <Link
            href="/"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
