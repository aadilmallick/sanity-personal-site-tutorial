import React from "react";
import Project from "../../sanity/dataFetching";
import { ImageUrlBuilder } from "sanity";
import Link from "next/link";

const ProjectsGrid = async () => {
  const ProjectModel = new Project();
  const projects = await ProjectModel.fetchAllProjects();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {projects.map((project) => (
        <Link
          className="block border border-gray-200 bg-gray-50 p-4 transition-shadow hover:shadow-square"
          key={project._id}
          href={`/project/${project._id}`}
        >
          <h2>{project.title}</h2>
          <img
            src={project.imageUrl}
            alt={project.image.alt}
            className="w-full object-cover"
          />
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;
