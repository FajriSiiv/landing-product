import React from "react";
import icUserInfo from "/src/ic/ic-user-info.svg";

export default function About() {
  const CardAbout = () => {
    return (
      <div className="w-1/3 md:min-w-full">
        <div className="w-[95%] min-h-[200px] bg-[#0E1330] border-[#282D45] border-2 rounded-md p-5 mx-auto">
          <div className="w-full px-3">
            <img src={icUserInfo} alt="ic-user-info" className="w-10 h-10" />
          </div>
          <div className="flex flex-col gap-y-3 pt-3">
            <h3 className="text-xl font-medium">User Information</h3>
            <p className="text-sm font-light text-[#8F9BB7] leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias error magni cumque fugit ipsam quaerat.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen container mx-auto flex flex-col justify-center md:p-10">
      <div className="flex justify-between items-center md:flex-col">
        <h2 className="text-[40px] w-3/5 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 leading-tight md:text-4xl md:w-full">
          Powerful features to help you manage all your leads
        </h2>
        <p className="w-1/2 text-sm text-[#8F9BB7] md:w-full md:pt-3 md:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam
          debitis quasi ducimus, qui hic. Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-y-5 mt-10 w-full sm:flex-wrap">
        <CardAbout />
        <CardAbout />
        <CardAbout />
        <CardAbout />
        <CardAbout />
        <CardAbout />
      </div>
    </div>
  );
}
