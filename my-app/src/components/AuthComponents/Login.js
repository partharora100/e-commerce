import { useNavigate } from "react-router";
import { useContext, useReducer } from "react";
import AuthContext from "../../contexts/auth-context";
import modules from "./Form.module.css";

const initState = {
  value: "",
  valid: null,
};

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
  if (type === "PASSWORD_CHANGE") {
    return { value: payload, valid: payload.trim().length > 6 };
  }

  if (type === "PASSWORD_BLUR") {
    return { value: state.value, valid: state.value.trim().length > 8 };
  }

  return { value: "", valid: false };
};

const LoginForm = ({ guestLogin }) => {
  const navigate = useNavigate();

  const { loginHandler: onLogin } = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, initState);

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initState
  );

  const loginHandler = (e) => {
    e.preventDefault();
    const authData = {
      email: emailState.value,
      password: passwordState.value,
    };
    onLogin(authData);
    navigate("/");
  };

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "EMAIL_CHANGE", payload: e.target.value });
  };

  const emailValidHandler = (e) => {
    dispatchEmail({ type: "EMAIL_BLUR", payload: emailState.value });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_CHANGE", payload: e.target.value });
  };

  const passwordValidHandler = (e) => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  let formIsValid = emailState?.valid && passwordState?.valid;

  return (
    <div className={modules.formContainer}>
      <form onSubmit={loginHandler} method="post" className={modules.form}>
        <div className={`${modules.input}`}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={emailValidHandler}
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="At least 6 character"
            type="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={passwordValidHandler}
          />
        </div>

        <div>
          <button
            disabled={!formIsValid}
            onClick={loginHandler}
            className={modules.login}
          >
            Login
          </button>
        </div>
      </form>

      <button className={modules.guest} onClick={guestLogin}>
        Signup as Guest
      </button>
    </div>
  );
};

export default LoginForm;
