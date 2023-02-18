import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr";
import ButtonColour from "../button/buttonColour";

export default function Footer() {
  const SosmedFooter = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="border-[1px] border-slate-500/50 rounded-md flex items-center justify-center w-7 h-7 p-1">
        {children}
      </div>
    );
  };

  return (
    <footer className="relative container mx-auto h-fit overflow-hidden pb-10">
      <div className="flex justify-between w-full h-full items-center pb-10">
        <div className="flex flex-col w-1/3">
          <div className="flex flex-col gap-y-3 ">
            <span className="text-3xl font-bold">Product.</span>
            <div className="border-slate-500/50 border-[1px] flex flex-col gap-y-5 py-7 px-10 rounded-lg">
              <p className="text-xl font-semibold">
                Subscribe to our newsletter
              </p>
              <input
                type="text"
                className="border-[1px] border-slate-500/50 rounded-full py-2 px-5 bg-transparent text-white mt-5"
                placeholder="Enter your email"
              />
              <ButtonColour text="Subscribe" />
            </div>
          </div>
        </div>
        <div className="flex w-2/3">
          <div className="flex justify-between w-full text-slate-500/80 text-sm">
            <div className="flex justify-evenly w-2/3 ">
              <div className="flex flex-col gap-y-4">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Blog Post</p>
                <p>Pricing</p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Blog Post</p>
                <p>Pricing</p>
              </div>
            </div>
            <div className="flex justify-between w-1/3">
              <div className="flex flex-col gap-y-4">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Blog</p>
                <p>Blog Post</p>
                <p>Pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-500/50" />
      <div className="flex justify-between items-center">
        <div className="text-slate-500/80 py-2 text-sm">
          <p className="flex gap-x-2">
            Copyright © Product |
            <span className="text-white font-medium">Muhammad Fajri</span>
          </p>
        </div>
        <div className="flex gap-x-4 py-2">
          <SosmedFooter
            children={<GrFacebookOption className="text-slate-300 h-5 w-5" />}
          />
          <SosmedFooter
            children={<GrTwitter className="text-slate-300 h-5 w-5" />}
          />
          <SosmedFooter
            children={<GrLinkedinOption className="text-slate-300 h-5 w-5" />}
          />
          <SosmedFooter
            children={<GrInstagram className="text-slate-300 h-5 w-5" />}
          />
        </div>
      </div>
    </footer>
  );
}
