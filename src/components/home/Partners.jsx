import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader from "../ui/SectionHeader";

import img1 from "@/assets/partners/img1.webp";
import img2 from "@/assets/partners/img2.webp";
import img3 from "@/assets/partners/img3.webp";
import img4 from "@/assets/partners/img4.webp";
import img5 from "@/assets/partners/img5.webp";
import img6 from "@/assets/partners/img6.webp";
import img7 from "@/assets/partners/img7.webp";
import img8 from "@/assets/partners/img8.webp";
import { Link } from "react-scroll";
import { RevealText } from "../ui/TextAnimation";
import MarqueeEffect from "../ui/TextMarqee";

const data = [img1, img2, img3, img4, img5, img6, img7, img8];

function Partners() {
  const [hover, setHover] = useState(false);
  
  return (
    <div id="partners" className=" lg:px-5  -mt-10 2xl:-mt-10 ">
      <SectionHeader
        p={"We're all about taking your business to the next level"}
        h1={"our partners"}
        tag={"parnters"}
      />
      <MarqueeEffect imgclass=" h-16 w-16  md:h-24 md:w-24 mx-0 md:mx-10 object-contain" arrs={[data]} />
      
      <div className=" mt-20 py-14  xl:pl-14 xl:pr-5 px-5 gap-5 md:gap-10 xl:gap-20 bg-white border border-[#000000]/20 rounded-2xl sm:rounded-3xl lg:rounded-[50px] flex-col md:flex-row flex justify-center  ">
        <div className="   ">
          <h2 className=" text-[#001B6F] text-4xl sm:text-5xl capitalize max-w-[400px] text-left ">
            Crafting quality you’ll{" "}
            <span className=" text-[#2056FE] font-secondary capitalize ">
              remember
            </span>
          </h2>
          <div className=" mt-10 md:max-w-[500px] ">
            <RevealText
              aria_label={
                " Wegrow isn't just another design subscription service often run by one person. From the start, we've been a full team of passionate designers, each specializing in different areas of design."
              }
              classNameSpan={"pb-1"}
              className=" text-[#001B6F]/50 mt-10  text-left "
              text={[
                {
                  type: "paragraph",
                  text: " Wegrow isn't just another design subscription service often run by one person. From the start, we've been a full team of passionate designers, each specializing in different areas of design.",
                },
              ]}
            />
          </div>
        </div>
        <hr className=" bg-[#000000]/20  w-[1px] h-auto "></hr>
        <div className=" ">
          <div className="  md:max-w-[500px] ">
            <RevealText
              aria_label={`We began as a team of four and have grown to six, not including our
                cheerful corgi, Ollie, who keeps our spirits high. We could have
                been a one-person studio, juggling everything alone, and making a
                ton of money, but that's not us. Money are important, but
                it's not everything. We value quality over quantity and believe
                in delivering excellence that justifies every penny spent by our
                clients.`}
              classNameSpan={"pb-1"}
              className=" text-[#001B6F]/50 mt-10  text-left "
              text={[
                {
                  type: "paragraph",
                  text: `We began as a team of four and have grown to six, not including our cheerful corgi, Ollie, who keeps our spirits high. We could have been a one-person studio, juggling everything alone, and making a ton of money, but that's not us. Money are important, but it's not everything. We value quality over quantity and believe in delivering excellence that justifies every penny spent by our clients.`,
                },
              ]}
            />
          </div>

          <Link
            id={"linkscroll"}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className=" cursor-pointer group capitalize text-[#2056FE] mt-5 relative inline-flex h-11 md:h-[calc(40px+8px)] items-center justify-center rounded-full bg-[#2056FE]/20 py-1 pl-6 pr-14 font-medium hover:text-neutral-50"
          >
            <span className="z-10 pr-2">view our pricing</span>
            <div className="absolute right-1 inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-end rounded-full bg-[#2056FE] transition-[width] group-hover:w-[calc(100%-8px)]">
              <div className=" mr-3 md:mr-4 flex items-center justify-center">
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34314 0.928933C1.95262 0.538409 1.31946 0.538409 0.928931 0.928933C0.538407 1.31946 0.538407 1.95262 0.928931 2.34315L6.58579 8L0.928933 13.6569C0.538409 14.0474 0.538409 14.6805 0.928933 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9L8 9L8 7L7 7L7 9Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className=" bg-[#F87BD9]/10 p-6 w-fit h-fit rounded-[25px] -mt-9 hidden  xl:flex ">
          <svg
            width="46"
            height="43"
            className=" h-10 w-10 "
            viewBox="0 0 55 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1344 2.23983C25.7088 -0.211217 29.2912 -0.21122 30.8656 2.23983L37.3966 12.4079C37.9383 13.2513 38.7768 13.8605 39.7462 14.1151L51.4349 17.1843C54.2525 17.9242 55.3595 21.3313 53.5149 23.586L45.8627 32.9395C45.228 33.7153 44.9077 34.701 44.9652 35.7017L45.6581 47.7667C45.8252 50.675 42.9269 52.7807 40.2125 51.7231L28.9522 47.3358C28.0183 46.9719 26.9817 46.9719 26.0478 47.3358L14.7875 51.7231C12.0731 52.7807 9.17482 50.675 9.34186 47.7667L10.0348 35.7017C10.0923 34.701 9.77201 33.7153 9.13734 32.9395L1.48508 23.586C-0.359515 21.3313 0.747533 17.9242 3.56511 17.1843L15.2538 14.1151C16.2232 13.8605 17.0617 13.2513 17.6034 12.4079L24.1344 2.23983Z"
              fill="#F87BD9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Partners;
