// Data
import projectsData from "./projectsData";
// Component
import ProjectCard from "./ProjectCard";

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
