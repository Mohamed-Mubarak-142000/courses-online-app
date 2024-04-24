"use client";
import { SignIn } from "@clerk/nextjs";
import Lottie from "lottie-react";
import Image from "next/image";
import animate from "../../../../public/_lottie-react/animate.json";
export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className=" flex flex-col pt-20 items-center h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="h-[400px] w-[500px] flex items-center ">
            <Lottie animationData={animate} />
          </div>

          <div className="hidden lg:relative lg:block lg:p-12">
            <div className="flex-1 md:flex md:items-center md:gap-2">
              <h1 className="text-white text-[40px] font-bold uppercase">
                <span className="text-primary">Cou</span>rses
              </h1>
              <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
            </div>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Courses Online 🦑
            </h2>

            <p className="mt-2 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <div className="flex md:flex md:items-center md:gap-2">
                <h1 className="text-white text-[20px] font-bold uppercase">
                  <span className="text-primary">Cou</span>rses
                </h1>
                <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
              </div>

              <h1 className="mt-2 text-xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Welcome to Courses Online 🦑
              </h1>

              <p className="mt-4 leading-5 text-[15px] text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
            <SignIn path="/sign-in" />
          </div>
        </main>
      </div>
    </section>
  );
}
