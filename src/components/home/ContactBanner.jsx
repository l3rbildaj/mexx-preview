import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import logo from "@/assets/logo.png";

function ContactBanner() {
  return (
    <div className=" relative z-[10] bg-[#111111] px-5 ">
      <div className=" 2xl:max-w-[1400px]  mx-auto ">
        <div className=" absolute  !top-0 left-0 z-[9999]   bg-[#F6F8FF] bg-[size:100px_100px] rounded-b-[50px] rounded-t-[50px] w-full  h-[400px] md:h-[80vh] flex flex-col justify-center items-center gap-5 text-center ">
          <motion.svg
            width="61"
            height="70"
            viewBox="0 0 61 70"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10 }}
            className=" absolute -top-5 left-80 h-10 w-10 md:h-[70px] md:w-[61px] md:left-72 "
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
            transition={{ repeat: Infinity, duration: 10 }}
            className=" absolute h-10 w-10 md:h-[72px] md:w-[73px] top-44 md:top-20 right-5 md:right-20 "
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
            transition={{ repeat: Infinity, duration: 10 }}
            className=" absolute top-80 w-10 h-10 md:w-[86px] md:h-[85px]  left-5 md:left-72 "
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
          </motion.svg>
          <Image
            src={logo}
            alt="logo"
            width={1000}
            height={1000}
            className=" w-48  "
            draggable="false"
            priority
            quality={100}
          />
          <h1 itemprop="headline" aria-label="Ready to make your brand legendary?" className=" text-5xl xs:text-6xl sm:text-6xl lg:text-7xl max-w-[350px] xs:max-w-[450px] sm:max-w-[600px] z-[2] text-center mx-auto capitalize text-[#001B6F]  ">
            Ready to make your brand{" "}
            <span className=" text-[#567CFE] font-secondary ">legendary?</span>{" "}
          </h1>

          <p className=" text-[#062AA9]/50 max-w-[350px] md:max-w-[400px] ">
            Let&apos;s craft a brand that leaves a lasting legacy. Your journey
            starts now.
          </p>
          <div className=" flex justify-center items-center gap-5 mt-0 mb-5 md:mt-10 ">
            <Link
              id={"linkscroll"}
              to="pricing"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="w-fit cursor-pointer group capitalize relative inline-flex py-2.5 md:py-3  items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-14 font-medium text-neutral-200 duration-500"
            >
              <div className="translate-x-0 transition group-hover:-translate-x-[200%]">
                start now
              </div>
              <div className="absolute translate-x-[200%] transition group-hover:translate-x-0">
                start now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
