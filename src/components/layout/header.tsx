import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function Header() {
  const [bar, setBar] = useState(true);

  const barClick = () => {
    if (bar) {
      setBar(false);
    } else {
      setBar(true);
    }
  };

  return (
    <div
      className="flex justify-between items-center pt-5 pb-3 fixed -translate-x-1/2  left-1/2  
    bg-[#060B27] z-[99] px-10 w-full"
    >
      <div className="w-1/3">
        <p className="text-3xl font-bold">Product.</p>
      </div>
      <div
        className={`flex justify-between w-2/3 items-center md:fixed md:flex-col md:h-screen md:justify-center md:top-0 md:left-0 md:gap-y-5 md:bg-[#060B27] md:w-full transition-all text-center ${
          bar ? "md:-translate-y-full" : "md:translate-y-0"
        }`}
      >
        <div className="flex gap-10 text-sm md:flex-col">
          <p className="font-light ">Home</p>
          <p className="font-light ">Product</p>
          <p className="font-light ">About</p>
          <p className="font-light ">Testimonial</p>
        </div>
        <button className="py-3 px-6 bg-[#7214FF] rounded-full text-white text-sm">
          Get a Demo
        </button>
      </div>
      <div className="hidden md:block z-[100]">
        <HiOutlineBars3BottomRight className="w-6 h-6" onClick={barClick} />
      </div>
    </div>
  );
}
