import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function ImgHoverEffect({img,className,height,width}) {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    console.log(hover);
  }, [hover]);
  return (
    <div className=" flex justify-center items-center  ">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" h-auto w-full overflow-hidden relative "
      >
        <Image
          src={img}
          alt="img"
          width={width}
          height={height}
          draggable="false"
          quality={100}
          className={className}
        />
        {Array(5)
          .fill(" ")
          .map((e, i) => (
            <motion.figure
              key={i}
              initial={{ scale: 0 }}
              animate={hover ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.5, delay: hover ? 0.1 * (5 - i) : 0.1 * i }}
              // change origin based on the requirements
              className={
                " absolute top-0 left-0 w-full h-full origin-bottom  " + `$z-[${i * 1}]`
              }
            >
              <Image
                src={img}
                alt="img"
                width={width}
                height={height}
                draggable="false"
                quality={100}
                className={className}
              />
            </motion.figure>
          ))}
      </div>
    </div>
  );
}

export default ImgHoverEffect;
