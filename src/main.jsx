import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fortawesome/fontawesome-svg-core/styles.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './componat/layout/layout.jsx';

import HeroSection from './componat/HeroSection/HeroSection.jsx';
import HomeLayout from './componat/HomeLayout/HomeLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<HomeLayout></HomeLayout>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
