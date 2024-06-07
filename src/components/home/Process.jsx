import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

import img1 from "@/assets/projects/img1.webp";
import img10 from "@/assets/projects/img10.webp";
import img2 from "@/assets/projects/img2.webp";
import img3 from "@/assets/projects/img3.webp";
import img4 from "@/assets/projects/img4.webp";
import img5 from "@/assets/projects/img5.webp";
import img6 from "@/assets/projects/img6.webp";
import img7 from "@/assets/projects/img7.webp";
import img8 from "@/assets/projects/img8.webp";
import img9 from "@/assets/projects/img9.webp";
import MarqueeEffect from "../ui/TextMarqee";
import { RevealText } from "../ui/TextAnimation";

const arr1 = [img1, img2, img3, img4, img5];
const arr2 = [img6, img7, img8, img9, img10];

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: "150px" },
  show: { opacity: 1, y: 0 },
};

function Process() {
  
  return (
    <div id="our process" className=" mt-20 ">
      <SectionHeader
        p={"We're all about taking your business to the next level"}
        h1={"our process"}
        tag={"Process"}
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5 md:gap-10 justify-between items-center mt-14 ">
        {data.map((e, i) => (
          <Card key={i} {...e} />
        ))}
      </div>
      <MarqueeEffect arrs={[arr1,arr2]} imgclass={"h-auto w-40  object-contain"} />
    </div>
  );
}

export default Process;

const Card = ({ id, title, icon, bg, description }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.5,
        delay: id % 2 === 0 ? 0.1 : 0,
      }}
      key={id}
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="bg-white border border-[#000000]/20 rounded-2xl md:rounded-[45px] p-5  pl-8 pb-7"
    >
      <div className="  flex justify-between ">
        <div className="">
          <h2 className=" text-[#2056FE] font-secondary text-5xl ">{id}</h2>
          <h1 className=" text-[#001B6F] text-3xl mt-3 capitalize ">{title}</h1>
        </div>
        <div
          className={"  p-4 w-20 h-20 flex justify-center items-center rounded-xl md:rounded-[25px] " + bg}
          dangerouslySetInnerHTML={{ __html: icon }}
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
    </motion.div>
  );
};

const data = [
  {
    id: 1,
    title: "Subscribe",
    description:
      "Wegrow isn't just another design subscription service often run by one person. From the start, we've been a full team of passionate designers, each specializing in different areas of design.",
    icon: `
        <svg
        width="63"
        height="63"
        viewBox="0 0 63 63"
        class="h-10 w-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.6243 2.06901C30.2686 0.327775 32.7314 0.327775 33.3757 2.06901L40.499 21.3194C40.7016 21.8668 41.1332 22.2984 41.6806 22.501L60.931 29.6243C62.6722 30.2686 62.6722 32.7314 60.931 33.3757L41.6806 40.499C41.1332 40.7016 40.7016 41.1332 40.499 41.6806L33.3757 60.931C32.7314 62.6722 30.2686 62.6722 29.6243 60.931L22.501 41.6806C22.2984 41.1332 21.8668 40.7016 21.3194 40.499L2.06901 33.3757C0.327775 32.7314 0.327775 30.2686 2.06901 29.6243L21.3194 22.501C21.8668 22.2984 22.2984 21.8668 22.501 21.3194L29.6243 2.06901Z"
          fill="#003EFF"
        />
      </svg>
        `,
    bg: "bg-[#CEDAFF]/50",
  },
  {
    id: 2,
    title: "recieve",
    description:
      "Wegrow isn't just another design subscription service often run by one person. From the start, we've been a full team of passionate designers, each specializing in different areas of design.",
    icon: `
    <svg  class="h-10 w-10" width="59" height="56" viewBox="0 0 59 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.5979 1.8541C28.1966 0.0114765 30.8034 0.0114799 31.4021 1.8541L36.7967 18.4569C37.0645 19.281 37.8324 19.8389 38.6988 19.8389H56.1561C58.0935 19.8389 58.8991 22.3181 57.3317 23.4569L43.2084 33.7181C42.5075 34.2274 42.2141 35.1301 42.4819 35.9541L47.8765 52.557C48.4752 54.3996 46.3662 55.9319 44.7988 54.7931L30.6756 44.5319C29.9746 44.0226 29.0254 44.0226 28.3244 44.5319L14.2012 54.7931C12.6338 55.9319 10.5248 54.3996 11.1235 52.557L16.5181 35.9541C16.7859 35.1301 16.4925 34.2274 15.7916 33.7181L1.66834 23.4569C0.100915 22.3181 0.906469 19.8389 2.84392 19.8389H20.3012C21.1676 19.8389 21.9355 19.281 22.2033 18.4569L27.5979 1.8541Z" fill="#F87BD9"/>
    </svg>    
        `,
    bg: "bg-[#F4CDEA]/40",
  },
  {
    id: 3,
    title: "Continue",
    description:
      "Wegrow isn't just another design subscription service often run by one person. From the start, we've been a full team of passionate designers, each specializing in different areas of design.",
    icon: `
    <svg  class="h-10 w-10" width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.5403 1.61663C24.9752 -0.517556 28.0248 -0.517552 28.4597 1.61663L30.3559 10.9212C30.6539 12.384 32.3915 13.0164 33.5601 12.0875L40.9935 6.17855C42.6985 4.82323 45.0346 6.78348 43.996 8.69792L39.4676 17.0444C38.7557 18.3566 39.6802 19.9579 41.1726 19.9975L50.665 20.2491C52.8423 20.3068 53.3719 23.3101 51.3456 24.109L42.5117 27.592C41.1229 28.1396 40.8018 29.9606 41.9196 30.9501L49.0295 37.2445C50.6603 38.6883 49.1355 41.3293 47.0698 40.6389L38.0637 37.6287C36.6479 37.1554 35.2314 38.344 35.4516 39.8205L36.8521 49.2125C37.1734 51.3667 34.3077 52.4097 33.1691 50.553L28.2049 42.4581C27.4245 41.1854 25.5755 41.1854 24.7951 42.4581L19.8309 50.553C18.6923 52.4097 15.8266 51.3667 16.1479 49.2125L17.5484 39.8205C17.7686 38.344 16.3521 37.1554 14.9363 37.6287L5.93023 40.6389C3.86451 41.3293 2.33971 38.6883 3.97051 37.2445L11.0804 30.9501C12.1982 29.9606 11.8771 28.1396 10.4883 27.592L1.65436 24.109C-0.37188 23.3101 0.157684 20.3068 2.33497 20.2491L11.8274 19.9975C13.3198 19.9579 14.2443 18.3566 13.5324 17.0444L9.00404 8.69792C7.96538 6.78348 10.3015 4.82323 12.0065 6.17855L19.4399 12.0875C20.6085 13.0164 22.3461 12.384 22.6441 10.9212L24.5403 1.61663Z" fill="#001964"/>
    </svg>    
        `,
    bg: "bg-[#001B6C]/20",
  },
];
