import React from "react";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#060B27] w-full min-h-screen text-white">
      <Header />
      {children}
    </div>
  );
}