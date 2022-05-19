import "./Contact.styles.scss";
// Framer motion
import { motion } from "framer-motion";
// Components
import ContactSocials from "../../components/Contact/ContactSocials";

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

const Contact = () => {
  return (
    <motion.section
      className="contact"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <p className="title">Get in touch</p>
      <div className="container">
        <p className="text">
          I'm happy to talk about new{" "}
          <span className="span">opportunities</span> and working together. If
          you'd like to get in touch with me, ping me on any of these social
          media platforms.
        </p>
        <ContactSocials />
      </div>
    </motion.section>
  );
};

export default Contact;
