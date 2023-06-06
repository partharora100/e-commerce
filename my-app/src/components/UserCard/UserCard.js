import { Link, useNavigate } from "react-router-dom";

import modules from "./UserCard.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/auth-context";

const UserCard = () => {
  const navigate = useNavigate()
  const { currentUser, logoutHandler: onLogout } = useContext(AuthContext);

  const logoutHandler = () => {
    onLogout();
    navigate("/");
  };

  return (
    <>
      <div className={modules.container80}>
        <div className={modules.card}>
          <div className={modules.cardHead}>
            <h2>Welcome Back {currentUser.firstName}</h2>
            <button onClick={logoutHandler}>Logout</button>
          </div>
          <div className={modules.userDetails}>
            <p>
              <span className={modules.spanText}>Email : </span>
              {"currentUser.email"}
            </p>

            <p>
              <span className={modules.spanText}>Number : </span>
              {"currentUser.number"}
            </p>

            <p>
              <span className={modules.spanText}>Gender: </span>
              {"currentUser.gender"}
            </p>
          </div>

          <div className={modules.actions}>
            <div className={modules.action}>
              <h4>Track Orders</h4>
              <p>Your Orders Track, return, or buy things again</p>
            </div>

            <div className={modules.action}>
              <h4>Addresses</h4>
              <p>Edit addresses for orders and gifts</p>
            </div>

            <div className={modules.action}>
              <h4>Points</h4>
              <p>Use points to buy products!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
