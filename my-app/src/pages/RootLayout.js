import { Outlet } from "react-router";
import MainNavigation from "../components/UI/MainNavigation/MainNavigation";
import CategoryNav from "../components/UI/CategoryNav/CatgeoryNav";

const RootLayout = () => {
  return (
    <>
      <div className="container-140">
        <MainNavigation />
        <CategoryNav />
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
