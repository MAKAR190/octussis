"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { motion } from "framer-motion";
import { Navigation } from "@/components";
import Footer from "@/components/Footer";

NProgress.configure({ showSpinner: false });

export default function Template({ children }: { children: React.ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    const handleRouteChange = () => {
      NProgress.done();
    };

    handleRouteChange();

    return () => {
      NProgress.done();
    };
  }, [pathname]);       

  return (
    <main>
      <Navigation />
      <div className={isAnimating ? "overflow-hidden h-full relative" : "h-full relative"}>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ ease: "anticipate", duration: 0.75 }}
          onAnimationComplete={() => setIsAnimating(false)}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
