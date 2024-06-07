"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const MaskElement = ({ className, children, delay }) => {
  const animate = {
    initial: {
      y: "120%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 1, delay: delay, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%", amount: 0.4 });
  return (
    <div ref={body}>
      <div className=" overflow-hidden text-black ">
        <motion.div
          variants={animate}
          initial="initial"
          animate={isInView ? "open" : ""}
          className={" " + className}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default MaskElement;
