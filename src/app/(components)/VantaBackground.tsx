"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.globe.min").then((VANTA) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: new THREE.Color(0, 0, 0),
            backgroundColor: new THREE.Color(255, 255, 255),
          })
        );
      });
    }

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="h-1/2 lg:h-screen w-full absolute -z-1 top-0 left-0">
      <div className="h-full w-full absolute top-0 left-0"></div>
    </div>
  );
}
