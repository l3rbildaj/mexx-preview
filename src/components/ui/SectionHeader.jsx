import { Suspense } from "react";
import MaskElement from "./MaskElement";

function SectionHeader(props) {
  return (
    <Suspense>
    <div className=" justify-center items-center flex flex-col gap-1 md:gap-3 ">
      <MaskElement className={"mt-2"}>
        <span className=" rounded-full text-[#062AA9] border border-[#062AA9] text-xs md:text-base  py-0.5 px-3 capitalize ">
          {props.tag}
        </span>
      </MaskElement>
      <MaskElement className={props.padding && " pb-1 "}>
        <h1 className={" text-[#062AA9] text-4xl md:text-5xl capitalize " }>{props.h1}</h1>
      </MaskElement>
      <MaskElement>
        <p className=" text-[#062AA9] text-md text-center md:text-xl capitalize max-w-[300px] md:max-w-[1000px] ">{props.p}</p>
      </MaskElement>
    </div>
    </Suspense>
  );
}

export default SectionHeader;
