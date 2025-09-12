import MyButton from "atoms/borderedButton";
import React from "react";
import { Link } from "react-router-dom";
import Button from "atoms/button";

export default function ErrorPage() {
  return (
    <div className="md:min-h-[90vh] min-h-[80vh] flex gap-3 flex-col justify-center items-center  blade-top-padding bg-gradient-to-b from-darkCyan via-transparent to-transparent">
      <h1 className="font-lato-bold text-darkGreen ">Coming Soon</h1>
      {/* <Link
        to="/"
        className="font-lato-regular text-darkGreen opacity-80 hover:opacity-100 underline transition-all duration-300 text-2xl underline-offset-4"
      >
        Visit Homepage
      </Link> */}
      <div className="mt-2">
        <Button text={"Visit Homepage"} classes="px-8 !py-2" />
      </div>
    </div>
  );
}
