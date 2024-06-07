//ui/floating-navbar.tsx

"use client";
import logo from "@/assets/logo.png";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  {
    title: "Partners",
    href: "partners",
  },
  {
    title: "Our Process",
    href: "our process",
  },
  {
    title: "Our Services",
    href: "our services",
  },
  {
    title: "Our Projects",
    href: "our projects",
  },
  {
    title: "Pricing",
    href: "pricing",
  },
  {
    title: "Blog",
    href: "blog",
  },
  {
    title: "FAQ",
    href: "faq",
  },
];

export const FloatingNav = ({ className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.003) {
        setVisible(false);
      } else {
        setVisible(true)
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={
          "flex justify-between xl:max-w-fit z-[70]  fixed gap-4  sm:gap-7 top-5 inset-x-0 mx-auto border  border-white/[0.2] rounded-full  bg-white/50 backdrop-blur-2xl  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 w-[95%] sm:w-5/6  items-center xl:justify-center space-x-4" +
          `${className}`
        }
      >
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className=" w-32 xs:w-48 "
          draggable="false"
          priority
          quality={100}
        />
        {navItems.map((e, i) => (
          <Link
            id={"linkscroll"}
            to={e.href}
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            key={i}
            className={
              "relative cursor-pointer text-black items-center  space-x-1 hidden xl:flex   hover:text-black/50"
            }
          >
            <span className="hidden sm:block text-sm">{e.title}</span>
          </Link>
        ))}

        <div className=" flex gap-3 ">
          <button className=" hidden md:block border text-sm font-medium relative  border-black/[0.2] h-[calc(30px+8px)] text-black px-6 py-0 rounded-full">
            <span>Login</span>
            {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
          </button>
          <button className="group capitalize relative inline-flex  py-1 h-[calc(32px+8px)] items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-6 font-medium text-white duration-500">
            <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
              book a meeting
            </div>
            <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
              book a meeting
            </div>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
