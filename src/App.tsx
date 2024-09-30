import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Root from "./router/Root";
import ProductsPage from "./router/ProductsPage";
import AddItemPage from "./router/AddItemPage";
import EditItemPage from "./router/EditItemPage";
import ProductDetailPage, {
  loader as productLoader,
} from "./router/ProductDetailPage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./router/Home";
import { queryClient } from "./utils/http";
import PrivateRoute from "./router/PrivateRoute";

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
        path: "items/:productId/edit",
        element: <EditItemPage />,
      },
      {
        path: "additem",
        element: <AddItemPage />,
      },
    ],
  },
  {
    path: "signin",
    element: (
      <PrivateRoute>
        <Login />
      </PrivateRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <PrivateRoute>
        <Register />
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
