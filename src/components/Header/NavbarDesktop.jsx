import React from "react";
import { NavLink } from "react-router-dom";

const links = ["", "skills", "projects", "contact"];

const NavbarDesktop = () => {
  return (
    <nav className="navbar-desktop">
      <ul className="items">
        {links.map((link) => (
          <li key={link} className="item">
            <NavLink
              to={`/${link}`}
              className={({ isActive }) =>
                `link ${isActive ? "is-active" : ""}`
              }
            >
              {link === "" ? "Home" : link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
