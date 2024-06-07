
import {
  MediaPlayer,
  MediaProvider,
  // MuteButton,
  // PlayButton,
  // Poster,
  // useMediaState,
} from "@vidstack/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import {
//   FaPauseCircle,
//   FaPlay,
//   FaVolumeDown,
//   FaVolumeMute,
//   FaVolumeUp,
// } from "react-icons/fa";

function HeroVideo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-500px start", "end 300px"],
  });

  const translateY = useTransform(scrollYProgress, [0, .2, .4, 0.5], ["-50px", "-200px", "-300px", "-300px"], null, { ease: [0.65, 0, 0.35, 1] });
  const translateZ = useTransform(scrollYProgress, [0, .2, .4, 0.5], ["100px", "50px", "0px", "0px"], null, { ease: [0.65, 0, 0.35, 1] });
  const rotateX = useTransform(scrollYProgress, [0, .1, .2, 0.5], ["20deg", "20deg", "0deg", "0deg"], null, { ease: [0.65, 0, 0.35, 1] });
  const rotateY = useTransform(scrollYProgress, [0, .1, .2, 0.5], ["10deg", "10deg", "0deg", "0deg"], null, { ease: [0.65, 0, 0.35, 1] });
  const scale = useTransform(scrollYProgress, [0, .1, .3, 0.5], ["0.8", "0.8", "1", "1"], null, { ease: [0.65, 0, 0.35, 1] });


  return (
    <div className=" z-[10] w-full [perspective:1500px] " ref={ref}>
      <motion.div
        style={{ translateY: translateY, rotateX: rotateX, translateZ: translateZ, rotateY: rotateY, scale: scale }}
        viewport={{ once: false, amount: 0.4 }}
        className=" mt-20 !overflow-hidden !rounded-[70px] [transform:translateZ(20px)_rotateX(20deg)]  w-full h-[80vh]  "
      >
        <MediaPlayer
          autoPlay={true}
          title="Sprite Fight"
          muted
          loop
          src="https://framerusercontent.com/assets/n3PSHVoksrCNC8PKf4bnMLDf3yc.mp4"
          className=" !rounded-[70px] w-full h-[80vh] "
        >
          <MediaProvider />
          {/* <Poster
            className="absolute inset-0 block object-cover object-center h-[80vh] scale-105  w-full bg-black rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
            src={"/poster.png"}
            alt=""
          /> */}
          {/* <Controllers /> */}
        </MediaPlayer>
      </motion.div>
    </div>
  );
}

export default HeroVideo;

// const Controllers = () => {
//   const isPaused = useMediaState("paused");

//   return (
//     <div className=" flex justify-between gap-2 items-center absolute bottom-6 right-10 bg-white py-4 px-6 rounded-full ">
//       <MuteButton className="group ring-sky-400 bg-transparent relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
//         <FaVolumeMute className="w-8 h-8 hidden text-black group-data-[state='muted']:block" />
//         <FaVolumeDown className="w-8 h-8 hidden text-black group-data-[state='low']:block" />
//         <FaVolumeUp className="w-8 h-8 hidden text-black group-data-[state='high']:block" />
//       </MuteButton>
//       <hr className=" bg-[#000000]/10 h-[1px] w-[30px] rotate-90 "></hr>
//       <PlayButton className=" group ring-sky-400  bg-transparent text-black  inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
//         {isPaused ? (
//           <FaPlay className="w-6 h-6 text-black hidden group-data-[paused]:block" />
//         ) : (
//           <FaPauseCircle className="w-8 h-8 text-black group-data-[paused]:hidden" />
//         )}
//       </PlayButton>
//     </div>
//   );
// };
