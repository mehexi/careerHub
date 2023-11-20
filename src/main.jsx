import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./componat/layout/layout.jsx";

import HeroSection from "./componat/HeroSection/HeroSection.jsx";
import HomeLayout from "./componat/HomeLayout/HomeLayout.jsx";
import DetailsLayout from "./componat/detailsLayout/DetailsLayout.jsx";
import JobDetails from "./componat/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path: "/statics",
        element: <DetailsLayout></DetailsLayout>,
        children: [
          {
            path: "/statics/:details",
            element: <JobDetails></JobDetails>,
            loader: async ({ params }) => {
              const res = await fetch("/public/jobs.json");
              const data = await res.json();

              const index = parseInt(params.details) - 1;
              const filterData = data.filter((_, i) => i === index);

              console.log(params);
              console.log(filterData);

              return filterData;
            }
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
