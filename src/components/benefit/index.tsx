import React from "react";
import phoneImg from "/src/img/phone-image.png";
import columnPrev from "/src/img/column-prev-img.png";
import benetImg from "/src/img/benet-img.png";
import ButtonColour from "../button/buttonColour";
import ButtonTrans from "../button/buttonTransparent";
import { MdMarkEmailRead, MdOutlineEventAvailable } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { HiDocument } from "react-icons/hi";

export default function Benefit() {
  return (
    <div className="container mx-auto min-h-screen pb-10">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h2 className="text-4xl md:text-2xl">
          Essential apps that protect your
        </h2>
        <div className="flex gap-x-3 text-4xl md:text-xl">
          <span className="flex  gap-x-1 items-center">
            <MdMarkEmailRead className="text-white" />
            Email,
          </span>
          <span className="flex  gap-x-1 items-center">
            <MdOutlineEventAvailable className="text-white" />
            Event,
          </span>
          <span className="flex  gap-x-1 items-center">
            <GoFileSubmodule className="text-white" />
            Files,
          </span>
          <span className="flex  gap-x-1 items-center">
            <HiDocument className="text-white" />
            Documents
          </span>
        </div>
      </div>
      <div className="mt-10 relative">
        <div className="rounded-lg w-full min-h-[400xp] p-10 bg-transparent border-2 border-slate-800 flex items-center relative overflow-hidden md:flex-col">
          <div className="h-[300px] w-[300px] rounded-full absolute left-0 top-full -translate-y-1/2 bg-[#7214FF] blur-[200px] z-20"></div>
          <div className="h-[300px] w-[300px] rounded-full absolute right-0 top-10 -translate-y-2/4 bg-[#7214FF] blur-[250px] z-20"></div>
          <div className="flex flex-col w-1/2 p-8 md:w-full">
            <h3 className="text-3xl">
              End-to-end encrypted inbox and messages
            </h3>
            <p className="text-slate-500 text-sm py-5 w-5/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dicta magni illum sit quisquam ducimus consectetur tempore
              accusantium, illo voluptas!
            </p>
            <button className="py-2 px-4 text-sm border-[1px] border-slate-500 w-fit rounded-full">
              Learn More
            </button>
          </div>
          <div className="flex flex-col w-1/2 h-full p-8 md:w-4/5">
            <img
              src={benetImg}
              alt="benefit"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8 md:flex-col">
          <div className="w-2/5 min-h-[500px] relative overflow-hidden flex flex-col gap-y-5 p-10 border-[1px] border-slate-800 rounded-lg md:w-full">
            <div className="flex justify-center items-center">
              <img src={phoneImg} alt="phone image" className="w-fit h-fit" />
            </div>
            <h3 className="font-medium text-3xl pt-5">Mobile Application</h3>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nobis rerum modi dolorem saepe id recusandae vel veniam accusamus
              facere.
            </p>
            <div className="h-[100px] w-[200px] rounded-full absolute left-0 top-2/4 -translate-y-1/2 bg-[#7214FF] blur-[200px] z-20"></div>
            <div className="h-[150px] w-[200px] rounded-full absolute right-0 top-10 -translate-y-2/4 bg-[#41E88D] blur-[100px] z-20"></div>
          </div>
          <div className="w-3/5 min-h-[400px] relative overflow-hidden flex flex-col gap-y-5 p-10 pb-0 border-[1px] rounded-lg border-slate-800 justify-between md:w-full">
            <div className="h-[300px] w-[200px] rounded-full absolute left-0 top-full -translate-y-1/2 bg-[#7214FF] blur-[200px] z-20"></div>
            <div className="h-[300px] w-[200px] rounded-full absolute right-0 top-10 -translate-y-2/4 bg-[#7214FF] blur-[200px] z-20"></div>
            <div className="1/4 flex flex-col gap-y-4">
              <h3 className="text-3xl font-medium">
                Upload, share, and preview any file
              </h3>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia, corporis! Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="h-3/4 w-full md:w-2/3 mx-auto">
              <img
                src={columnPrev}
                className="w-full h-full"
                alt="colum prev image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10 gap-x-10">
        <ButtonColour text="Get a Started" />
        <ButtonTrans text="Browse Features" />
      </div>
    </div>
  );
}
