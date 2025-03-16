"use client";

import Link from "next/link";

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Analytics", href: "/analytics" },
    { name: "Apparel", href: "/apparel" },
    { name: "Capital", href: "/capital" },
    { name: "Green", href: "/green" },
    { name: "Infra", href: "/infra" },
    { name: "Sports", href: "/sports" },
    { name: "Transport", href: "/transport" },
  ],
};

export default function Footer() {
  return (
    <div id="contact" className="h-fit relative shadow w-full">
      <div className="text-center text-white h-[50vh] pt-40">
        <div className="py-20 flex flex-col max-w-[99%]">
          <a
            href="https://www.google.com/maps?q=4.0777,9.7085"
            target="_blank"
            className="map-link hover:underline underline-offset-1"
          >
            58, Samuel Adedoyin, Victoria Island, Lagos, Nigeria
          </a>

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
            className="flex-wrap place-items-center justify-center gap-x-12 gap-y-3 text-sm/6 grid grid-cols-2 md:flex md:flex-row"
          >
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white cursor-pointer hover:text-gray-300 hover:underline underline-offset-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <p className="mt-10 text-center text-sm/6 text-gray-300">
            &copy; 2025 Octussis. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
