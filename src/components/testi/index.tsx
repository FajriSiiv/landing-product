import React from "react";

export default function Testimonial() {
  const CardTesti = () => {
    return (
      <div className="w-1/3 relative md:w-2/3 md:mx-auto">
        <div className="absolute -bottom-5 left-0 w-full h-[100px] bg-gradient-to-r from-[#A64CE8]/30 to-[#C6FFE0]/30    rounded-lg border-[1px] border-slate-500"></div>
        <div className="w-[95%] relative mx-auto h-[300px] bg-[#0E1330] border-[1px] border-slate-700 rounded-lg p-8 flex flex-col gap-y-7">
          <div className="flex flex-col">
            <p className="text-xl font-medium mb-1">Muh.Fajri</p>
            <span className="text-sm text-slate-500">Frontend Developer</span>
          </div>
          <div className="">
            <p className="text-slate-100 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              nemo ipsum quas, reprehenderit nobis eius ducimus, nisi, omnis
              unde aperiam quidem labore
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl text-center font-semibold">
        What our clients say
      </h2>
      <p className="text-center text-sm text-slate-500 py-5 w-1/2 mx-auto md:w-4/5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        beatae suscipit quidem animi cupiditate cum dolorem. Lorem, ipsum dolor.
      </p>
      <div className="flex gap-10 pt-10 md:flex-col">
        <CardTesti />
        <CardTesti />
        <CardTesti />
      </div>
    </div>
  );
}
