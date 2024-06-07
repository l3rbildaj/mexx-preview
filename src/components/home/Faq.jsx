import SectionHeader from "../ui/SectionHeader";

import { AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

function Faq() {
  const elemRef = useRef();

  return (
    <div ref={elemRef} id="faq" className=" w-full  mt-20 ">
      <SectionHeader
        p={"We're all about taking your business to the next level"}
        h1={"FAQ"}
        tag={"Ask us anything"}
      />

      <div className=" pt-10 lg:pt-20 flex flex-col gap-5 ">
        {faqs.map((e, i) => (
          <Accordion
            key={i}
            data={e}
            questionClassName={
              " capitalize text-white  leading-[22px] font-normal px-3 gap-8 py-5 xs:!py-5 lg:py-6 leading-7 sm:leading-2 md:leading-none  flex items-center justify-between cursor-pointer text-lg md:text-xl lg:text-2xl !font-medium  "
            }
            containerClassName={
              " pt-0 px-4 pr-3 sm:pr-10 sm:px-10  md:rounded-full bg-[#567CFE] overflow-hidden w-full"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;

const Accordion = ({ data, containerClassName, questionClassName }) => {
  const [openItem, setOpenItem] = useState(null);
  const isMobile = useIsMobile()

  const toggleItem = () => {
    setOpenItem(!openItem);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: "-10%",
    amount: 0.4,
  });

  return (
    <motion.div
      initial={{ borderRadius: isMobile ? "10px" : "99px" }}
      animate={{ borderRadius: openItem && isMobile ? "10px" : openItem && !isMobile ? "20px" : "40px" }}
      transition={{ duration: 1, ease: "backInOut" }}
      className={containerClassName}
    >
      <div className="  my-0 mx-auto flex flex-col   ">
        <div className=" flex flex-col gap-5 " ref={accordionRef}>
          <motion.div
            className="flex flex-col   overflow-hidden  "
            variants={animate}
            initial="initial"
            animate={isInView ? "open" : ""}
          >
            <motion.div
              onClick={() => toggleItem()}
              className={questionClassName}
            >
              {data.question}
              <svg
                className=" w-5 h-5 lg:w-6 lg:ml-3 "
                viewBox="0 0 34 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 16.7822L14.6611 4.12111C15.8327 2.94954 17.7322 2.94954 18.9037 4.12111L31.5649 16.7822"
                  stroke="white"
                  strokeWidth="5"
                />
              </svg>
            </motion.div>
            <AnimatePresence>
              {openItem && (
                <motion.div
                  className=" text-sm md:text-md  font-normal "
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p className=" text-white/70 w-full md:w-[90%] px-3 leading-[22px] text-lg lg:text-xl lg:leading-normal text-left pb-8">
                    {data.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const faqs = [
  {
    question: " What services does VISION BRIDGE offer?    ",
    answer: `
    VISION BRIDGE provides a wide range of telecommunication services including internet connectivity solutions, VoIP (Voice over Internet Protocol), cloud-based communication platforms, enterprise packages, and more. We tailor our offerings to meet the diverse needs of individuals, small businesses, and large corporations.
    `,
  },
  {
    question: " How can VISION BRIDGE benefit my business? ",
    answer: `
    By partnering with VISION BRIDGE, your business gains access to cutting-edge communication technologies that enhance efficiency, collaboration, and productivity. Our solutions are designed to streamline your communication processes, reduce costs, and provide scalability to support your growth objectives.
    `,
  },
  {
    question: " Is VISION BRIDGE suitable for small businesses? ",
    answer: `
    Absolutely! VISION BRIDGE offers scalable solutions suitable for businesses of all sizes. Whether you're a startup looking for reliable internet connectivity or a small business in need of a comprehensive communication platform, we have tailored packages to meet your requirements and budget.
    `,
  },
  {
    question:
      " What sets VISION BRIDGE apart from other telecommunication providers?",
    answer: `
        
    At VISION BRIDGE, we differentiate ourselves through our unwavering commitment to customer satisfaction, reliability, and innovation. Our team of experts is dedicated to understanding your unique needs and providing personalized solutions that exceed your expectations. Additionally, we stay at the forefront of technological advancements to ensure that you always have access to the latest tools and features.
    `,
  },
  {
    question: " How can I get started with VISION BRIDGE services? ",
    answer: `
    Getting started with VISION BRIDGE is simple! You can reach out to our team through our website or contact us directly via phone or email. We'll work with you to assess your needs, recommend the best solutions, and guide you through the onboarding process to ensure a smooth transition.
    `,
  },
];
