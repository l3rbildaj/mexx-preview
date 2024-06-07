"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";

export default function Loader({ loading, setLoading }) {
  const [show, setShow] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }
    , 1000); 
    setTimeout(() => {
      setLoading(false);
    }, 2100);
  }, []);

  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          delay: 0.4,
        },
        // display: loading ? "flex" : "none",
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

        <AnimatePresence>
          {!show && Array(15)
            .fill(" ")
            .map((e, i) => {
              return (
                <motion.div
                  exit={{
                    rotateY: -90,
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
        </AnimatePresence>
      </div>
    </motion.div>
  );
}




