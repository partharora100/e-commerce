import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryContextProvider } from "./contexts/category-cotext";
import { ProductContextProvider } from "./contexts/product-context";
import { AuthContextProvider } from "./contexts/auth-context";
import { CartContextProvider } from "./contexts/cart-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <CategoryContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CategoryContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
