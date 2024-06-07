import Layout from "@/components/Layout/Layout";
import Loader from "@/components/Layout/Loader";
import Blog from "@/components/home/Blog";
import Faq from "@/components/home/Faq";
import HeroSection from "@/components/home/HeroSection";
import Partners from "@/components/home/Partners";
import Pricing from "@/components/home/Pricing";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
// Base styles for media player and provider (~400B).
import "@vidstack/react/player/styles/base.css";
import { useState } from "react";


import { Inter } from 'next/font/google'
import { AnimatePresence } from "framer-motion";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>

        {loading ? (
          <Loader loading={loading} setLoading={setLoading} />
        ) : (
          <Layout>
            <HeroSection />
            <Partners />
            <Process />
            <Services />
            <Projects />
            <Pricing />
            <Blog />
            <Faq />
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
}

