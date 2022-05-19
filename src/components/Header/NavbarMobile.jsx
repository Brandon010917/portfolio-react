// React router dom
import { NavLink } from "react-router-dom";
// Framer motion
import { motion } from "framer-motion";

const links = ["", "skills", "projects", "contact"];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};

const NavbarMobile = ({ handleNavbarMobile }) => {
  return (
    <motion.nav
      className="navbar-mobile"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <ul className="items">
        {links.map((link) => (
          <li key={link} className="item">
            <NavLink
              to={`/${link}`}
              className={({ isActive }) =>
                `link ${isActive ? "is-active" : ""}`
              }
              onClick={handleNavbarMobile}
            >
              {link === "" ? "Home" : link}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavbarMobile;
