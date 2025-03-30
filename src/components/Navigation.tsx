"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-white/30 backdrop-blur-sm drop-shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Global"
        className="flex max-w-7xl p-6 lg:px-8"
      >
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Octussis</span>
            <Image
              alt="logo"
              src="/OctussisLogo.png"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>
      </nav>
    </header> 
  );
}
