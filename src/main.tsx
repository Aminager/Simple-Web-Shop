import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ErrorPage } from './pages/ErrorPage.tsx';
import { ShopPage, productLoader } from './pages/ShopPage.tsx';
import { ProductPage } from './pages/ProductPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    loader: productLoader,
  },
  {
    path: "/product/:id",
    element: <ProductPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
