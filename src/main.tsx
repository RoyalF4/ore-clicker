import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Start Screen</div>,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/stats",
    element: <div>Stats</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
