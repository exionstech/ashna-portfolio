"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";

import Project from "./magicui/project-cards";
import { projectsData } from "@/constants/project-data";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <h1 className="gotu text-5xl font-semibold">Projects</h1>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
