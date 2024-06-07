"use client";


import { motion } from "framer-motion";

const BlurIn = ({ children, className, variant, duration = .5 }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, }}
      variants={combinedVariants}
      className={
        `${className}` +
        " font-display text-center text-4xl tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      }
    >
      {children}
    </motion.h1>
  );
};

export default BlurIn;
