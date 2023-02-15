import React from "react";
import imgContent from "/public/heroimage.jpg";

export default function MainContent() {
  return (
    <div className="container mx-auto h-screen relative">
      <div className="flex flex-col h-full justify-center items-center pt-20">
        <h1 className="text-[42px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 leading-relaxed">
          A CRM dashboard for engineering teams
        </h1>
        <p className="text-light w-1/2 text-center text-[#8F9BB7]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magnam
          distinctio nostrum minus et nihil!
        </p>
        <div className="flex gap-20 pt-8 text-xs">
          <button className="py-3 px-7 bg-[#7214FF] rounded-full">
            Get a Demo
          </button>
          <button className="py-3 px-7 bg-transparent border-[1px] border-[#282D45] rounded-full">
            View Pricing
          </button>
        </div>
        <div className="w-3/4 pt-5 flex justify-center">
          <img alt="" src={imgContent} className="w-3/4 scale-95" />
        </div>
      </div>
      <div className="h-[250px] w-[250px] rounded-full absolute left-0 top-1/2 -translate-y-1/2 bg-[#7214FF] blur-[250px] z-20"></div>
      <div className="h-[250px] w-[250px] rounded-full absolute right-0 top-1/2 -translate-y-1/2 bg-[#7214FF] blur-[250px] z-20"></div>
    </div>
  );
}
