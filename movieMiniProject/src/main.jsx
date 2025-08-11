import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainPageLoader } from "./loaders/mainPageLoader.jsx";
import { nowPlayingMoviesLoader } from "./loaders/nowPlayingMoviesLoader.jsx";
import { upcomingMoviesLoader } from "./loaders/upcomingMoviesLoader.jsx";
import { topRatedMoviesLoader } from "./loaders/topRatedMoviesLoader.jsx";
import { popularMoviesLoader } from "./loaders/popularMoviesLoader.jsx";
import { movieDetailLoader } from "./loaders/movieDetailLoader.jsx";
import { searchedMovieLoader } from "./loaders/allMoviesLoader.jsx";
import "./index.css";
import App from "./App.jsx";
import Detail from "./pages/Detail.jsx";
import Main from "./pages/Main.jsx";
import Error from "./pages/Error.jsx";
import NowPlayingMovie from "./pages/NowPlayingMovie.jsx";
import UpcomingMovie from "./pages/UpcomingMovie.jsx";
import TopRatedMovie from "./pages/TopRatedMovie.jsx";
import PopularMovie from "./pages/PopularMovie.jsx";
import Loading from "./pages/Loading.jsx";
import Search from "./pages/Search.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import MyPage from "./pages/MyPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        Component: Main,
        loader: mainPageLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "now-playing",
        Component: NowPlayingMovie,
        loader: nowPlayingMoviesLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "upcoming",
        Component: UpcomingMovie,
        loader: upcomingMoviesLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "top-rated",
        Component: TopRatedMovie,
        loader: topRatedMoviesLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "popular",
        Component: PopularMovie,
        loader: popularMoviesLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "details/:movieId",
        Component: Detail,
        loader: movieDetailLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "search",
        Component: Search,
        loader: searchedMovieLoader,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "my-page",
        Component: MyPage,
      },
      // {
      //   path: "loading",
      //   Component: Loading,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
