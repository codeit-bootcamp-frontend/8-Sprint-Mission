import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './router/Root.jsx';
import ProductsPage from './router/ProductsPage.jsx';
import AddItemPage from './router/AddItemPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'items',
        element: <ProductsPage />,
      },
      {
        path: 'additem',
        element: <AddItemPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
