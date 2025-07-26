import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Detail from "./pages/Detail.jsx";
import Main from "./pages/Main.jsx";
import Error from "./pages/Error.jsx";
import NowPlayingMovie from "./pages/NowPlayingMovie.jsx";
import UpcomingMovie from "./pages/UpcomingMovie.jsx";
import TopRatedMovie from "./pages/TopRatedMovie.jsx";
import PopularMovie from "./pages/PopularMovie.jsx";

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
        path: "now-playing",
        Component: NowPlayingMovie,
      },
      {
        path: "upcoming",
        Component: UpcomingMovie,
      },
      {
        path: "top-rated",
        Component: TopRatedMovie,
      },
      {
        path: "popular",
        Component: PopularMovie,
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
