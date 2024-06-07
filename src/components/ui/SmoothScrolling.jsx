"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Suspense } from "react";

function SmoothScrolling({ children }) {
  return (
    <Suspense>
    <ReactLenis
      root
      easing={(t) => -(Math.cos(Math.PI * x) - 1) / 2}
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
    </Suspense>
  );
}

export default SmoothScrolling;
