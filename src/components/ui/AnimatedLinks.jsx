'use client';
import { motion } from "framer-motion";
import { useState } from 'react';
import { Link } from "react-scroll";


const titleAnimation = {
    rest: {
        transition: {
            staggerChildren: 0.005,
        },
    },
    hover: {
        transition: {
            staggerChildren: 0.005,
        },
    },
};

const letterAnimation = {
    rest: {
        y: 0,
    },
    hover: {
        y: -25,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: 'tween',
        },
    },
};

const letterAnimationTwo = {
    rest: {
        y: 25,
    },
    hover: {
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: 'tween',
        },
    },
};

const AnimatedLink = ({ title, url, className, textsize, linkType = "reactlink" }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className={'relative pointer flex flex-col overflow-hidden ' + className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {
                linkType == "reactlink" ?
                    <Link id={"linkscroll"}
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        className=" cursor-pointer "
                        to={url}>
                        <AnimatedWord
                            textsize={textsize}
                            title={title}
                            animations={letterAnimation}
                            isHovered={isHovered}
                        />
                        <motion.div className='absolute top-0' >
                            <AnimatedWord
                                textsize={textsize}
                                title={title}
                                animations={letterAnimationTwo}
                                isHovered={isHovered}
                            />
                        </motion.div>
                    </Link> : <Link
                        href={url}>
                        <AnimatedWord
                            textsize={textsize}
                            title={title}
                            animations={letterAnimation}
                            isHovered={isHovered}
                        />
                        <motion.div className='absolute top-0' >
                            <AnimatedWord
                                textsize={textsize}
                                title={title}
                                animations={letterAnimationTwo}
                                isHovered={isHovered}
                            />
                        </motion.div>
                    </Link>
            }
        </motion.div>
    );
};

export default AnimatedLink;

const AnimatedWord = ({
    title,
    animations,
    isHovered,
    textsize = "1rem"
}) => (
    <motion.span className='whitespace-nowrap relative'
        variants={titleAnimation}
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
    >
        {title.split('').map((char, i) =>
            char === ' ' ? (
                <motion.span className={`relative inline-block whitespace-nowrap text-[${textsize}]`} key={i}>&nbsp;</motion.span>
            ) : (
                <motion.span className={`relative inline-block whitespace-nowrap text-[${textsize}]`} variants={animations} key={i}>
                    {char}
                </motion.span>
            )
        )}
    </motion.span>
);
