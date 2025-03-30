"use client";

export default function Footer() {
  return (
    <div id="contact" className="relative w-full">
      <div className="text-center text-black">
        <div className="pt-12 flex flex-col max-w-[99%]">
          <a
            className="hover:underline underline-offset-1"
            href="mailto:contact@octussis.com"
          >
            contact@octussis.com
          </a>
        </div>
      </div>
      <footer>
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav
            aria-label="Footer"
            className="place-items-center max-w-[10vw] mx-auto justify-center gap-x-12 gap-y-3 text-xs md:text-sm/6 grid grid-cols-3"
          >
            <div className="text-black text-center cursor-pointer hover:underline underline-offset-1">
              Lagos
            </div>
            <div className="bg-black h-5 w-[1px]" />
            <div className="text-black text-center cursor-pointer hover:underline underline-offset-1">
              London
            </div>
          </nav>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            &copy; 2025 Octussis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
