import React from "react";
import Project from "../../../../sanity/dataFetching";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface Props {
  params: {
    projectId: string;
  };
}

const page = async ({ params: { projectId } }: Props) => {
  const ProjectModel = new Project();
  const project = await ProjectModel.fetchProjectById(projectId);

  return (
    <section className="max-w-6xl mx-auto mt-12 px-4 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-800 tracking-tighter mb-4">
        {project.title}
      </h1>
      <div className="w-[70%] h-[30rem] relative">
        <Image
          src={project.imageUrl}
          alt={project.image.alt}
          fill
          objectFit="cover"
        />
      </div>
      <article
        className="min-w-[30rem] border-red-200 border-2 py-12"
        id="rich-text-article"
      >
        <PortableText value={project.content} />
      </article>
    </section>
  );
};

export default page;
