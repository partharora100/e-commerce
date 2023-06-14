import { useContext } from "react";
import AuthForm from "../components/AuthComponents/AuthForm";
import AuthContext from "../contexts/auth-context";
import UserCard from "../components/UserCard/UserCard";

const AccountPage = () => {
  const { isLogin } = useContext(AuthContext);


  
  return (
    <>
      <div className="container-100">
        {isLogin && <UserCard />}
        {!isLogin && <AuthForm />}
      </div>
    </>
  );
};

export default AccountPage;
