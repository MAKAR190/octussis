"use client";

import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <VantaBackground />
      <div className="h-[50vh] mt-24 lg:mt-10 lg:h-[70vh]">
        <div
          id="content"
          className="text-center flex justify-center mx-auto h-full w-[70%] flex-col"
        />
      </div>
    </>
  );
}
