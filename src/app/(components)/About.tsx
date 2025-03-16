"use client";

export default function About() {
  return (
    <div
      className="mt-30 w-full h-screen py-10 px-4 relative flex flex-col items-center justify-center"
    >
      <p className="text-md text-center w-[70%] positioned-center font-['Inter'] text-gray-300 pt-40 lg:text-4xl md:text-3xl max-[450px]:text-xl sm:pt-20 max-[768px]:text-2xl">
        We are an
        <span
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-blue-400 font-bold mx-2"
        >
          investment origination
        </span>
        company with focus on
        <span
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-green-400 font-bold ml-2"
        >
          rail and road infrastructure
        </span>
        ,
        <span
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-yellow-400 font-bold ml-2"
        >
          water and sewage infrastructure
        </span>
        ,
        <span
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-red-400 font-bold ml-2"
        >
          postal and logistic infrastructure
        </span>
        ,
        <span
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-purple-400 font-bold ml-2"
        >
          energy and renewable infrastructure
        </span>
        ,
        <span
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-pink-400 font-bold ml-2"
        >
          data infrastructure
        </span>
        ,
        <span
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-teal-400 font-bold ml-2"
        >
          farming and forestry
        </span>
        .
      </p>
    </div>
  );
}
