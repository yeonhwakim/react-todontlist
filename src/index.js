import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ToDontList from "./components/todontlist/ToDontList";
import ToDoList from "./components/todolist/ToDoList";
import DoneList from "./components/donelist/DoneList";
import ErrorPage from "./components/erropage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to="todontlist" />,
      },
      {
        path: "todontlist",
        element: <ToDontList />,
      },
      {
        path: "todolist",
        element: <ToDoList />,
      },
      {
        path: "donelist",
        element: <DoneList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
