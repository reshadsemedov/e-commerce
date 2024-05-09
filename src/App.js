import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react"; 

function App() {
  const Home = lazy(() => import('./components/Home.jsx'));
  const LoginForm = lazy(() => import('./components/Form.jsx'));
  const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
  const Favourites = lazy(() => import('./components/Favourites.jsx'));
  const ParentRoot = lazy(() => import('./components/ParentRoot.jsx'));

  const router = createBrowserRouter([
    { 
      path: '/',
      element: <Suspense fallback={<p>Loading...</p>}><ParentRoot /></Suspense>,
      children: [
        { path: '/', element: <Suspense fallback={<p>Loading...</p>}><Home /></Suspense>},
        { path: '/auth', element: <Suspense fallback={<p>Loading...</p>}><LoginForm/></Suspense> },
        { path: '/product/:id', element: <Suspense fallback={<p>Loading...</p>}><ProductDetail /></Suspense> },
        { path: '/favourites', element: <Suspense fallback={<p>Loading...</p>}><Favourites /></Suspense> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
