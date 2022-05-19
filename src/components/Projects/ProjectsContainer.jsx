// Data
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

const ProjectsContainer = () => {
  return (
    <div className="container">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          img={project.image}
          links={project.links}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
