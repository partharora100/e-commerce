import React, { useContext } from "react";
import modules from "./AuthForm.module.css";
import { Link, useSearchParams } from "react-router-dom";

import AuthContext from "../../contexts/auth-context";
import LoginForm from "./Login";
import SignupForm from "./Signup";

const AuthForm = () => {
  const { loginHandler } = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  const isLogin = searchParams.get("mode") === "login";

  const guestLoginHandler = () => {
    const authData = {
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    };
    loginHandler(authData);
  };

  return (
    <div className={modules.auth}>
      <div className={modules.authHeader}>
        <h4>Welcome Back</h4>
        <p>Start shopping again with us!!</p>
      </div>

      {isLogin && <LoginForm guestLogin={guestLoginHandler} />}

      {!isLogin && <SignupForm guestLogin={guestLoginHandler} />}

      <p className={modules.lowerText}>
        {isLogin ? "Don't have an account yet?" : "Have an Account"}
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? "Sign up" : "Log in"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
