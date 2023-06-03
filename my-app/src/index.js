import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryContextProvider } from "./contexts/category-cotext";
import { ProductContextProvider } from "./contexts/product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
