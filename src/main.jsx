import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./layouts/Main";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}>
        <Toaster></Toaster>
        <Main></Main>
      </RouterProvider>
    </AuthProvider>
  </QueryClientProvider>
);
