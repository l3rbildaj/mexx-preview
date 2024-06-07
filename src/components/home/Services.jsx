import SectionHeader from "../ui/SectionHeader";

import img1 from "@/assets/services/img1.webp";
import img2 from "@/assets/services/img2.webp";
import img3 from "@/assets/services/img3.webp";
import Image from "next/image";
import { RevealText } from "../ui/TextAnimation";
import {motion} from "framer-motion"


function Services() {
  return (
    <div id="our services" className=" mt-20 ">
      <SectionHeader
        p={"We're all about taking your business to the next level"}
        h1={"our Services"}
        tag={"Services"}
      />
      <div className=" mt-20 flex flex-col gap-5 items-end ">
        {data.map((e, i) => (
          <Card key={i} {...e} />
        ))}
      </div>
    </div>
  );
}

export default Services;

const Card = ({ tag, title, description, img }) => {
  return (
    <motion.div 
    // initial={{width:"30px",height:"30px"}} whileInView={{width:"100%",height:"350px"}}  
    viewport={{once:true,amount:0}} className="bg-white origin-right flex-col md:flex-row flex justify-between md:gap-10 p-5 md:p-10 border border-[#000000]/20 rounded-2xl md:rounded-[50px] ">
      <div className=" md:w-4/6 ">
        <div className=" flex justify-between gap-3 flex-col ">
          <div className="">
            <span className=" rounded-full text-[#062AA9] border border-[#062AA9] py-1 md:py-1.5 px-5 text-xs capitalize ">
              {tag}
            </span>
            <h1
              className=" text-[#001B6F] text-4xl md:text-5xl mt-3 capitalize max-w-[400px] "
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          </div>
             <Image
        src={img}
        alt=""
        width={1000}
        height={1000}
        draggable="false"
        priority
        className=" h-full w-full object-cover md:object-contain  md:hidden "
      />
        </div>
        <hr className=" h-[1px] w-full my-5 bg-[#000000]/10 " />
        <RevealText
              aria_label={description}
              classNameSpan={"pb-1"}
              className=" text-[#001B6F]/50 "
              text={[
                {
                  type: "paragraph",
                  text: description,
                },
              ]}
            />
      </div>
      <div className=" hidden md:flex md:w-3/6 h-auto ">
      <Image
        src={img}
        alt=""
        width={1000}
        height={1000}
        draggable="false"
        priority
        className=" h-auto rounded-[40px] w-full object-cover  xl:object-contain "
      />
      </div>
    
    </motion.div>
  );
};

{/* <Canvas style={{
    zIndex: 0,
    height: '300px',
    width: 'auto',
    background: 'transparent',
    borderRadius:"40px"
  }}>
<ambientLight />
<pointLight position={[10, 10, 10]} />
<ImageMesh imageUrl={"/poster.png"} position={[0, 0, 0]} />
</Canvas> */}
{/* <ImgHoverEffect img={img} width={1000} height={1000}  className=" h-auto   object-contain  "  /> */}






const data = [
  {
    tag: "branding",
    title:
    "creating brands that <span class='text-[#2056FE] capitalize font-secondary' >stand out<span>",
    description:
    "We began as a team of four and have grown to six, not including our cheerful corgi, Ollie, who keeps our spirits high. We could have been a one-person studio, juggling everything alone, and making a ton of money, but that's not us. Money are important, but it's not everything. We value quality over quantity and believe in delivering excellence that justifies every penny spent by our clients.",
    img: img1,
  },
  {
    tag: "videos",
    title:
      "creating videos that  <span class='text-[#2056FE] capitalize font-secondary' >wows<span>",
    description:
      "We began as a team of four and have grown to six, not including our cheerful corgi, Ollie, who keeps our spirits high. We could have been a one-person studio, juggling everything alone, and making a ton of money, but that's not us. Money are important, but it's not everything. We value quality over quantity and believe in delivering excellence that justifies every penny spent by our clients.",
    img: img2,
  },
  {
    tag: "web development",
    title:
      "creating websites that <span class='text-[#2056FE] capitalize font-secondary' >convert<span>",
    description:
      "We began as a team of four and have grown to six, not including our cheerful corgi, Ollie, who keeps our spirits high. We could have been a one-person studio, juggling everything alone, and making a ton of money, but that's not us. Money are important, but it's not everything. We value quality over quantity and believe in delivering excellence that justifies every penny spent by our clients.",
    img: img3,
  },
];
