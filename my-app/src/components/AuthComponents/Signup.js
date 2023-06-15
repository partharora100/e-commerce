import { useNavigate } from "react-router";
import modules from "./Form.module.css";
import { useContext, useReducer } from "react";
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
      inputValid:
        state.confirmValid &&
        payload.trim().length > 8 &&
        state.confirmValue === payload,
    };
  }

  if (type === "PASSWORD_INIT_BLUR") {
    return {
      ...state,
      initValue: state.initValue,
      initValid: state.initValue.trim().length > 8,
      inputValid:
        state.confirmValid &&
        state.initValue.trim().length > 8 &&
        state.confirmValue === state.initValue,
    };
  }

  if (type === "PASSWORD_CONFIRM_CHANGE") {
    return {
      ...state,
      confirmValue: payload,
      confirmValid: payload.trim().length > 8,
      inputValid:
        payload.trim().length > 8 &&
        state.initValid &&
        payload === state.initValue,
    };
  }

  if (type === "PASSWORD_CONFIRM_BLUR") {
    return {
      ...state,
      confirmValue: state.confirmValue,
      confirmValid: state.confirmValue.trim().length > 8,
      inputValid:
        state.confirmValid &&
        state.initValid &&
        state.confirmValue === state.initValue,
    };
  }

  return { value: "", valid: false };
};

const fullNameReducer = (state, { type, payload }) => {
  if (type === "NAME_CHANGE") {
    return {
      value: payload,
      valid: payload.includes(" "),
    };
  }

  if (type === "NAME_BLUR") {
    return {
      value: state.value,
      valid: state.value.includes(" "),
    };
  }

  return { value: "", valid: false };
};

const initState = {
  value: "",
  valid: null,
};

const SignupForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const { signupHandler: onSignup } = useContext(AuthContext);

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

    const authData = {
      email: emailState.value,
      password: passwordState.initValue,
      firstName: nameState.value,
    };

    onSignup(authData);
    // only if the signup is succesfull
    navigate("/");
  };

  /** NAME HANDLERS */

  const firstNameChangeHandler = (e) => {
    dispatchName({ type: "NAME_CHANGE", payload: e.target.value });
  };

  const firstNameValidHandler = () => {
    dispatchName({ type: "NAME_BLUR" });
  };

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

  let formValid =
    emailState?.valid && passwordState?.inputValid && nameState?.valid;

  return (
    <div className={modules.formContainer}>
      <form method="post" className={modules.form} onSubmit={signupHandler}>
        <div className={modules.input}>
          <label htmlFor="email">Full Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameValidHandler}
            id="name"
            placeholder="Enter Your Full Name"
            type="name"
            name="name"
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={emailChangeHandler}
            onBlur={emailValidHandler}
            id="email"
            placeholder="you@example.com"
            type="email"
            name="email"
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="password">Password</label>
          <input
            onChange={passwordChangeHandler}
            onBlur={passwordValidHandler}
            id="password"
            placeholder="At least 8 character"
            type="password"
            name="password"
          />
        </div>

        <div className={modules.input}>
          <label htmlFor="password">Confirm Password</label>
          <input
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordValidHandler}
            id="password"
            placeholder="At least 8 character"
            type="password"
            name="password"
          />
        </div>

        <div>
          <button className={modules.login} disabled={!formValid}>
            Signup
          </button>
        </div>
      </form>
      <button className={modules.guest}>Signup as Guest</button>
    </div>
  );
};

export default SignupForm;
