import logo from "@/assets/logo.png";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const PopUp = dynamic(() => import('../home/PopUp'), { ssr: false });
const MobileNav = dynamic(() => import('../header/nav'), { ssr: false });
// import { InlineWidget } from "react-calendly";


const Header = () => {
  const [modal, setModal] = useState(false);
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [disapear, setDisapear] = useState(false)
  const { scrollYProgress } = useScroll();
  const translateY = useSpring();

  scrollYProgress.on('change', v => {
    if (v >= .001) {
      translateY.set('-50px')
      return;
    }
    translateY.set(0)

  })

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <header className="z-50 ">
      {open && <PopUp isOpen={open} setIsOpen={setOpen} />}
      <motion.div className={" h-auto w-full flex justify-between items-center flex-row-reverse md:flex-row  !py-5"}>
        {isActive && <div className=" hidden md:flex w-32 h-2 "></div>}
        <button
          className={
            "z-[99999999]  group  inline-flex h-[calc(32px+8px)] items-center justify-center rounded-full bg-[#062AA9] py-1 pl-6 pr-14 font-medium text-neutral-50 " +
            `${isActive ? " relative md:fixed " : " relative "}`
          }
        >
          <span className="z-10 pr-2">Menu</span>
          <div className="absolute right-1 inline-flex h-8 w-8 items-center justify-end rounded-full bg-[#2056FE] transition-[width] group-hover:w-[calc(100%-8px)]">
        
            <div className={" flex  ml-2 "}>
              <div className={"  right-0  "}>
                <div
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className={
                    " flex items-center justify-center w-[32px] h-[40px] rounded-[50%]  cursor-pointer "
                  }
                >
                  <div
                    className={`${" w-full after:top-[-6px] before:top-[5px] after:[content:''] after:block after:h-[2px] after:w-[50%] after:m-auto after:bg-white after:relative after:[transition:transform_0.3s] before:[content:''] before:block before:h-[2px] before:w-[50%] before:m-auto before:bg-white before:relative before:[transition:transform_0.3s] "} 
          ${isActive
                        ? " after:!top-[-1px] after:[transform:rotate(45deg)] before:!top-[1px] before:[transform:rotate(-45deg)] "
                        : ""
                      }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </button>
        <AnimatePresence mode="wait">
          {isActive && <MobileNav setIsActive={setIsActive} />}
        </AnimatePresence>
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className=" w-auto md:w-48 md:ml-24 "
          draggable="false"
          priority
          quality={100}
        />
        <div className=" md:flex gap-7 items-center hidden  ">
          <button
            lang="en"
            onClick={() => setOpen(true)}
            className=" capitalize text-[#0038FF] text-sm underline underline-offset-2 decoration-[#0038FF] "
          >
            login
          </button>
          <button  onClick={e => setModal(true)} className="group capitalize relative inline-flex  py-1 h-[calc(32px+8px)] items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-6 font-medium text-white duration-500">
            <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
              book a meeting
            </div>
            <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
              book a meeting
            </div>
          </button>
        </div>
      </motion.div>
      {/* {
          modal &&
          <div onClick={e => { setModal(false) }} className="fixed z-[999999999999] inset-0 -top-4 left-0  bg-black/80 backdrop-blur-3xl w-screen h-screen mt-4">
            <div onClick={e => { setModal(false) }} className="w-full relative z-50 h-full flex items-center justify-center">
              <button onClick={e => { setModal(false) }} className="absolute  z-[999999]  top-4 right-4 text-black text-2xl">
                <svg className="w-6 h-6 cursor-pointer hover:bg-white/40 rounded-full  transition-all text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
              <InlineWidget styles={{
                width: "100%",
                height: "100%",
                // zIndex: "",
              }}
                url="https://calendly.com/wecraft-meeting/we-craft-intro?hide_gdpr_banner=1" />
            </div>
          </div>
        } */}
    </header>
  );
};

export default Header;
