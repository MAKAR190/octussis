"use client";

const navigation = {
  main: [
    { name: "Lagos" },
    { name: "London" },
    { name: "Geneva" },
    { name: "Abu Dhabi" },
  ],
};

export default function Footer() {
  return (
    <div id="contact" className="relative w-full">
      <div className="text-center text-black">
        <div className="pt-12 flex flex-col max-w-[99%]">
          <a
            className="hover:underline underline-offset-1"
            href="mailto:trade@octussis.com"
          >
            trade@octussis.com
          </a>
        </div>
      </div>
      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            aria-label="Footer"
            className="place-items-center max-w-xl mx-auto justify-center gap-x-12 gap-y-3 text-xs md:text-sm/6 grid grid-cols-4"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="bg-black h-5 w-[1px] mr-4" />
                <div className="text-black text-center cursor-pointer hover:underline underline-offset-1">
                  {item.name}
                </div>
                <div className="bg-black h-5 w-[1px] ml-4" />
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            &copy; 2025 Octussis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
