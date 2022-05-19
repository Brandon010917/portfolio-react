import "./Skills.styles.scss";
// Framer motion
import { motion } from "framer-motion";
// Components
import SkillsContainer from "../../components/Skills/SkillsContainer";

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

const Skills = () => {
  return (
    <motion.section
      className="skills"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <p className="title">
        Here are the <span className="span">technologies</span> I've worked with and I'm familiar with
      </p>
      <SkillsContainer />
    </motion.section>
  );
};

export default Skills;
