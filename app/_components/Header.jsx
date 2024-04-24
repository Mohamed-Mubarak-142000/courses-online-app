"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import cartAnimate from "../../public/_lottie-react/cart.json";
import { usePathname } from "next/navigation";
import { cartContext } from "../_context/cartContext";
import cartApis from "../_utils/cartApis";
import Cart from "./Cart";
const Header = () => {
  const { user } = useUser();
  const pathname = usePathname(); // Get the current pathname
  const [showNavbar, setShowNavbar] = useState(true);
  const [openCart, setOpenCart] = useState(false);
  const [openmobile, setOpenmobile] = useState(false);
  const { cart, setCart } = useContext(cartContext);

  //Call
  const getItemsCart = () => {
    cartApis
      .getCartItemsByEmail(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("Response From Cart items", res?.data?.data);
        res?.data?.data.forEach((cartItem) => [
          setCart((oldCart) => [
            ...oldCart,
            { id: cartItem.id, course: cartItem?.attributes?.courses?.data[0] },
          ]),
        ]);
      });
  };

  useEffect(() => {
    user && getItemsCart();
  }, [user]);

  // Use effect to update showNavbar based on whether pathname includes "sign-in"
  useEffect(() => {
    setShowNavbar(!pathname.includes("sign-in"));
  }, [pathname]); // Include pathname in the dependency array

  // If showNavbar is false, do not render the navbar
  if (!showNavbar) {
    return null;
  }

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-40">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-2">
            <h1 className="text-white text-[20px] uppercase">
              <span className="text-primary">Cou</span>rses
            </h1>
            <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Explore
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {!user ? (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium hover:bg-primaryHover text-white shadow"
                    href="/sign-in"
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="#"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <section className="flex items-center gap-10 ">
                {/*shopping cart */}
                <div
                  className="relative w-10 h-7 cursor-pointer"
                  onClick={toggleCart}
                >
                  <Lottie animationData={cartAnimate} />
                  <span className="bg-primary absolute top-[-15px] right-[-10px] flex items-center justify-center w-5 h-5 text-sm rounded-full ">
                    {cart?.length}
                  </span>
                  {openCart && <Cart />}
                </div>
                {/*button sign in / out*/}
                <div className="border border-primary rounded-full w-8 h-8 flex items-center justify-center">
                  <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton />
                  </SignedIn>
                  <SignedOut>
                    {/* Signed out users get sign in button */}
                    <SignInButton />
                  </SignedOut>
                </div>
                <div className="block md:hidden relative">
                  <button
                    onClick={() => setOpenmobile(!openmobile)}
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>

                  {openmobile && (
                    <div
                      onClick={() => setOpenmobile(!openmobile)}
                      className="w-[400px] shadow-2xl border-2 border-primary h-screen absolute  p-2 top-10 right-[-10px] -z-50 bg-gray-900 opacity-95 flex flex-col justify-center items-center gap-5"
                    >
                      <Link
                        className="w-full text-center p-2 hover:font-bold hover:bg-slate-700 rounded duration-150 "
                        href={"/"}
                      >
                        Home
                      </Link>
                      <Link
                        className="w-full text-center p-2 hover:font-bold hover:bg-slate-700 rounded duration-150 "
                        href={"/"}
                      >
                        Explore
                      </Link>
                      <Link
                        className="w-full text-center p-2 hover:font-bold hover:bg-slate-700 rounded duration-150 "
                        href={"/"}
                      >
                        Projects
                      </Link>
                      <Link
                        className="w-full text-center p-2 hover:font-bold hover:bg-slate-700 rounded duration-150 "
                        href={"/"}
                      >
                        About
                      </Link>
                      <Link
                        className="w-full text-center p-2 hover:font-bold hover:bg-slate-700 rounded duration-150 "
                        href={"/"}
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>{" "}
              </section>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
