import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { queryClient } from "./lib/query-client";
import { QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
