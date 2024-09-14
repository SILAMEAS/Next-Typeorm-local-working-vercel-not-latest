"use client";


import {Projects} from '@/constants/constants';
import ProjectCard from "@/components/ProjectCard";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[90%] max-h-[70%] overflow-y-auto">
        {Projects.map((project, index) => (
          <ProjectCard
            key={project.src + project.url}
            title={project.title}
            text={project.text}
            image={project.src}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
