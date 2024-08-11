import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";

import "@/styles/fonts.css";
import { MagicCard } from "./magicui/magic-card";

const About = () => {
  const { ref } = useSectionInView("about");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="flex w-full h-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex h-full w-full flex-col gap-6">
        <h1 className="gotu text-6xl font-semibold">What I Offer !!</h1>
        <div className="flex h-[500px] gap-x-10 px-44">
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
            gradientColor={"#D9D9D955"}
          >
            Magic
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
            gradientColor={"#D9D9D955"}
          >
            Card
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
            gradientColor={"#D9D9D955"}
          >
            Card
          </MagicCard>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
