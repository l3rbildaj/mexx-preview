import logo from "@/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function PopUp({ isOpen, setIsOpen }) {
  const [val, setVal] = useState({
    email: "",
  });

  const InputHandler = (e) => {
    const { value, name } = e.target;
    setVal({ ...val, [name]: value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          class="fixed grid place-items-center !z-[999999999] bg-white/50 backdrop-blur-sm top-0 right-0 left-0 w-full inset-0 h-modal h-full justify-center items-center"
        >
          <div class="relative container m-auto px-2 md:px-6">
            <div class="m-auto md:w-9/12">
              <motion.div
                initial={{ scale: 0, rotate: "12.5deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                exit={{ scale: 0, rotate: "0deg" }}
                onClick={(e) => e.stopPropagation()}
                class=" bg-[#F3F6FF]  shadow-xl z-[9999999] border  border-[#2056FE]/20 rounded-[36px] "
              >
                <div class="p-8">
                  <div class="flex flex-col items-center gap-2">
                    <Image
                      width={2000}
                      height={2000}
                      src={logo}
                      alt=""
                      class="inline-block w-48 object-cover"
                    />
                    {/* <h6 class=" text-xs text-black text-center w-3/4  font-light ">
                      Contact us and we{"'"}ll get back to you faster than you
                      can say Autodesk.
                    </h6> */}
                  </div>
                  <div class="mt-10 grid space-y-2">
                    <span className=" rounded-full w-fit mx-auto text-xs text-[#062AA9] border border-[#062AA9] py-0.5 px-3 capitalize ">
                      Client space
                    </span>
                    <h2 className=" text-[#001B6F] text-4xl capitalize mx-auto max-w-[400px] text-left ">
                      Welcome{" "}
                      <span className=" text-[#2056FE] font-secondary capitalize ">
                        back
                      </span>
                    </h2>
                    <div className=" grid space-y-4">
                      <Input
                        type="text"
                        placeholder={"username or email"}
                        name="name"
                        className="py-2 px-5 md:py-2 md:px-3 border border-[#0047FF] w-full"
                        icon=""
                        label="username or email"
                        onChange={InputHandler}
                        inputContainerStyle="w-full mt-10"
                      />
                      <Input
                        type="text"
                        placeholder={"password"}
                        name="email"
                        className="py-2 px-5 md:py-2 md:px-3 border border-[#0047FF] w-full"
                        icon=""
                        label="password"
                        onChange={InputHandler}
                        inputContainerStyle="w-full "
                      />

                      <button className="group capitalize relative inline-flex  py-1 h-[calc(32px+8px)] items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-6 font-medium text-neutral-200 duration-500">
                        <div className="translate-x-0 transition group-hover:-translate-x-[250%]">
                          book a meeting
                        </div>
                        <div className="absolute translate-x-[250%] transition group-hover:translate-x-0">
                          book a meeting
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="mt-8 space-y-4 py-3 max-w-[500px] text-gray-400 text-center">
                    <p class="text-xs">
                      By proceeding, you agree to our{" "}
                      <a href="/privacy-policy/" class="underline">
                        Terms of Use{" "}
                      </a>
                      and confirm you have read our {" "}
                      <a href="/privacy-policy/" class="underline">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopUp;

const Input = ({
  type,
  placeholder,
  name,
  ref,
  className,
  icon,
  label,
  onChange,
  inputContainerStyle = "",
}) => {
  return (
    <div className={inputContainerStyle}>
      <label className="text-base font-medium text-[#0027B0] capitalize pl-3">{label}</label>
      <div className=" relative text-gray-400 focus-within:text-gray-600 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-full">
          {icon}
        </div>
        <input
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          className={
            className +
            " placeholder:capitalize placeholder:text-[#062AA9]/30 relative mr-5 inline-block border bg-transparent rounded-full  transition-all ease-in-out duration-300 hover:border-black md:mr-6  focus:shadow-none "
          }
          name={name}
          onChange={onChange}
          spellCheck="false"
        />
      </div>
    </div>
  );
};





