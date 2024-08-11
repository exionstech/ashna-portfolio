// import React from 'react'
import { useSectionInView } from "@/common/lib/hooks";
// import { projectsData } from "@/common/lib/data";
import { PinContainer } from "./ui/3d-pin";

import "@/styles/fonts.css";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      className="flex w-full scroll-mt-28 flex-col items-center justify-center py-20"
      id="projects"
      ref={ref}
    >
      <h1 className="gotu text-5xl font-semibold">Projects</h1>
      <div className="my-24">
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </section>
  );
}
