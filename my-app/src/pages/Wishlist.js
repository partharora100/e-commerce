import { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import WishlistContainer from "../components/WishlistComponents/WishlistContainer/WishlistContainer";
import WishlistContext from "../contexts/wishlist-context";

const WishlistPage = () => {
  const { data } = useContext(WishlistContext);
  const { isLogin } = useContext(AuthContext);

  const wishlistEmpty = data?.length === 0;

  return (
    <div>
      <h1 className="page-heading">WISHLIST PAGE</h1>

      {isLogin && wishlistEmpty && (
        <div>
          NO ITEM IN WISHLIST ADD button saying continue shopping to the user
        </div>
      )}

      {isLogin && !wishlistEmpty && (
        <div>
          <WishlistContainer />
        </div>
      )}

      {!isLogin && <h1>Login First</h1>}
    </div>
  );
};

export default WishlistPage;
