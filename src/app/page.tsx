"use client";

import { useEffect, useRef } from "react";
import Hero from "./(components)/Hero";
import About from "./(components)/About";

export default function Home() {
  const isScrollingRef = useRef(false);
  const lastScrollPositionRef = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const direction =
        scrollPosition > lastScrollPositionRef.current ? "down" : "up";
      const scrollDelta = Math.abs(
        scrollPosition - lastScrollPositionRef.current
      );
      lastScrollPositionRef.current = scrollPosition;

      if (scrollDelta < 20) return;

      const isNearBottom = scrollPosition + windowHeight > documentHeight - 100;
      if (isNearBottom && direction === "down") return;

      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");

      if (!heroSection || !aboutSection) return;

      const heroTop = heroSection.getBoundingClientRect().top + window.scrollY;
      const aboutTop =
        aboutSection.getBoundingClientRect().top + window.scrollY;

      const isInTargetSections =
        scrollPosition < aboutTop + aboutSection.offsetHeight;
      if (!isInTargetSections) return;

      clearTimeout(timeout);
      isScrollingRef.current = true;

      if (direction === "down" && scrollPosition < aboutTop - 50) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (direction === "up" && scrollPosition > heroTop + 50) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        isScrollingRef.current = false;
        return;
      }

      timeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
    </>
  );
}
