// React router dom
import { NavLink } from "react-router-dom";

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

const NavbarMobile = ({ handleNavbarMobile, isActiveNavbarModbile }) => {
  return (
    <nav
      className={`navbar-mobile ${isActiveNavbarModbile}`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <ul className="nav-items">
        {links.map((link) => (
          <li key={link} className="nav-item">
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
    </nav>
  );
};

export default NavbarMobile;
