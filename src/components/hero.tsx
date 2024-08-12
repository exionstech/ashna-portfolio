// import React from "react";

import { Github, Linkedin } from "lucide-react";
import TextAnimation from "./text-animation";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { useSectionInView } from "@/common/lib/hooks";

import "@/styles/fonts.css";

const Hero = () => {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center"
      id="home"
      ref={ref}
    >
      <video
        width="480"
        height="720"
        preload="none"
        autoPlay
        crossOrigin="anonymous"
        muted
        loop
        className="absolute -z-10 h-screen w-screen object-cover"
      >
        <source src="/layout.mp4" />
      </video>
      <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
        <div className="container relative flex w-full h-screen flex-col items-center">
          <div className="text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem] mt-32">
            <motion.span
              initial={{ y: -100, x: "-50%", opacity: 0 }}
              animate={{ y: 0, x: "-50%", opacity: 1 }}
              className="mt-20 mb-10 text-start montserrat"
            >
              Hi!
            </motion.span>
            <br />
            <TextAnimation delay={1} baseText={`I'm Ashna`} />
            <p className="montserrat text-4xl mt-10 mb-10">UX Designer | Artist | Baker</p>
            <p className="montserrat text-3xl">
              Unleashing creativity, crafting delightful experiences, and
              leaving lasting impressions. Join me on this exciting journey!
            </p>
          </div>
          <motion.div
            className="w-92 flex flex-col items-center justify-center gap-3 px-4 mt-20 text-sm font-medium md:mt-12 md:flex-row lg:text-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-7 py-3 text-white outline-none transition hover:bg-[#fae0e0] hover:text-black hover:dark:text-black sm:w-auto"
              onClick={(e) => {
                smoothScrollTo({ e, id: "contact" });
                setActiveSection("contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span>Contact me here</span>
            </a>

            <a
              className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-auto"
              href="/Ashna_Monga_Resume.pdf"
              download
            >
              <span>Download CV</span>
            </a>

            <div className="flex gap-2">
              <a
                className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                href="https://www.linkedin.com/in/maksym-azimov/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                href="https://github.com/bbyc4kes"
                target="_blank"
              >
                <Github />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
