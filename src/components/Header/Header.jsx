import { useState } from "react";
// Styles
import "./Header.styles.scss";
// React router dom
import { Link } from "react-router-dom";
// Components
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);

  const handleNavbarMobile = () => {
    setIsOpenNavbarMobile((prev) => !prev);
  };

  const isActiveNavbarModbile = isOpenNavbarMobile ? "is-active" : "";

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/">
          <img src="/images/logo.svg" />
        </Link>

        {/* Btn Hamburger */}
        <button
          className={`btn-hamburger hamburger hamburger--collapse ${isActiveNavbarModbile}`}
          type="button"
          onClick={handleNavbarMobile}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <NavbarDesktop />

        <NavbarMobile
          handleNavbarMobile={handleNavbarMobile}
          isActiveNavbarModbile={isActiveNavbarModbile}
        />
      </div>
    </header>
  );
};

export default Header;
