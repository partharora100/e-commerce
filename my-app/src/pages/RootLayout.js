import { Outlet } from "react-router";
import MainNavigation from "../components/UI/MainNavigation/MainNavigation";
import CategoryNav from "../components/UI/CategoryNav/CatgeoryNav";
import Toast from "../components/UI/Toast/Toast";

const RootLayout = () => {
  // console.log("ROOT LAYOUT");
  return (
    <>
      <div className="container-140">
        <MainNavigation />
        <CategoryNav />
      </div>
      <Outlet />
      <Toast />
    </>
  );
};

export default RootLayout;
