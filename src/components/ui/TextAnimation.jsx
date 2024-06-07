import React, { Suspense } from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className={props.className + " mx-auto "}>{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [index, item] of splitWords.entries()) {
    words.push(item.split(" "));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Suspense>

    <Tag aria-label={props.aria_label} className="leading-none" >
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper className={props.className} key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  className=" leading-none "
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block", color: props.color }}
                    variants={item}
                    className={props.classNameSpan}
                    dangerouslySetInnerHTML={{ __html: element }}
                  >

                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
    </Suspense>
  );
};

export default AnimatedCharacters;






const container = {
  visible: {
    transition: {
      staggerChildren: 0.002,
    },
  },
};

export const RevealText = ({ text, className,classNameSpan,aria_label }) => (
  
  <motion.div
    className=""
    initial="hidden"
    // animate="visible"
    whileInView={"visible"}
    variants={container}
    viewport={{ once: true, amount: 0.4 }}
  >
    <div className="">
      {text.map((item, index) => {
        return (
          <AnimatedCharacters
            {...item}
            key={index}
            aria_label={aria_label}
            classNameSpan={classNameSpan}
            className={className}
          />
        );
      })}
    </div>
  </motion.div>
);


