import { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import WishlistContainer from "../components/WishlistComponents/WishlistContainer/WishlistContainer";

const WishlistPage = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <div>
      <h1>WISHLIST PAGE</h1>

      {isLogin && (
        <div>
          <WishlistContainer />
        </div>
      )}
      {!isLogin && <h1>Login First</h1>}
    </div>
  );
};

export default WishlistPage;
