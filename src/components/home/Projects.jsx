import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

import img1 from "@/assets/selected_projects/img1.webp";
import img2 from "@/assets/selected_projects/img2.webp";
import img3 from "@/assets/selected_projects/img3.webp";

import logo1 from "@/assets/selected_projects/logo1.webp";
import { Suspense } from "react";


function Projects() {
  return (
    <div id="our projects" className=" mt-20 ">
      <SectionHeader
        padding={true}
        p={"We're all about taking your business to the next level"}
        h1={"Selected Projects"}
        tag={"work"}
      />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 ">
        {data.map((e, i) => (
          <Card key={i} {...e} />
        ))}

        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='black' stroke-width='3' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='27' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
          className="  w-full h-[447px] lg:h-full bg-transparent rounded-2xl md:rounded-[50px] relative flex flex-col justify-center items-center gap-5  "
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
            width="36"
            height="41"
            viewBox="0 0 36 41"
            className=" absolute top-20 left-20 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5103 1.32435C33.9575 -0.17968 36.4518 1.26043 35.8729 3.2658L31.0249 20.06C30.9202 20.4224 30.9202 20.807 31.0249 21.1694L35.8729 37.9637C36.4518 39.969 33.9575 41.4091 32.5103 39.9051L20.3901 27.3094C20.1285 27.0376 19.7954 26.8453 19.4293 26.7547L2.46101 22.5562C0.434859 22.0548 0.434863 19.1746 2.46102 18.6733L19.4293 14.4747C19.7954 14.3841 20.1285 14.1918 20.3901 13.92L32.5103 1.32435Z"
              fill="#F87BD9"
              fill-opacity="0.42"
            />
          </motion.svg>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
            width="54"
            height="52"
            viewBox="0 0 54 52"
            className=" absolute bottom-10 md:bottom-20 left-20 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2032 1.67562C25.9343 0.18009 28.0657 0.180088 28.7968 1.67562L32.2036 8.6448C32.6762 9.61149 33.8289 10.031 34.8123 9.59426L41.9018 6.44544C43.4231 5.76972 45.0559 7.13979 44.6546 8.75536L42.7847 16.2839C42.5253 17.3282 43.1387 18.3905 44.1727 18.6881L51.6276 20.833C53.2274 21.2932 53.5975 23.3923 52.2517 24.372L45.9799 28.9372C45.11 29.5705 44.897 30.7785 45.4979 31.6711L49.83 38.1061C50.7596 39.487 49.6939 41.3329 48.0332 41.2183L40.2943 40.6841C39.2208 40.61 38.2811 41.3985 38.1677 42.4685L37.3499 50.1826C37.1744 51.838 35.1715 52.567 33.973 51.4117L28.388 46.028C27.6133 45.2812 26.3867 45.2812 25.612 46.028L20.027 51.4117C18.8285 52.567 16.8256 51.838 16.6501 50.1826L15.8323 42.4685C15.7189 41.3985 14.7792 40.61 13.7057 40.6841L5.96684 41.2183C4.30614 41.3329 3.24041 39.487 4.17004 38.1061L8.50211 31.6711C9.10301 30.7785 8.89 29.5705 8.02005 28.9372L1.74834 24.372C0.402484 23.3923 0.772603 21.2932 2.37236 20.833L9.82726 18.6881C10.8613 18.3905 11.4747 17.3282 11.2153 16.2839L9.34537 8.75536C8.9441 7.13979 10.5769 5.76972 12.0982 6.44544L19.1877 9.59426C20.1711 10.031 21.3238 9.61149 21.7964 8.6448L25.2032 1.67562Z"
              fill="#062AA9"
            />
          </motion.svg>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            className=" absolute top-[10%] md:top-[30%] right-10 md:right-20 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5422 2.94626C20.0845 0.293985 23.9155 0.293984 25.4578 2.94626L30.6603 11.8926C31.009 12.4923 31.5077 12.991 32.1074 13.3397L41.0537 18.5422C43.706 20.0845 43.706 23.9155 41.0537 25.4578L32.1074 30.6603C31.5077 31.009 31.009 31.5077 30.6603 32.1074L25.4578 41.0537C23.9155 43.706 20.0845 43.706 18.5422 41.0537L13.3397 32.1074C12.991 31.5077 12.4923 31.009 11.8926 30.6603L2.94626 25.4578C0.293984 23.9155 0.293984 20.0845 2.94626 18.5422L11.8926 13.3397C12.4923 12.991 12.991 12.4923 13.3397 11.8926L18.5422 2.94626Z"
              fill="#F87BD9"
            />
          </motion.svg>

          <span className=" rounded-full text-[#062AA9] text-xs border border-[#062AA9] py-0.5 px-3 capitalize ">
            glad to say
          </span>
          <h1 className=" text-[#001B6F] text-5xl capitalize max-w-[450px] text-center">
            you next sucess story{" "}
            <span className=" text-[#F87BD9] font-secondary capitalize">
              starts here
            </span>
          </h1>
          <button className="group capitalize relative inline-flex py-2  mt-5 items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-10 font-medium text-neutral-200 duration-500">
            <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
              book a call
            </div>
            <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
              book a call
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

const Card = ({ img, title, logo, tags }) => {
  return (
    <div className=" relative lg:h-auto overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[30px] xl:rounded-[50px] h-[400px] ">
     <Suspense>
     <Image
        src={img}
        alt=""
        width={1000}
        height={1000}
        draggable="false"
        priority
        className=" h-[400px] object-cover object-center md:h-auto w-full  md:object-contain hover:scale-110 transition-all ease-in-out duration-300 "
      />
     </Suspense>
      {/* <ImgHoverEffect
        img={img}
        width={1000}
        height={1000}
        className=" h-auto w-full  object-contain "
      /> */}
      <div className=" absolute bottom-2 left-2 md:bottom-2 md:left-2   xl:bottom-7 xl:left-7 rounded-xl md:rounded-3xl w-[95%]  sm:w-[450px]  md:max-w-[450px] bg-[#FFFFFF]/40 p-5 backdrop-blur-3xl ">
        <div className=" flex items-center gap-5  ">
          <Image
            src={logo}
            alt=""
            width={500}
            height={500}
            draggable="false"
            priority
            quality={100}
            className=" h-10 w-10  object-contain "
          />
          <h1 className=" text-white text-2xl ">{title}</h1>
        </div>
        <div className=" gap-2 flex flex-grow flex-wrap mt-5 ">
          {tags.map((e, i) => (
            <span
              key={i}
              className=" rounded-full text-white text-xs border border-white py-0.5 px-3 capitalize "
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    img: img1,
    logo: logo1,
    title: "MexxDesign",
    tags: [
      "website developmet",
      "branding",
      "community managment",
      "marketing",
    ],
  },
  {
    img: img2,
    logo: logo1,
    title: "MexxDesign",
    tags: [
      "website developmet",
      "branding",
      "community managment",
      "marketing",
    ],
  },
  {
    img: img3,
    logo: logo1,
    title: "MexxDesign",
    tags: [
      "website developmet",
      "branding",
      "community managment",
      "marketing",
    ],
  },
];
