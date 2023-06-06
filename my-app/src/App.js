import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import CartPage from "./pages/Cart";
import CategoryPage from "./pages/Category";
import ProductPage from "./pages/Product";
import AccountPage from "./pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "wishlist",
        element: "",
      },
      { path: "account", element: <AccountPage /> },
      {
        path: "category/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "product/:productID",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
