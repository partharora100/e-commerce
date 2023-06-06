import React, { useContext } from "react";
import modules from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/auth-context";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import CartContext from "../../../contexts/cart-context";

const MainNavigation = () => {
  const { isLogin, logoutHandler, currentUser } = useContext(AuthContext);
  const { cartNumber } = useContext(CartContext);

  console.log(currentUser);
  return (
    <div className={modules.main}>
      <div>
        <Link to="">
          <img
            className={modules.logo}
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8a7W1iBpeUa9R1nik1qEpNiCoXqrufgYgyPnwSz4&s"
          />
        </Link>
      </div>

      <div className={modules.search}></div>

      <div className={modules.navContainer}>
        <nav>
          <li>
            <NavLink to="">
              <HomeIcon />
            </NavLink>
          </li>

          <li>
            <NavLink to="cart">
              <ShoppingCartOutlinedIcon />
              {cartNumber}
            </NavLink>
          </li>

          <li>
            <NavLink to="wishlist">
              <FavoriteIcon />
            </NavLink>
          </li>

          <li>
            <NavLink to="account?mode=login">
              {isLogin ? `${currentUser.firstName}` : <LoginIcon />}
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
