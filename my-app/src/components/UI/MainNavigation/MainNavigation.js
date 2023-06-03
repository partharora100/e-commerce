import React from "react";
import modules from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className={modules.main}>
      <div>
        <img
          className={modules.logo}
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8a7W1iBpeUa9R1nik1qEpNiCoXqrufgYgyPnwSz4&s"
        />
      </div>

      <div className={modules.search}></div>

      <div className={modules.navContainer}>
        <nav>
          <li>
            <NavLink to="">Home</NavLink>
          </li>

          <li>
            <NavLink to="">Cart</NavLink>
          </li>

          <li>
            <NavLink to="">Wishlist</NavLink>
          </li>

          <li>
            <NavLink to="">Account</NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
