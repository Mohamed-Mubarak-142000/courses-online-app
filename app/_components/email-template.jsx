"use client";
import { useUser } from "@clerk/nextjs";
import * as React from "react";

export const EmailTemplate = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="flex-1 md:flex md:items-center md:gap-2">
        <h1 className="text-white text-[20px] uppercase">
          <span className="text-primary">Cou</span>rses
        </h1>
        <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
      </div>

      <h1>Welcome, {user.fullName}!</h1>
      <h2>Your Orders:All Courses Will Be Sent Via Email.</h2>
    </div>
  );
};
