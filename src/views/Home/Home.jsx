import "./Home.styles.scss";
// Image
import image from "../../assets/image-brandon.webp";
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
      <img className="image" src={image} alt="Image Brandon" loading="lazy" />

      <div className="content">
        <h1 className="title">Hi, I'm BRANDON 👋</h1>
        <p className="subtitle">
          a passionate <span className="span">Frontend Developer</span>.
        </p>
        <p className="text">
          I specialize in building responsive UI with modern{" "}
          <span className="span">JavaScript</span> tools
        </p>
      </div>
      <div className="cv">
        <div className="container">
          <a href={cv} target="_blank" className="btn-cv">
            Checkout my resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
