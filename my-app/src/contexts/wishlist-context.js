import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./auth-context";
import { toast } from "react-toastify";

const WishlistContext = createContext({
  data: [],
  onAdd: () => {},
  onDelete: () => {},
  onCheckWishlist: () => {},
});

export const WishlistContextProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const { token, isLogin } = useContext(AuthContext);

  // get wishlist function
  useEffect(() => {
    fetch("/api/user/wishlist", {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWishlistData(data.wishlist);
      });
  }, [token]);

  const addWishlistHandler = async (product) => {
    const response = await fetch("/api/user/wishlist", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });

    const resData = await response.json();
    setWishlistData(resData.wishlist);
    toast.success("ADDED TO WISHLIST");
  };

  const deleteWishlistHandler = async (productID) => {
    const response = await fetch("/api/user/wishlist/" + productID, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });

    const resData = await response.json();
    setWishlistData(resData.wishlist);
    toast.error("REMOVED FROM WISHLIST");
  };

  const checkItemInWish = (data) => {
    if (!isLogin) {
      return false;
    }

    const product = wishlistData?.find((p) => p._id === data._id);

    if (product?._id ? true : false) {
      return product._id;
    } else {
      return false;
    }
  };

  const wishlistItem = wishlistData?.length;

  return (
    <WishlistContext.Provider
      value={{
        data: wishlistData,
        onAdd: addWishlistHandler,
        onDelete: deleteWishlistHandler,
        onCheckWishlist: checkItemInWish,
        wishlistNumber: wishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
