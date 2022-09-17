// Styles
import "./Home.styles.scss";
// Framer motion
import { motion } from "framer-motion";
// cv
import cv from "../../assets/CurriculumBrandon.pdf";

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

const Home = () => {
  return (
    <motion.section
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <img
        className="image-brandon"
        src="/images/brandon.webp"
        alt="Image Brandon"
        loading="lazy"
      />

      <div className="content">
        <h1 className="title">Hi, I'm BRANDON 👋</h1>
        <p className="subtitle">
          A passionate <span className="span">Frontend Web Developer.</span>
        </p>
        <p className="text">
          I'm a detailed-oriented, self-taught and disciplined person who
          believes in compromise, teamwork and job well done.
        </p>
      </div>
      <div className="cv">
        <a href={cv} target="_blank" className="btn-cv">
          Checkout my resume
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
