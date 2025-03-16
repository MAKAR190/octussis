"use client";

import dynamic from "next/dynamic";

const VantaBackground = dynamic(() => import("./VantaBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <>
      <VantaBackground />
      <div className="h-screen">
        <div
          id="content"
          className="text-center flex justify-center mx-auto h-full w-[70%] flex-col"
        >
          <h1 className="lg:text-9xl md:text-7xl text-6xl drop-shadow-xl text-white font-bold">
            Octussis
          </h1>
        </div>
      </div>
    </>
  );
}
