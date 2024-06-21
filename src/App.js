import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './router/Root.jsx';
import Product from './router/Product.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/items',
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
