import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./router/Root";
import ProductsPage from "./router/ProductsPage";
import AddItemPage from "./router/AddItemPage";
import ProductDetailPage, {
  loader as productLoader,
} from "./router/ProductDetailPage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./router/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <ProductsPage />,
      },
      {
        path: "items/:productId",
        id: "product-detail",
        element: <ProductDetailPage />,
        loader: productLoader,
      },
      {
        path: "additem",
        element: <AddItemPage />,
      },
    ],
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
