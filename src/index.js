import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import AboutUs from './pages/aboutus';
import TPI from './pages/tpi';
import Consulting from './pages/cons';
import Expertise from './pages/ex';
import Partners from './pages/partners';
import Media from './pages/media';
import NewsDetail from './pages/NewsDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
  },
  {
    path: '/tpi',
    element: <TPI />,
  },
  {
    path: '/cons',
    element: <Consulting />,
  },
  {
    path: '/ex',
    element: <Expertise />,
  },
  {
    path: '/partners',
    element: <Partners />,
  },
  {
    path: '/media',
    element: <Media />,
  },
  {
    path: '/news/:id',
    element: <NewsDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
