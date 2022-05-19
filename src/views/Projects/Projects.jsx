import "./Projects.styles.scss";
// Framer motion
import { motion } from "framer-motion";
// Components
import ProjectsContainer from "../../components/Projects/ProjectsContainer";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

const Projects = () => {
  return (
    <motion.section
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <p className="title">
        Here are the <span className="span">projects</span> I'm worked on so
        far!
      </p>
      <ProjectsContainer />
    </motion.section>
  );
};

export default Projects;
