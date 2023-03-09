import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#060B27] w-full min-h-screen text-white sm:overflow-hidden">
      <Header />
      {children}
      <Analytics />
      <Footer />
    </div>
  );
}
