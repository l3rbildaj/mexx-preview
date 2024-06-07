import Link from "next/link";

import Image from "next/image";
import ContactBanner from "../home/ContactBanner";
import AnimatedLink from "../ui/AnimatedLinks";
import logo from "@/assets/footer_logo.png"

const Footer = () => {


  return (
    <footer className=" bg-[#7EBAFA] rounded-t-[90px] h-[130vh] md:h-[140vh] lg:h-[120vh] mt-20  w-full  ">
      <ContactBanner />
      <div className=" sticky h-[70vh] md:h-[60vh] lg:h-[42vh]    pt-[5vh]  px-5  top-[30vh] md:top-[40vh] lg:top-[58vh] z-[2]  flex justify-between flex-col lg:flex-row  " >
        <div className=" flex-col lg:flex-row w-full h-full flex justify-between 2xl:max-w-[1400px]  mx-auto ">
          <div className=" justify-between lg:block flex flex-col md:flex-row lg:flex-col w-full lg:w-[29%] ">
            <p className=" text-white text-4xl capitalize max-w-[305px] mb-10 md:mb-24 ">The only digital{" "}
              <span className=" text-[#0038FF] font-secondary ">subscription</span> you need</p>
            {/* <div className=" w-3/6 lg:w-full flex lg:justify-start lg:items-center gap-[2vw] ">
              <Image src={"/logoDET.png"} width={100} height={100} className="h-16 w-16 md:h-24 md:w-24 lg:h-20 lg:w-20 xl:h-24 xl:w-24 object-contain " alt="logo" />
              <div className=" flex md:block justify-center items-center  ">
                <h1 className=" text-black capitalize text-md w-[150px] md:w-full  font-medium ">dynamic trading energy</h1>
                <span className=" hidden md:flex text-black/20 text-xs "> CoC: 90551176 <br /> Address: Gustav Mahlerplein 28 <br /> 1082 MA Amsterdam <br />The Netherlands</span>
              </div>
            </div> */}
            {/* <p className=" w-full xs:w-5/6 mt-10  md:w-3/6 lg:w-full text-black text-lg md:text-lg lg:text-lg xl:text-lg ">We aim to make the energy transition work in your favor with smart solutions for the future</p> */}
            <Image
              src={logo}
              alt="logo"
              width={1000}
              height={1000}
              className=" w-auto -ml-3 "
              draggable="false"
              priority
              quality={100}
            />
            <div>
              {/* <p className=" flex md:hidden text-black/20 text-sm lg:text-md "> CoC: 90551176  </p>
              <p className=" flex md:hidden text-black/20 text-sm lg:text-md "> Address: Gustav Mahlerplein 28  1082 MA Amsterdam The Netherlands </p> */}



            </div>
          </div>
          <div className=" grid grid-cols-2 w-full lg:w-1/6 pb-10   ">
          <p className=" text-white text-5xl capitalize max-w-[305px] mb-10 col-span-2 ">quick{" "}
              <span className=" text-[#0038FF] font-secondary ">links</span></p>
            <div className=" flex flex-col  justify-start items-start ">
              <div className=" flex flex-col gap-2 text-black text-sm lg:text-md    ">
                <AnimatedLink title={"Process"} url={"our process"} />
                <AnimatedLink title={"Blog"} url={"blog"} />
                <AnimatedLink title={"Work"} url={"work"} />
                <AnimatedLink title={"Services"} url={"our services"} />
              </div>
            </div>
            <div className=" h-fit flex flex-col justify-start items-start ">
              {/* <p className=" self-start place-content-start text-xl lg:text-3xl text-black capitalize mb-5 xs:mb-10 ">Expertises</p> */}
              <div className=" flex flex-col gap-2 text-black  text-sm lg:text-md  ">
                <AnimatedLink title={"Benefits"} url={""} />
                <AnimatedLink title={"Pricing"} url={"pricing"} />
                <AnimatedLink title={"Contact"} url={"contact"} />
              </div>
            </div>
            {/* <div className=" hidden h-fit md:flex flex-col justify-start items-start ">
              <p className=" self-start place-content-start text-xl lg:text-3xl text-black capitalize mb-10  ">Contact</p>
              <div className="   text-left flex flex-col gap-4 text-black  text-sm lg:text-md ">
                <p className=" text-black/50 text-xs "> If you have a General enquiry, please send us an email</p>
                <Link href={"mailto:info@dynamicenergytrading.com"} className="w-fit hover:underline hover:underline-offset-2 ">info@dynamicenergytrading.com</Link>
              </div>
            </div> */}
          </div>
        </div>

        <p className=" absolute bottom-[0.5vh] left-[50%] translate-x-[-50%] text-[10px] sm:text-xs text-black/25  ">Mexx Design, all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;