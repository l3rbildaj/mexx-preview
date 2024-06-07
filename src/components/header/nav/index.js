import Footer from "@/components/header/nav/Footer/index";
import CustomLink from "@/components/header/nav/Link/index";
import logo from "@/assets/logo.png";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { menuSlide } from '../anime';
import Curve from './Curve';
import Link from "next/link";
import Image from "next/image";




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

export default function MobileNav({setIsActive}) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
   <>
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={"  h-screen w-full md:w-[500px] bg-blue-200 z-[9999] fixed  left-0 top-0 text-white "}>
          <Curve />
      <div className={"h-full p-10 md:p-[50px] flex flex-col justify-between box-border"}>
        <Link href={"/"} className=' absolute top-4  lg:hidden md:right-10 ' >
        <Image
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className=" object-contain md:ml-24 h-14 w-48 "
          draggable="false"
          priority
          quality={100}
        />
        </Link>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={" flex flex-col text-[56px] gap-[12px] mt-[80px] "}>
          <div className={" text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-[11px] mb-[40px]  "}>
            <p>Navigation</p>
          </div>
          {
            navItems.map((data, index) => {
              return <CustomLink key={index} data={{ ...data, index }} setIsActive={setIsActive} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></CustomLink>
            })
          }

          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-translate-y absolute top-0 rotate-90 translate-x-[50%] left-16 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg> */}
           <button  onClick={e => setModal(true)} className="group relative capitalize w-fit self-end text-lg inline-flex py-1 h-[calc(32px+8px)] items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-6 font-medium text-white duration-500">
            <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
              book a meeting
            </div>
            <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
              book a meeting
            </div>
          </button>
          
        </div>
        <Footer />
      </div>
    </motion.div>

   </>
  )
}


