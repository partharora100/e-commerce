import "./App.css";
import logo from "./logo.png";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import CartPage from "./pages/Cart";
import WishlistPage from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: "",
      },
      {},
      {},
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
