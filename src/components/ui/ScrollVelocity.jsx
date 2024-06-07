"use client"

import { wrap } from "@motionone/utils";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity
} from "framer-motion";
import { useRef } from "react";


import img1 from "@/assets/projects/img1.png";
import img10 from "@/assets/projects/img10.png";
import img2 from "@/assets/projects/img2.png";
import img3 from "@/assets/projects/img3.png";
import img4 from "@/assets/projects/img4.png";
import img5 from "@/assets/projects/img5.png";
import img6 from "@/assets/projects/img6.png";
import img7 from "@/assets/projects/img7.png";
import img8 from "@/assets/projects/img8.png";
import img9 from "@/assets/projects/img9.png";
import Image from "next/image";

const arr1 = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5, img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];
const arr2 = [img6, img7, img8, img9, img10, img6, img7, img8, img9, img10, img6, img7, img8, img9, img10, img6, img7, img8, img9, img10];







export function ParallaxImgs({ children, baseVelocity = 100, imgs }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    
    const x = useTransform(baseX, (v) => `${wrap(-imgs?.length, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });


  

    return (
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] tracking-[-2px] leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className=" gap-5 font-semibold uppercase text-4xl sm:text-7xl flex whitespace-nowrap flex-nowrap " style={{ x }}>
                {/* {duplicatedImages.map((e, i) => (
                    <Image
                        key={i}
                        src={e}
                        alt=""
                        width={1000}
                        height={1000}
                        priority
                        className=" h-auto w-40  object-contain "
                    />
                ))} */}
              {children}
            </motion.div>
        </div>
    );
}

// export default function Marqee() {
//     return (
//         <section className=" relative text-white flex flex-col gap-5">
//             <ParallaxImgs imgs={arr1} baseVelocity={5}></ParallaxImgs>
//             <ParallaxImgs imgs={arr2} baseVelocity={-5}></ParallaxImgs>
//         </section>
//     );
// }

