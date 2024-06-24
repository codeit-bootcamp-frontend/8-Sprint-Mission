import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './router/Root.jsx';
import Product from './router/Product.jsx';
import AddItem from './router/AddItem.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/items',
        element: <Product />,
      },
      {
        path: '/additem',
        element: <AddItem />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
