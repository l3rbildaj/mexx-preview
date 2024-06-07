"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";

export default function Loader({loading, setLoading}) {


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <motion.div
      animate={{
        opacity: loading ? 1 : 0,
        display: loading ? "flex" : "none",
      }}
      transition={{
        delay: 2,
      }}
      className=" fixed top-0 left-0 w-screen h-screen bg-transparent z-[999999999999999] "
    >
      <div className=" w-full h-full relative  flex justify-center items-center ">
        <motion.div
          animate={{ opacity: loading ? 1 : 0 }}
          className=" absolute flex justify-center items-center text-black font-bold uppercase text-6xl "
        >
          <Image
            src={logo}
            alt="logo"
            width={2500}
            height={2500}
            className=" w-64 ml-0 "
            draggable="false"
            priority
            quality={100}
          />
        </motion.div>

        {Array(15)
          .fill(" ")
          .map((e, i) => {
            return (
              <motion.div
                animate={{
                  rotateY: loading ? 0 : -90,
                  transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  },
                }}
                key={i}
                className="w-[10vw] h-full bg-white text-black "
              ></motion.div>
            );
          })}
      </div>
    </motion.div>
  );
}




