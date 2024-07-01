import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import RoutePath from "RoutePath";
import { Home, Items, Signin, Signup } from "pages";

const router = createBrowserRouter([
  {
    path: RoutePath.home,
    element: <Home />,
  },
  {
    path: RoutePath.items,
    element: <Items />,
  },
  {
    path: RoutePath.signIn,
    element: <Signin />,
  },
  {
    path: RoutePath.signUp,
    element: <Signup />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
