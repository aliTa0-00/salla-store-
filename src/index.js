import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mobeil from "./pages/maobil";
import Cam from "./pages/Cam";
import SignUp from "./pages/SignUp";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Error 404</h2>,
  },
  {
    path: "/Mobeil",
    element: <Mobeil />,
  },
  {
    path: "/Cam",
    element: <Cam />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
