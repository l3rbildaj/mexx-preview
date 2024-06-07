import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { scale, slide } from "../../anime";

export default function CustomLink({ data, isActive, setSelectedIndicator,setIsActive }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={" capitalize relative flex items-center  "}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={
          " w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-15px] md:left-[-30px] "
        }
      ></motion.div>
      <Link
        id={"linkscroll"}
        onClick={() => setIsActive(false)}
        to={href}
        spy={true}
        smooth={true}
        offset={-30}
        duration={500}
        className=" text-black text-4xl cursor-pointer  "
      >
        {title}
      </Link>
    </motion.div>
  );
}
