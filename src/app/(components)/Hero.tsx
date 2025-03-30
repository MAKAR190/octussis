"use client";

import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <VantaBackground />
      <div className="h-[50vh] mt-24 lg:mt-10 lg:h-screen">
        <div
          id="content"
          className="text-center flex justify-center mx-auto h-full w-[70%] flex-col"
        >
          <h1 className="lg:text-9xl uppercase md:text-7xl text-5xl drop-shadow-xl text-black font-medium">
            Octussis
          </h1>
        </div>
      </div>
    </>
  );
}
