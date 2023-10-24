import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import Home, { loader as HomeLoader } from "@/pages/Home";
import Root from "@/components/Root";
import { ThemeProvider } from "@/components/theme-provider";
import PostsList, { loader as UserPostsLoader } from "./pages/PostsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: HomeLoader,
        element: <Home />,
      },
      {
        path: "/user/:id/posts",
        loader: UserPostsLoader,
        element: <PostsList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
