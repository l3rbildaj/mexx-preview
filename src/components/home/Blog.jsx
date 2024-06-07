"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";



const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 100,
  damping: 1,
};



const container = {
  visible: {
    transition: {
      staggerChildren: 0.002,
    },
  },
};

const Blog = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  const [sliderWidth, setSliderWidths] = useState(0);
  const [slidesWidth, setSlidesWidths] = useState(0);

  const slideMarginRight = 0;
  const totalSlidesMarginRight = slideMarginRight * data.length;

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth);
    };

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes;
      const slidesArr = Array.from(slidesNode);
      const slidesSumWidth = slidesArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0
      );
      setSlidesWidths(slidesSumWidth);
    };

    measureSliderWidth();
    measureSlidesWidth();

    window.addEventListener("resize", measureSliderWidth);
    window.addEventListener("resize", measureSlidesWidth);

    return () => {
      window.removeEventListener("resize", measureSliderWidth);
      window.removeEventListener("resize", measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth]);

  return (
    <Suspense>
      <div id="blog" className=" px-5 mx-auto max-w-[1450px] w-full mt-20">
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          whileInView={"visible"}
          variants={container}
          viewport={{ once: true, amount: 0.4 }}
        >
          <SectionHeader
            padding={true}
            p={"We're all about taking your business to the next level"}
            h1={"our blog"}
            tag={"parnters"}
          />
        </motion.div>
      </div>
      <div
        ref={sliderRef}
        className=" max-w-full transition-all ease-in-out duration-[0.4s] mt-20"
      >
        <motion.ul
          ref={slidesRef}
          drag="x"
          dragConstraints={{
            left: -(slidesWidth - sliderWidth + totalSlidesMarginRight + 500),
            right: 0,
          }}
          dragElastic={0.4}
          dragTransition={{ bounceDamping: 18 }}
          className="blog__slides active:cursor-grabbing hover:cursor-grab flex gap-[70px] list-none will-change-transform group  [transition:0.4s_ease-out_all] ml-10 md:ml-20"
        >

          {data.map((e, i) => (
            <motion.li transition={SPRING_OPTIONS} key={i} className="  group-active:mx-1 transition-all ease-in-out duration-300 group-active:scale-90 ">
              {/* <div
                style={{
                  backgroundImage: `url('https://plus.unsplash.com/premium_photo-1711610242379-ad4af007a2c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8')`,
                }}
              /> */}

              <div className=" !select-none w-[250px] rounded-xl  relative ">
                <Image
                  alt=""
                  src={e.img}
                  width={1000}
                  height={1000}
                  draggable="false"
                  className="   scale-125 object-cover rounded-xl !h-[300px] w-full "
                />
                <span className={" absolute -bottom-6 -left-3 text-white rounded-full backdrop-blur-lg z-[3] px-3 " + ` ${e.categorieColor}`}>{e.categorie}</span>
              </div>

              <div className=" -ml-7  w-[280px] ">
                <p className=" text-black/60 mt-12  text-sm  w-full">{e.date}</p>
                <p className=" text-black/50  mt-5 mb-3 ">  <bold className=" text-black   ">Headless Humaan: </bold>  A fresh new look for humaan.com – our sixth iteration. Please, take a look around.</p>
                <Link className=" underline underline-offset-2 text-[#062AA9] " href={"blog/" + e.id}>Go Explore</Link>

              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Suspense>
  );
};

export default Blog;











import img1 from "@/assets/blog/img1.webp";
import img2 from "@/assets/blog/img2.webp";
import img3 from "@/assets/blog/img3.webp";
import img4 from "@/assets/blog/img4.webp";
import img5 from "@/assets/blog/img5.webp";
import SectionHeader from "../ui/SectionHeader";





const data = [
  {
    id: 1,
    img: img1,
    categorie: "Tourist",
    title: "Orangy",
    subtitle: "",
    date: "18.12.24",
    categorieColor: "bg-[#8bfef8]/40",
    description: []
  },
  {
    id: 2,
    img: img2,
    categorie: "Tourist",
    title: "Orangy",
    subtitle: "",
    date: "18.12.24",
    categorieColor: "bg-[#fbd77d]/40",
    description: []
  },
  {
    id: 3,
    img: img3,
    categorie: "Tourist",
    title: "Orangy",
    subtitle: "",
    date: "18.12.24",
    categorieColor: "bg-[#dfdfdf]/40",
    description: []
  },
  {
    id: 4,
    img: img4,
    categorie: "Tourist",
    title: "Orangy",
    subtitle: "",
    date: "18.12.24",
    categorieColor: "bg-[#c7e7f8]/40",
    description: []
  },
  {
    id: 5,
    img: img5,
    categorie: "Tourist",
    title: "Orangy",
    subtitle: "",
    date: "18.12.24",
    categorieColor: "bg-[#3a25f9]/40",
    description: []
  },

]