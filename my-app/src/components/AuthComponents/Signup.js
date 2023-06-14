import { useNavigate } from "react-router";
import modules from "./Form.module.css";
import { useContext, useReducer, useState } from "react";
import AuthContext from "../../contexts/auth-context";

const emailReducer = (state, { type, payload }) => {
  if (type === "EMAIL_CHANGE") {
    return { value: payload, valid: payload.includes("@") };
  }

  if (type === "EMAIL_BLUR") {
    return { value: state.value, valid: state.value.includes("@") };
  }

  return { value: "", valid: false };
};

const passwordReducer = (state, { type, payload }) => {
  if (type === "PASSWORD_INIT_CHANGE") {
    return {
      initValue: payload,
      initValid: payload.trim().length > 8,
      confirmValue: state.confirmValue,
      confirmValid: state.confirmValid,
      inputValid: state.confirmValid && payload.trim().length > 8,
    };
  }

  if (type === "PASSWORD_INIT_BLUR") {
    return {
      ...state,
      initValue: state.value,
      initValid: state.value.trim().length > 8,
      inputValid: state.confirmValid && state.value.trim().length > 8,
    };
  }

  if (type === "PASSWORD_CONFIRM_CHANGE") {
    return {
      ...state,
      confirmValue: payload,
      confirmValid: payload.trim().length > 8,
      inputValid: payload.trim().length > 8 && state.initValid,
    };
  }

  if (type === "PASSWORD_CONFIRM_BLUR") {
    return {
      ...state,
      confirmValue: state.confirmValue,
      confirmValid: state.confirmValue.trim().length > 8,
      inputValid: state.confirmValid && state.initValid,
    };
  }

  return { value: "", valid: false };
};

const confirmPasswordReducer = (state, { type, payload }) => {};

const fullNameReducer = (state, { type, payload }) => {};

const initState = {
  value: "",
  valid: null,
};

const SignupForm = ({ onLogin }) => {
  const { signupHandler: onSignup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [emailState, dispatchEmail] = useReducer(emailReducer, initState);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    initValue: "",
    initValid: null,
    confirmValue: "",
    confirmValid: null,
    inputValid: null,
  });

  const [nameState, dispatchName] = useReducer(fullNameReducer, initState);

  const signupHandler = (e) => {
    e.preventDefault();
    // this will only be trigerred if and only the password input is valid
    const authData = {
      email: emailState.initValue,
      password: passwordState.confirmValue,
      firstName: "firstName",
    };
    onSignup(authData);
  };

  /** NAME HANDLERS */

  /** EMAIL HANDLERS */
  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "EMAIL_CHANGE", payload: e.target.value });
  };

  const emailValidHandler = (e) => {
    dispatchEmail({ type: "EMAIL_BLUR", payload: emailState.value });
  };

  /** PASSWORD HANDLERS */
  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_INIT_CHANGE", payload: e.target.value });
  };

  const passwordValidHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_INIT_BLUR" });
  };

  const confirmPasswordChangeHandler = (e) => {
    dispatchPassword({
      type: "PASSWORD_CONFIRM_CHANGE",
      payload: e.target.value,
    });
  };

  const confirmPasswordValidHandler = (e) => {
    dispatchPassword({
      type: "PASSWORD_CONFIRM_BLUR",
    });
  };

  const formValid = false;

  return (
    <div className={modules.formContainer}>
      <form method="post" className={modules.form}>
        <div className={modules.input}>
          <label htmlFor="email">Full Name</label>
          <input
            id="name"
            placeholder="Enter Your Full Name"
            type="name"
            name="name"
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            name="email"
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="At least 8 character"
            type="password"
            name="password"
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="password">Confirm Password</label>
          <input
            id="password"
            placeholder="At least 8 character"
            type="password"
            name="password"
          />
        </div>

        <div>
          <button
            onClick={"signupHandler"}
            className={modules.login}
            disabled={formValid}
          >
            Signup
          </button>
        </div>
      </form>
      <button onClick={onLogin} className={modules.guest}>
        Signup as Guest
      </button>
    </div>
  );
};

export default SignupForm;
