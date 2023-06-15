import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext({
  token: "",
  isLogin: false,
});

export const AuthContextProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("token");

  // component states
  const initLogin = localStorageToken ? true : false;
  const [isLogin, setIsLogin] = useState(initLogin); // just for now
  const [token, setToken] = useState(localStorageToken);
  const [currentUser, setCurrentUser] = useState({});

  const loginHandler = (authData) => {
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ ...authData }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { foundUser, encodedToken } = data;
        localStorage.setItem("token", encodedToken);
        setCurrentUser(foundUser);
        setToken(encodedToken);
        setIsLogin(true);
        toast.success("LOGIN DONE");
      });
  };

  const signupHandler = (authData) => {
    fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ ...authData }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const { foundUser, encodedToken } = data;

        localStorage.setItem("token", encodedToken);
        setCurrentUser(foundUser);
        setToken(encodedToken);
        setIsLogin(true);
        console.log("SIGNUP IS DONE");
        toast.success("SIGNUP DONE");
      });
  };

  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null);
    setIsLogin(false);
    localStorage.removeItem("token");
    toast.error("LOGOUT");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        isLogin,
        isSignup: false,
        loginHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => useContext(AuthContext);
