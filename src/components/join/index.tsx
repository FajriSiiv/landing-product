import React from "react";
import ButtonColour from "../button/buttonColour";
import bgJoin from "/src/img/bg-join.png";
import { FaDiscord } from "react-icons/fa";

export default function Join() {
  return (
    <div className="container mx-auto px-20 py-20 min-h-[500px] sm:p-5">
      <div className="min-h-[400px] h-full border-[1px] border-slate-500/40 relative rounded-lg overflow-hidden">
        <div className="h-[300px] w-[300px] rounded-full absolute left-0 top-0 -translate-y-1/2 bg-emerald-400/80 blur-[200px] z-20"></div>
        <div className="h-[300px] w-[300px] rounded-full absolute right-0 top-10 -translate-y-2/4 bg-[#7214FF] blur-[250px] z-20"></div>
        <img
          src={bgJoin}
          className="absolute w-full h-full object-contain sm:bottom-0 md:object-cover"
          alt="bg-join"
        />
        <div className="flex flex-col gap-y-5 items-center justify-center h-[400px] ">
          <FaDiscord className="w-20 h-20 text-[#5865F2]" />
          <h3 className="font-semibold text-3xl">Join the community</h3>
          <p className="text-sm text-slate-400/90 w-1/2 text-center md:w-[90%]">
            Join our 400,000+ person community and contribute to a more private
            and decentralized internet. Start for free.
          </p>
          <ButtonColour text="Join Discord" />
        </div>
      </div>
    </div>
  );
}
