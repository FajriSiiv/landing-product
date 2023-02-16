import React from "react";

export default function Header() {
  return (
    <div className="flex justify-around items-center container pt-5 pb-3 fixed -translate-x-1/2  left-1/2 z-20 bg-[#060B27]">
      <div>
        <p className="text-3xl font-bold">Product.</p>
      </div>
      <div className="flex gap-10 text-sm">
        <p className="font-light ">Home</p>
        <p className="font-light ">Home</p>
        <p className="font-light ">Home</p>
        <p className="font-light ">Home</p>
      </div>
      <button className="py-3 px-6 bg-[#7214FF] rounded-full text-white text-sm">
        Get a Demo
      </button>
    </div>
  );
}
