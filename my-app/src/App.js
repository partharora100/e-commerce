import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import CartPage from "./pages/Cart";
import ProductPage from "./pages/Products";
import AccountPage from "./pages/Account";
import WishlistPage from "./pages/Wishlist";

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
        path: "/wishlist",
        element: <WishlistPage />,
      },
      { path: "/account", element: <AccountPage /> },
      { path: "/products", element: <ProductPage /> },
      // {
      //   path: "/category/:categoryName",
      //   element: <CategoryPage />,
      // },
      {
        path: "/product/:productID",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
