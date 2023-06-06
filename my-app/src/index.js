import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryContextProvider } from "./contexts/category-cotext";
import { ProductContextProvider } from "./contexts/product-context";
import { AuthContextProvider } from "./contexts/auth-context";
import { CartContextProvider } from "./contexts/cart-context";
import { WishlistContextProvider } from "./contexts/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WishlistContextProvider>
        <CartContextProvider>
          <CategoryContextProvider>
            <ProductContextProvider>
              <App />
            </ProductContextProvider>
          </CategoryContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
