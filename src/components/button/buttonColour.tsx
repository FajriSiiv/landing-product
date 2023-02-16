import React from "react";

export default function ButtonColour({
  text = "Get a Demo",
}: {
  text?: string;
}) {
  return (
    <button className="py-3 px-7 bg-[#7214FF] rounded-full">{text}</button>
  );
}
