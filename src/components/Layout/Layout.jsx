import Footer from "./Footer";
import Header from "./Header";
import { FloatingNav } from "./Nav";
import { Suspense, useEffect, useState } from "react";

const Layout = ({ children }) => {

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if the device is a desktop
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    // Check if window.top is not equal to 0
    const isNotAtTop = window.top !== 0;

    // Set shouldRender to true if both conditions are met
    if (isDesktop && isNotAtTop) {
      setShouldRender(true);
    }

    // Cleanup function
    return () => {
      // Any cleanup code if necessary
    };
  }, []);


  return (
   <>
    <div className=" px-2 sm:px-5 mx-auto max-w-[1450px] flex flex-col">
      <Header  />
      {shouldRender ? <FloatingNav /> : null}
      <main className=" box-border">
        {children}
      </main>
    </div>
    <Suspense>
      <Footer />
    </Suspense>
   </>
  );
};

export default Layout;
