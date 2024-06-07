import { motion } from "framer-motion";
import { Link } from "react-scroll";
import BlurIn from "../ui/TextBlur";
// import HeroVideo from "./HeroVideo";
import dynamic from 'next/dynamic';
import {  useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";


const WebglEffect = dynamic(() => import('./WebglEffect'), { ssr: false });



function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile()

  useEffect(() => {
    // Function to check if everything is loaded
    const checkIfLoaded = () => {
      // You can define your own conditions here to check if everything is loaded
      // For example, you can check if images, fonts, and other resources are loaded
      const allResourcesLoaded = document.readyState === 'complete';

      // Set isLoaded to true if everything is loaded
      if (allResourcesLoaded) {
        setIsLoaded(true);
      }
    };

    // Check if everything is loaded when the component mounts
    checkIfLoaded();

    // Add event listener to check if everything is loaded after the component mounts
    window.addEventListener('load', checkIfLoaded);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('load', checkIfLoaded);
    };
  }, []);

  
  return (
    <>
      {isLoaded && !isMobile ? <WebglEffect /> : null}
      <div className="  flex pointer-events-none justify-start h-[120vh] z-[2] flex-col items-center gap-5 mt-20 relative ">

        {/* <motion.svg
          width="61"
          height="70"
          viewBox="0 0 61 70"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120 }}
          className=" absolute -top-5 left-72 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.0953 0.787874C58.5425 -0.716156 61.0369 0.72395 60.458 2.72932L51.3781 34.1828C51.2735 34.5452 51.2735 34.9298 51.3781 35.2922L60.458 66.7457C61.0369 68.7511 58.5425 70.1912 57.0953 68.6871L34.3957 45.097C34.1341 44.8252 33.8011 44.6329 33.4349 44.5423L1.65549 36.679C-0.370668 36.1776 -0.37067 33.2974 1.65548 32.7961L33.4349 24.9327C33.8011 24.8421 34.1341 24.6498 34.3957 24.378L57.0953 0.787874Z"
            fill="#F87BD9"
            fill-opacity="0.42"
          />
        </motion.svg>
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50 }}
          className=" absolute top-20 right-20 "
          width="72"
          height="73"
          viewBox="0 0 72 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5532 2.85312C34.1002 0.226084 37.8998 0.226084 39.4468 2.85312L50.1708 21.064C50.5228 21.6618 51.0241 22.1577 51.6256 22.5031L69.9595 33.0312C72.6369 34.5688 72.6369 38.4312 69.9595 39.9688L51.6256 50.4969C51.0241 50.8423 50.5228 51.3382 50.1708 51.936L39.4468 70.1469C37.8998 72.7739 34.1002 72.7739 32.5532 70.1469L21.8292 51.936C21.4773 51.3382 20.9759 50.8423 20.3744 50.4969L2.04052 39.9688C-0.636914 38.4312 -0.636919 34.5688 2.04052 33.0312L20.3744 22.5031C20.9759 22.1577 21.4773 21.6618 21.8292 21.064L32.5532 2.85312Z"
            fill="#F87BD9"
          />
        </motion.svg>
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120 }}
          className=" absolute top-80 left-72 "
          width="86"
          height="85"
          viewBox="0 0 86 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.2032 1.67562C41.9343 0.18009 44.0657 0.180089 44.7968 1.67562L51.7504 15.9002C52.2229 16.8669 53.3756 17.2864 54.359 16.8497L68.8292 10.4227C70.3505 9.74697 71.9833 11.117 71.582 12.7326L67.7654 28.0989C67.506 29.1432 68.1194 30.2056 69.1534 30.5031L84.3694 34.8809C85.9691 35.3412 86.3392 37.4403 84.9934 38.42L72.1924 47.738C71.3225 48.3712 71.1095 49.5793 71.7104 50.4718L80.5524 63.6061C81.482 64.987 80.4163 66.8329 78.7556 66.7183L62.96 65.628C61.8865 65.5539 60.9468 66.3424 60.8334 67.4124L59.1642 83.1574C58.9887 84.8127 56.9858 85.5417 55.7873 84.3865L44.388 73.398C43.6133 72.6512 42.3867 72.6512 41.612 73.398L30.2127 84.3865C29.0142 85.5417 27.0113 84.8128 26.8358 83.1574L25.1666 67.4124C25.0532 66.3424 24.1135 65.5539 23.04 65.628L7.24441 66.7183C5.5837 66.8329 4.51798 64.987 5.44761 63.6061L14.2897 50.4718C14.8905 49.5793 14.6775 48.3712 13.8076 47.738L1.00661 38.42C-0.339247 37.4403 0.0308733 35.3412 1.63063 34.8809L16.8466 30.5031C17.8806 30.2056 18.494 29.1432 18.2346 28.0989L14.418 12.7326C14.0167 11.117 15.6495 9.74697 17.1708 10.4227L31.641 16.8497C32.6244 17.2864 33.7771 16.8669 34.2496 15.9002L41.2032 1.67562Z"
            fill="#062AA9"
          />
        </motion.svg> */}

        <div
          className="bg-blue-500/10 border border-blue-500/10  w-fit  flex justify-center items-center gap-3 capitalize p-1 pl-1 px-3 rounded-full text-[#0038FF]  text-xs"
        >
          <span className=" bg-[#0038FF] p-1 rounded-full ">
            <motion.svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.59922 0.299805C1.77161 0.299805 1.93694 0.368287 2.05884 0.490185C2.18074 0.612084 2.24922 0.777414 2.24922 0.949805V2.31545C2.79005 1.76378 3.4624 1.35885 4.20295 1.13881C4.9435 0.918773 5.72788 0.890862 6.4822 1.05771C7.23652 1.22455 7.93596 1.58067 8.51463 2.0925C9.0933 2.60434 9.53216 3.25505 9.78987 3.98335C9.82114 4.06445 9.83582 4.15099 9.83306 4.23785C9.8303 4.32472 9.81014 4.41015 9.77378 4.48909C9.73743 4.56804 9.68561 4.63888 9.6214 4.69745C9.55718 4.75602 9.48187 4.80111 9.39992 4.83006C9.31798 4.85902 9.23106 4.87124 9.1443 4.86601C9.05755 4.86079 8.97272 4.83822 8.89484 4.79964C8.81697 4.76106 8.74762 4.70725 8.6909 4.6414C8.63417 4.57555 8.59124 4.49899 8.56462 4.41625C8.36841 3.86169 8.02541 3.37074 7.57219 2.99573C7.11896 2.62072 6.57248 2.3757 5.99098 2.28678C5.40949 2.19786 4.81476 2.26836 4.27017 2.49079C3.72559 2.71321 3.25155 3.07922 2.89857 3.5498H4.84922C5.02161 3.5498 5.18694 3.61829 5.30884 3.74019C5.43074 3.86208 5.49922 4.02741 5.49922 4.1998C5.49922 4.3722 5.43074 4.53753 5.30884 4.65942C5.18694 4.78132 5.02161 4.8498 4.84922 4.8498H1.59922C1.42683 4.8498 1.2615 4.78132 1.1396 4.65942C1.0177 4.53753 0.949219 4.3722 0.949219 4.1998V0.949805C0.949219 0.777414 1.0177 0.612084 1.1396 0.490185C1.2615 0.368287 1.42683 0.299805 1.59922 0.299805ZM1.60442 6.18685C1.68491 6.15842 1.77022 6.14613 1.85546 6.15067C1.94071 6.15521 2.02423 6.17649 2.10124 6.21331C2.17826 6.25013 2.24727 6.30176 2.30434 6.36525C2.3614 6.42875 2.4054 6.50286 2.43382 6.58335C2.63003 7.13792 2.97302 7.62887 3.42625 8.00388C3.87948 8.37889 4.42596 8.62391 5.00745 8.71283C5.58895 8.80175 6.18368 8.73125 6.72827 8.50882C7.27285 8.2864 7.74689 7.92039 8.09987 7.4498H6.14922C5.97683 7.4498 5.8115 7.38132 5.6896 7.25942C5.5677 7.13753 5.49922 6.9722 5.49922 6.7998C5.49922 6.62741 5.5677 6.46208 5.6896 6.34019C5.8115 6.21829 5.97683 6.1498 6.14922 6.1498H9.39922C9.57161 6.1498 9.73694 6.21829 9.85884 6.34019C9.98074 6.46208 10.0492 6.62741 10.0492 6.7998V10.0498C10.0492 10.2222 9.98074 10.3875 9.85884 10.5094C9.73694 10.6313 9.57161 10.6998 9.39922 10.6998C9.22683 10.6998 9.0615 10.6313 8.9396 10.5094C8.8177 10.3875 8.74922 10.2222 8.74922 10.0498V8.68415C8.20839 9.23583 7.53604 9.64075 6.79549 9.8608C6.05493 10.0808 5.27056 10.1087 4.51624 9.9419C3.76192 9.77505 3.06248 9.41894 2.48381 8.90711C1.90514 8.39527 1.46628 7.74455 1.20857 7.01625C1.18014 6.93576 1.16784 6.85046 1.17238 6.76521C1.17692 6.67996 1.19821 6.59645 1.23503 6.51943C1.27185 6.44241 1.32348 6.3734 1.38697 6.31634C1.45046 6.25927 1.52392 6.21527 1.60442 6.18685Z"
                fill="#D8E1FF"
              />
            </motion.svg>
          </span>

          <p className="  ">Subscription. Pause or cancel anytime</p>
        </div>
        <BlurIn className=" text-5xl xs:text-6xl sm:text-6xl lg:text-7xl max-w-[350px] xs:max-w-[450px] sm:max-w-[600px] z-[2] text-center mx-auto capitalize text-[#001B6F] ">
          The only digital{" "}
          <span className=" text-[#0038FF] font-secondary ">subscription</span>{" "}
          you need
        </BlurIn>
        <p className="!text-[#001B6F] text-[12px] sm:text-xs md:text-base ">We&apos;re all about taking your business to the next level</p>
        {/* <p className=" text-[#001B6F] ">
        We&apos;re all about taking your business to the next level
      </p> */}
        <div className=" pointer-events-auto flex justify-center items-center gap-5 mt-5 md:mt-10 ">
          <Link
            id={"linkscroll"}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="w-fit  cursor-pointer group capitalize relative inline-flex py-1.5 md:py-2  items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-7 font-medium text-neutral-200 duration-500"
          >
            <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
              view pricing
            </div>
            <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
              view pricing
            </div>
          </Link>
          <button className="group capitalize relative inline-flex py-1.5 items-center justify-center overflow-hidden rounded-full bg-[#2056FE]/20 px-7 font-medium text-[#2056FE] duration-500">
            <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
              book a call
            </div>
            <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
              book a call
            </div>
          </button>
        </div>
  
           {/* <HeroVideo /> */}
    
      </div>
    </>
  );
}

export default HeroSection;



