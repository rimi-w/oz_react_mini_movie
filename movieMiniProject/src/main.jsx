import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Detail from "./pages/Detail.jsx";
import Main from "./pages/Main.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "details/:movieId",
        Component: Detail,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
