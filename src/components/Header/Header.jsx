import { useState } from "react";
// Styles
import "./Header.styles.scss";
// React router dom
import { NavLink } from "react-router-dom";
// Components
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);

  const handleNavbarMobile = () => {
    setIsOpenNavbarMobile((prev) => !prev);
  };

  console.log(isOpenNavbarMobile);

  return (
    <header className="header">
      <NavLink className="logo" to="/">
        {"<Brandon Leal />"}
      </NavLink>

      <div className="btn-hamburger">
        <button
          className={`hamburger hamburger--collapse ${
            isOpenNavbarMobile ? "is-active" : ""
          }`}
          type="button"
          onClick={handleNavbarMobile}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <NavbarDesktop />

      {isOpenNavbarMobile && (
        <AnimatePresence exitBeforeEnter>
          <NavbarMobile handleNavbarMobile={handleNavbarMobile} />
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
