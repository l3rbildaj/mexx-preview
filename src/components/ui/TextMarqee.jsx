/* eslint-disable @next/next/no-img-element */
"use client";

import { useWindowSize } from "@react-hook/window-size";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRafLoop } from "react-use";


const _ = {
    speed: 1,
    threshold: 0.014,
    wheelFactor: 1.25,
    dragFactor: 1.2,
};


export default function MarqueeEffect({ arrs,imgclass }) {
    const x = useRef(0);
    const x2 = useRef(0);
    const x3 = useRef(0);
    const x4 = useRef(0);

    const onWheel = async (e) => {
        const { default: normalizeWheel } = await import('normalize-wheel');

        const normalized = normalizeWheel(e);
        x.current = normalized.pixelY * _.wheelFactor;
        x2.current = normalized.pixelY * _.wheelFactor;
        x3.current = normalized.pixelY * _.wheelFactor;
        x4.current = normalized.pixelY * _.wheelFactor;
    };

    return (
        <main
            className="flex flex-col max-w-screen overflow-x-hidden items-center text-center"
            onWheel={onWheel}
        >


            <div className="mt-20">
                <div className="flex gap-5 md:gap-[40px] flex-col">
                    {arrs.map((e, i) => (
                        <MyMarquee
                            x={x}
                            key={i}
                            imgclass={imgclass}
                            direction={i % 2 == 0 ? "left" : "right" }
                            speedDetails={{
                                damping: 200,
                                stiffness: 1000,
                                mass: 1,
                            }}
                            cardData={e}
                        />

                    ))}
                </div>
            </div>
        </main>
    );
}

const MyMarquee = ({ x, direction, speedDetails, cardData,imgclass }) => {
    var initialValue = _.speed;

    if (direction === "right") {
        initialValue *= -1;
    }

    const speed = useSpring(initialValue, speedDetails);

    const marquee = useRef(null);

    const slowDown = useRef(false);

    const onDragStart = () => {
        slowDown.current = true;
        marquee.current.classList.add("drag");
        speed.set(0);
    };

    const onDrag = (e, info) => {
        speed.set(_.dragFactor * -info.delta.x);
    };

    const onDragEnd = (e) => {
        slowDown.current = false;
        marquee.current.classList.remove("drag");
        x.current = _.speed;
    };

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < _.threshold) return; // to preserver a minimum speed

        x.current *= 0.66; // so we gradiuallly decrease the speed to a threshold other wise it will infinitley speed

        if (direction === "right") {
            speed.set((_.speed + x.current) * -1);
        } else {
            speed.set(_.speed + x.current);
        }
    };

    useRafLoop(loop, true);

    return (
        <>
            <motion.div
                className="marquee flex gap-3 md:gap-[30px] ![mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                ref={marquee}
                onDrag={onDrag}
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
            >
                <MarqueeItem speed={speed}>
                    {cardData.map((item, index) => (
                        <Card key={index} item={item} imgclass={imgclass} />
                    ))}
                </MarqueeItem>
                <MarqueeItem speed={speed}>
                    {cardData.map((item, index) => (
                        <Card key={index} item={item} imgclass={imgclass} />
                    ))}
                </MarqueeItem>
                <MarqueeItem speed={speed}>
                    {cardData.map((item, index) => (
                        <Card key={index} item={item} imgclass={imgclass} />
                    ))}
                </MarqueeItem>{" "}
                <MarqueeItem speed={speed}>
                    {cardData.map((item, index) => (
                        <Card key={index} item={item} imgclass={imgclass} />
                    ))}
                </MarqueeItem>
            </motion.div>
        </>
    );
};

const MarqueeItem = ({ children, speed }) => {
    const item = useRef(null);
    const rect = useRef({});
    const x = useRef(0);

    const [width, height] = useWindowSize();

    const setX = () => {
        if (!item.current || !rect.current) return;

        var xPercentage = (x.current / rect.current.width) * 100;
        if (xPercentage < -100) x.current = 0;
        if (xPercentage > 0) x.current = -rect.current.width;

        item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
    };

    useEffect(() => {
        rect.current = item.current.getBoundingClientRect();
    }, [width, height]);

    const loop = (e) => {
        x.current -= speed.get();
        setX();
    };

    useRafLoop(loop, true);

    return (
        <div
            draggable={false}
            className="item shrink-0 flex gap-[40px] items-center  text-white   whitespace-nowrap"
            ref={item}
        >
            {children}
        </div>
    );
};

const Card = ({ item,imgclass }) => {
    return (
        <Image
            src={item}
            alt=""
            draggable="false"
            width={1000}
            height={1000}
            priority
            className={imgclass}
        />
    );
};