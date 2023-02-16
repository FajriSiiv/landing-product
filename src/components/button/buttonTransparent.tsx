import React from "react";

export default function ButtonTrans({ text }: { text: string }) {
  return (
    <button className="py-3 px-7 bg-transparent border-[1px] border-[#282D45] rounded-full hover:bg-purple-900/10 transition-all hover:border-[#282D45]/80">
      {text}
    </button>
  );
}
