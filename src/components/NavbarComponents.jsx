import "./css/navbar.css";

import { NavbarList } from "../data/index";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarComponents = () => {
  const [changeBg, setChangeBg] = useState(false);
  const [mobileMenu, setMobileMenu] = useState("bx bx-menu");
  const [activeNav, setActiveNav] = useState("navlist");

  const clickedMenu = () => {
    mobileMenu === "bx bx-menu"
      ? setMobileMenu("bx bx-x")
      : setMobileMenu("bx bx-menu");

    if (activeNav === "navlist") {
      setActiveNav("navlist active");
    } else {
      setActiveNav("navlist");
    }
  };

  const changeBgNav = () => {
    if (window.scrollY > 10) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  useEffect(() => {
    changeBgNav();

    window.addEventListener("scroll", changeBgNav);
  });

  return (
    <div className={changeBg ? "container active-nav" : "container"}>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>ElmeiraStuff</h1>
        </div>
        <div className={activeNav}>
          {NavbarList.map((link) => {
            return (
              <div key={link.id} className="navlink">
                <NavLink to={link.path}>{link.text}</NavLink>
              </div>
            );
          })}
        </div>
        <div className="right-navbar">
          <div className="search">
            <i className="bx bx-search"></i>
            <input type="search" placeholder="Search Here .." />
          </div>
          <div className="items">
            <div className="icon-keranjang">
              <i className="bx bx-cart"></i>
            </div>
            <div className="icon-user">
              <i className="bx bx-user"></i>
            </div>

            <div className="mobile-menu">
              <i onClick={clickedMenu} className={mobileMenu}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
