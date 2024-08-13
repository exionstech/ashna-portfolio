import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { projectsData } from "@/constants/project-data";
import LearnMore from "@/components/learn-more";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  // tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 md:mb-8"
    >
      <section
        className={
          "relative max-w-[52rem] overflow-hidden bg-[#ffcbb4]/60 rounded-lg border transition hover:bg-[#ffcbb4]/40 dark:hover:bg-darkOcean md:h-[20rem] "
        }
      >
        <div className="flex justify-center items-center">
          <img
            src={imageUrl}
            alt="Project I worked on"
            className="md:hidden"
          />
        </div>
        <div className="flex h-full flex-col px-5 pb-7 pt-4 md:max-w-[50%] md:pl-10 md:pr-2 md:pt-10 md:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold uppercase"> {title}</h3>
          <p className="mt-2 leading-relaxed">{description}</p>
          {/* <ul className="mt-4 flex flex-wrap gap-2 md:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul> */}
          <div className="mt-4 flex flex-wrap gap-2 md:mt-auto">
            <LearnMore title="Learn More" />
          </div>
        </div>
        <img
          src={imageUrl}
          alt="Project I worked on"
          className="absolute hidden -right-40 top-8 w-[28.25rem] rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 md:block"
        />
      </section>
    </motion.div>
  );
}
