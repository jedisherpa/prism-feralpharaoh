import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import PrismDodecahedronPage from "@/pages/PrismDodecahedron";
import "@/styles/theme-dark.css";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/prism-dodecahedron" replace />,
  },
  {
    path: "/prism-dodecahedron",
    element: <PrismDodecahedronPage />,
  },
  {
    path: "*",
    element: <Navigate to="/prism-dodecahedron" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
