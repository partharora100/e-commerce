import React, { useContext, useEffect, useState } from "react";
import modules from "./AuthForm.module.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import AuthContext from "../../contexts/auth-context";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const isLogin = searchParams.get("mode") === "login";

  const [email, setEmail] = useState(null);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  // const [formValid, setFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailValidHandler = (e) => {
    if (e.target.value.includes("@")) {
      setEmailIsValid(true);
    }
  };

  const passwordValidHandler = (e) => {
    if (e.target.value.length > 8) {
      setPasswordIsValid(true);
    }
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  // const formValidHandler = (email, password) => {
  //   if (emailIsValid && passwordIsValid) {
  //     setFormValid(true);
  //   }
  // };

  const formValid = emailIsValid && password;

  const loginHandler = (e) => {
    e.preventDefault();

    if (formValid) {
      authCtx.loginHandler({ email, password });
      navigate("/");
    } else {
      // we will show the error here to tell the user that there is some error and we will not make the call to the server
    }
  };

  const signupHandler = () => {};

  return (
    <div className={modules.auth}>
      <div className={modules.authHeader}>
        <h4>Welcome Back</h4>
        <p>Start shopping again with us!!</p>
      </div>

      <form method="post" className={modules.form}>
        <div className={modules.input}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            name="email"
            onChange={emailChangeHandler}
            onBlur={emailValidHandler}
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="At least 8 character"
            type="password"
            name="password"
            onChange={passwordChangeHandler}
            onBlur={passwordValidHandler}
          />
        </div>

        {isLogin && (
          <button onClick={loginHandler} className={modules.login}>
            Login
          </button>
        )}

        {!isLogin && (
          <button onClick={signupHandler} className={modules.login}>
            Signup
          </button>
        )}
      </form>

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
