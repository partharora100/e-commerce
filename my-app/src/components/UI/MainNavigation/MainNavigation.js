import React, { useContext } from "react";
import modules from "./MainNavigation.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../../contexts/auth-context";
import Search from "./Search/Search";
import CartContext from "../../../contexts/cart-context";


// importing material icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MainNavigation = () => {
  const { pathname } = useLocation();
  const showSearch = pathname === "/products";

  const { isLogin, currentUser } = useContext(AuthContext);

  const { cartNumber } = useContext(CartContext);

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

      {showSearch && (
        <div className={modules.search}>
          <Search />
        </div>
      )}

      <div className={modules.navContainer}>
        <nav>
          <li>
            <NavLink to="">
              <HomeIcon sx={{ fontSize: 24 }} />
            </NavLink>
          </li>

          <li>
            <NavLink to="cart">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 24 }} />
              {cartNumber}
            </NavLink>
          </li>

          <li>
            <NavLink to="wishlist">
              <FavoriteIcon sx={{ fontSize: 24 }} />
            </NavLink>
          </li>

          <li>
            <NavLink to="account?mode=login">
              {isLogin ? (
                `${currentUser?.firstName}`
              ) : (
                <AccountCircleIcon sx={{ fontSize: 24 }} />
              )}
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
