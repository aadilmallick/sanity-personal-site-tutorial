import { Image, ImageUrlBuilder, PortableTextBlock } from "sanity";
import { client } from "./lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "./lib/image";
import ProjectSchema from "./project";

interface IProject {
  _id: string;
  _createdAt: string;
  title: string;
  url: string;
  image: Image;
  content: PortableTextBlock[];
}

interface FetchedProjectData {
  _id: string;
  _createdAt: string;
  title: string;
  url: string;
  image: {
    alt: string;
  };
  content: PortableTextBlock[];
  imageUrl: string;
}

export default class Project {
  private sanitizeProject(project: IProject): FetchedProjectData {
    return {
      ...project,
      image: { alt: project.image!.alt as string },
      imageUrl: urlForImage(project.image).url() as string,
    };
  }
  async fetchAllProjects(): Promise<FetchedProjectData[]> {
    const projects: IProject[] = await client.fetch(groq`
        *[_type == "project"] 
    `);

    return projects.map((project) => this.sanitizeProject(project));
  }

  async fetchProjectById(id: string): Promise<FetchedProjectData> {
    const project: IProject = await client.fetch(
      groq`
        *[_type == "project" && _id == $id][0] 
    `,
      { id }
    );

    return this.sanitizeProject(project);
  }
}

// async function fetchAllProjects() {
//   return await client.fetch(groq`*[_type == "project"]`);
// }
