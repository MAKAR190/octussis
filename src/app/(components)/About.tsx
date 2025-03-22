"use client";

export default function About() {
  return (
    <div id="about" className="mx-auto max-w-7xl lg:py-24 sm:px-6 sm:py-4 lg:px-8">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          About Us
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-pretty text-lg/8 text-gray-300">
          We are an investment origination company with focus on{" "}
          <b>rail and road</b> infrastructure, <b>water and sewage</b>{" "}
          infrastructure, <b>postal and logistic</b> infrastructure,{" "}
          <b>energy and renewable</b> infrastructure, <b>data infrastructure</b>,{" "}
          <b>farming and forestry</b>.
        </p>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
