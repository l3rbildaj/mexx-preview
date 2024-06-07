function Pricing() {
  return (
    <div id="pricing" className=" relative rounded-3xl md:rounded-[40px] bg-[#567CFE] pt-20 pb-2 xs:pb-5 md:py-20 lg:pb-10 px-2 xs:px-5 xl:px-10 mt-20 flex flex-col items-center w-full  ">
      <svg
        width="54"
        height="52"
        className=" absolute top-10 sm:top-28 right-10  sm:right-20 lg:right-48 "
        viewBox="0 0 54 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.2032 1.67562C25.9343 0.18009 28.0657 0.180088 28.7968 1.67562L32.2036 8.6448C32.6762 9.61149 33.8289 10.031 34.8123 9.59426L41.9018 6.44544C43.4231 5.76972 45.0559 7.13979 44.6546 8.75536L42.7847 16.2839C42.5253 17.3282 43.1387 18.3905 44.1727 18.6881L51.6276 20.833C53.2274 21.2932 53.5975 23.3923 52.2517 24.372L45.9799 28.9372C45.11 29.5705 44.897 30.7785 45.4979 31.6711L49.83 38.1061C50.7596 39.487 49.6939 41.3329 48.0332 41.2183L40.2943 40.6841C39.2208 40.61 38.2811 41.3985 38.1677 42.4685L37.3499 50.1826C37.1744 51.838 35.1715 52.567 33.973 51.4117L28.388 46.028C27.6133 45.2812 26.3867 45.2812 25.612 46.028L20.027 51.4117C18.8285 52.567 16.8256 51.838 16.6501 50.1826L15.8323 42.4685C15.7189 41.3985 14.7792 40.61 13.7057 40.6841L5.96684 41.2183C4.30614 41.3329 3.24041 39.487 4.17004 38.1061L8.50211 31.6711C9.10301 30.7785 8.89 29.5705 8.02005 28.9372L1.74834 24.372C0.402484 23.3923 0.772603 21.2932 2.37236 20.833L9.82726 18.6881C10.8613 18.3905 11.4747 17.3282 11.2153 16.2839L9.34537 8.75536C8.9441 7.13979 10.5769 5.76972 12.0982 6.44544L19.1877 9.59426C20.1711 10.031 21.3238 9.61149 21.7964 8.6448L25.2032 1.67562Z"
          fill="#062AA9"
        />
      </svg>

      <svg
        width="44"
        height="44"
        className=" absolute top-16 md:top-48 left-10 sm:left-20 xl:left-56  "
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5422 2.94626C20.0845 0.293985 23.9155 0.293984 25.4578 2.94626L30.6603 11.8926C31.009 12.4923 31.5077 12.991 32.1074 13.3397L41.0537 18.5422C43.706 20.0845 43.706 23.9155 41.0537 25.4578L32.1074 30.6603C31.5077 31.009 31.009 31.5077 30.6603 32.1074L25.4578 41.0537C23.9155 43.706 20.0845 43.706 18.5422 41.0537L13.3397 32.1074C12.991 31.5077 12.4923 31.009 11.8926 30.6603L2.94626 25.4578C0.293984 23.9155 0.293984 20.0845 2.94626 18.5422L11.8926 13.3397C12.4923 12.991 12.991 12.4923 13.3397 11.8926L18.5422 2.94626Z"
          fill="#F87BD9"
        />
      </svg>

      <span className=" rounded-full text-[#DAE3FF] border border-[#DAE3FF] py-0.5 px-3 capitalize ">
        pricing
      </span>
      <h1 className="text-[#DAE3FF] text-3xl sm:text-4xl md:text-5xl mt-3 capitalize max-w-[400px]">
        Membership{" "}
        <span class="text-[#DAE3FF] capitalize font-secondary">pricing</span>
      </h1>
      <p className=" text-[#DAE3FF]/50 leading-none text-center mt-10 max-w-[400px] mx-auto ">
        Invest in design that drives your business. Clear, straightforward plans
        tailored to your needs.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 mt-20 ">
        {data.map((e, i) =>
          i != 1 ? (
            <Card key={i} {...e} />
          ) : (
            <MiddleCard key={1} {...e}></MiddleCard>
          )
        )}

        {/* <div className=" bg-[#F87BD9] py-5 px-10 rounded-3xl w-full h-full flex flex-col justify-center gap-5 ">
        <div>
          <span className=" rounded-full text-white border border-white py-0.5 px-2 text-sm capitalize ">
            or
          </span>
          <h1 className=" text-white text-2xl font-bold capitalize mt-3  ">
            Request a quote <span className=" font-secondary ">instead</span>{" "}
          </h1>
          <p className="text-white  ">We&apos;re all about taking your business to the next level</p>
        </div>
        <button class="group  capitalize relative w-fit  inline-flex py-4 items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF]/25  px-20 font-medium text-white duration-500">
          <div class="translate-y-0 transition group-hover:-translate-y-[180%]">
            Request a quote
          </div>
          <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">
            Request a quote
          </div>
        </button>
        </div> */}
      </div>
      <div className=" bg-[#F87BD9] py-5 px-10 rounded-3xl w-full mt-5 md:mt-10 flex flex-col lg:flex-row gap-3 lg:items-center justify-between ">
        <div>
          <span className=" rounded-full text-white border border-white py-0.5 px-2 text-sm capitalize ">
            or
          </span>
          <h1 className=" text-white text-2xl font-bold capitalize mt-3 ">
            Request a quote <span className=" font-secondary ">instead</span>{" "}
          </h1>
          <p className="text-white">We&apos;re all about taking your business to the next level</p>
        </div>
        <button class="group  capitalize relative w-fit  inline-flex py-3 lg:py-4 items-center justify-center overflow-hidden rounded-full bg-[#FFFFFF]/25  px-10 md:px-20 font-medium text-white duration-500">
          <div class="translate-y-0 transition group-hover:-translate-y-[180%]">
            Request a quote
          </div>
          <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">
            Request a quote
          </div>
        </button>
      </div>
    </div>
  );
}

export default Pricing;

const Card = ({ id, type, price, contains, services }) => {
  return (
    <div className=" w-full bg-[#F5F7FF] px-10 lg:px-5 xl:px-10 py-10 rounded-[30px] ">
      <h1 className=" text-[#001B6F] font-bold text-3xl capitalize ">{type}</h1>
      <p className=" text-[#001B6F] text-sm mt-5  ">
        Two requests at a time. Pause or cancel anytime.
      </p>
      <h1 className=" text-[#001B6F] font-bold text-4xl mt-5 ">{price}</h1>
      <p className=" text-[#001B6F] text-sm ">Pause or cancel anytime</p>
      <button class="group w-full capitalize relative inline-flex py-2  mt-5 items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-10 font-medium text-neutral-200 duration-500">
        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">
          subscribe
        </div>
        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">
          subscribe
        </div>
      </button>
      <hr className=" bg-[#001A6C]  w-full my-5" />
      <div>
        {contains.map((e, i) => (
          <div key={i} className=" flex gap-5  items-center ">
            {i == 0 || i == 1 ? (
              <>
                <Ckeck />{" "}
                <p className=" text-[#001B6F] capitalize font-bold ">{e}</p>
              </>
            ) : (
              <>
                <Ckeck /> <p className=" text-[#001B6F] capitalize ">{e}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <hr className=" bg-[#001A6C]  w-full mt-10 my-5" />
      <div>
        <p className=" text-[#001B6F] capitalize font-bold text-xl ">
          included services
        </p>
        <div className=" gap-2 flex flex-grow flex-wrap mt-5 ">
          {services.map((e, i) => (
            <span
              key={i}
              className=" rounded-full text-[#001B6F] text-xs border border-[#001B6F] py-0.5 px-3 capitalize "
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const MiddleCard = ({ id, type, price, contains, services }) => {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='black' stroke-width='3' stroke-dasharray='40' stroke-dashoffset='16' stroke-linecap='square'/%3e%3c/svg%3e");`,
        borderRadius: "30px"
      }}
      className=" w-full bg-[#DAE3FF] px-10 lg:px-5 xl:px-10  py-10 rounded-[30px] relative "
    >
      <div className=" absolute top-7 right-10 flex items-center justify-center text-center ">
        <div className=" relative h-[55px] w-[55px]  ">
          <svg
            width="55"
            height="55"
            viewBox="0 0 48 48"
            className="  "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.074 1.87969C22.6193 -0.0680847 25.3807 -0.0680842 25.926 1.87969L26.1561 2.70192C26.6034 4.29946 28.6891 4.68935 29.6832 3.36125L30.1949 2.6777C31.407 1.05842 33.9818 2.05594 33.7867 4.06917L33.7043 4.91902C33.5442 6.57024 35.3483 7.68725 36.755 6.80795L37.4791 6.35539C39.1942 5.28331 41.2349 7.14363 40.3256 8.9504L39.9418 9.71311C39.1961 11.195 40.4748 12.8883 42.1042 12.5765L42.9428 12.4161C44.9294 12.036 46.1603 14.5079 44.6598 15.8642L44.0263 16.4367C42.7956 17.5491 43.3763 19.59 45.0083 19.8879L45.8482 20.0413C47.838 20.4045 48.0928 23.1541 46.2036 23.8767L45.4062 24.1818C43.8567 24.7745 43.6609 26.8873 45.0751 27.7547L45.8029 28.2011C47.5271 29.2586 46.7715 31.9145 44.7488 31.9059L43.895 31.9023C42.236 31.8953 41.2902 33.7947 42.2956 35.1143L42.813 35.7935C44.0388 37.4025 42.3747 39.6061 40.4917 38.8674L39.6969 38.5556C38.1525 37.9498 36.5844 39.3792 37.0452 40.9729L37.2823 41.7932C37.8441 43.7363 35.4963 45.1899 34.0074 43.8209L33.3788 43.243C32.1576 42.1202 30.179 42.8867 30.0329 44.5392L29.9578 45.3898C29.7797 47.4046 27.0653 47.912 26.1714 46.0976L25.7941 45.3316C25.0609 43.8435 22.9391 43.8435 22.2059 45.3316L21.8286 46.0976C20.9347 47.912 18.2203 47.4046 18.0422 45.3898L17.9671 44.5392C17.821 42.8867 15.8424 42.1202 14.6212 43.243L13.9926 43.8209C12.5037 45.1899 10.1559 43.7363 10.7177 41.7932L10.9548 40.9729C11.4156 39.3792 9.84751 37.9498 8.30313 38.5556L7.50826 38.8674C5.6253 39.6061 3.96121 37.4025 5.18697 35.7935L5.70441 35.1143C6.70976 33.7947 5.76396 31.8953 4.10502 31.9023L3.25118 31.9059C1.22854 31.9145 0.472858 29.2586 2.19706 28.2011L2.92491 27.7547C4.33907 26.8873 4.14329 24.7745 2.59383 24.1818L1.79635 23.8767C-0.0928078 23.1541 0.16198 20.4045 2.15176 20.0413L2.99172 19.8879C4.62371 19.59 5.20438 17.5491 3.97367 16.4367L3.34024 15.8642C1.83971 14.5079 3.07056 12.036 5.05719 12.4161L5.89581 12.5765C7.52522 12.8883 8.80393 11.195 8.05818 9.71311L7.67435 8.9504C6.7651 7.14363 8.80577 5.28331 10.5209 6.35539L11.245 6.80795C12.6517 7.68725 14.4558 6.57024 14.2957 4.91902L14.2133 4.06916C14.0182 2.05594 16.5931 1.05842 17.8051 2.6777L18.3168 3.36125C19.3109 4.68935 21.3966 4.29946 21.8439 2.70192L22.074 1.87969Z"
              fill="#FF00BE"
            />
          </svg>
          <span className=" capitalize text-[#DAE3FF] absolute text-[10px] translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] rotate-12 z-10 ">popular</span>
        </div>
      </div>



      <h1 className=" text-[#001B6F] font-bold text-3xl ">{type}</h1>
      <p className=" text-[#001B6F] text-sm mt-5  ">
        Two requests at a time. Pause or cancel anytime.
      </p>
      <h1 className=" text-[#001B6F] font-bold text-4xl mt-5 ">{price}</h1>
      <p className=" text-[#001B6F] text-sm ">Pause or cancel anytime</p>
      <button class="group w-full capitalize relative inline-flex py-2  mt-5 items-center justify-center overflow-hidden rounded-full bg-[#0038FF] px-10 font-medium text-neutral-200 duration-500">
        <div class="translate-y-0 transition group-hover:-translate-y-[150%]">
          subscribe
        </div>
        <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">
          subscribe
        </div>
      </button>
      <hr className=" bg-[#001A6C]  w-full my-5" />
      <div>
        {contains.map((e, i) => (
          <div key={i} className=" flex gap-5  items-center ">
            {i == 0 || i == 1 ? (
              <>
                <Ckeck />{" "}
                <p className=" text-[#001B6F] capitalize font-bold ">{e}</p>
              </>
            ) : (
              <>
                <Ckeck /> <p className=" text-[#001B6F] capitalize ">{e}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <hr className=" bg-[#001A6C]  w-full mt-10 my-5" />
      <div>
        <p className=" text-[#001B6F] capitalize font-bold text-xl ">
          included services
        </p>
        <div className=" gap-2 flex flex-grow flex-wrap mt-5 ">
          {services.map((e, i) => (
            <span
              key={i}
              className=" rounded-full text-[#001B6F] text-xs border border-[#001B6F] py-0.5 px-3 capitalize "
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Ckeck = () => (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.4838 7.76641C2.73735 6.45247 4.10589 5.27582 5.53485 4.20052C7.27567 2.89079 9.10153 1.74338 10.916 0.695352C11.3066 0.492139 11.7628 0.703034 11.9345 1.16621C12.1062 1.62914 11.9284 2.17038 11.5382 2.37359C9.70327 3.22857 7.85064 4.17847 6.0706 5.2949C4.4469 6.31319 2.88812 7.46085 1.46393 8.79338C1.34178 9.08357 1.09297 9.28778 0.800453 9.30017C0.374389 9.31851 0.0156329 8.92274 0 8.41743L0.212758 1.1848C0.207194 0.992489 0.334112 0.83091 0.496271 0.824467C0.658429 0.817776 0.794623 0.968451 0.800453 1.16076L1.4838 7.76641Z"
      fill="#567CFE"
    />
  </svg>
);

const data = [
  {
    id: 1,
    type: "Basic",
    price: "$6,895/m",
    contains: [
      "two requests at time",
      "Two senior designers and art director",
      "Average 2-3 days delivery",
      "Unlimited revisions",
      "Unlimited design requests",
      "Credit-card payments",
      "Managed via Slack and Trello",
      "Pause or cancel anytime",
    ],
    services: [
      "web design",
      "marketing",
      "graphic design",
      "logo design",
      "video editing",
      "Animations",
    ],
  },
  {
    id: 2,
    type: "Pro",
    price: "$6,895/m",
    contains: [
      "two requests at time",
      "Two senior designers and art director",
      "Average 2-3 days delivery",
      "Unlimited revisions",
      "Unlimited design requests",
      "Credit-card payments",
      "Managed via Slack and Trello",
      "Pause or cancel anytime",
    ],
    services: [
      "web design",
      "marketing",
      "graphic design",
      "logo design",
      "video editing",
      "Animations",
    ],
  },
  {
    id: 3,
    type: "cutomized",
    price: "$6,895/m",
    contains: [
      "two requests at time",
      "Two senior designers and art director",
      "Average 2-3 days delivery",
      "Unlimited revisions",
      "Unlimited design requests",
      "Credit-card payments",
      "Managed via Slack and Trello",
      "Pause or cancel anytime",
    ],
    services: [
      "web design",
      "marketing",
      "graphic design",
      "logo design",
      "video editing",
      "Animations",
    ],
  },
];
