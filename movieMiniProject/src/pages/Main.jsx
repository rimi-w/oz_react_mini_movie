import { useMovieListStore } from "../store/MovieListStore";
import { useEffect } from "react";
import { NavLink } from "react-router";
import Loading from "./Loading";

import SwiperMovie from "../components/SwiperMovie";

const Main = () => {
  const {
    popularMovieList,
    topRatedMovieList,
    nowPlayingMovieList,
    upcomingMovieList,
    isLoading,
    getPopularMovieList,
    getTopRatedMovieList,
    getNowPlayingMovieList,
    getUpcomingMovieList,
  } = useMovieListStore();

  useEffect(() => {
    async function fetchData() {
      const data = await getPopularMovieList();
      return data;
    }
    fetchData();
  }, [getPopularMovieList]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTopRatedMovieList();
      return data;
    }
    fetchData();
  }, [getTopRatedMovieList]);

  useEffect(() => {
    async function fetchData() {
      const data = await getNowPlayingMovieList();
      return data;
    }
    fetchData();
  }, [getNowPlayingMovieList]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUpcomingMovieList();
      return data;
    }
    fetchData();
  }, [getUpcomingMovieList]);

  if (isLoading) return <Loading />;

  const popularMoviesList = popularMovieList.filter((el) => el.adult === false);
  const topRatedMoviesList = topRatedMovieList.filter(
    (el) => el.adult === false
  );
  const nowPlayingMoviesList = nowPlayingMovieList.filter(
    (el) => el.adult === false
  );
  const upcomingMoviesList = upcomingMovieList.filter(
    (el) => el.adult === false
  );

  return (
    <>
      <div className="w-screen h-[calc(100vh-100px)] pt-[120px]">
        <div>
          <NavLink to={"now-playing"}>
            <h2 className="text-2xl pl-5 pb-2">현재 상영작</h2>
          </NavLink>
          <SwiperMovie moviesList={nowPlayingMoviesList} />
        </div>
        <div>
          <NavLink to={"upcoming"}>
            <h2 className="text-2xl pl-5 pb-2">개봉 예정작</h2>
          </NavLink>
          <SwiperMovie moviesList={upcomingMoviesList} />
        </div>
        <div>
          <NavLink to={"top-rated"}>
            <h2 className="text-2xl pl-5 pb-2">추천 영화</h2>
          </NavLink>
          <SwiperMovie moviesList={topRatedMoviesList} />
        </div>
        <div>
          <NavLink to={"popular"}>
            <h2 className="text-2xl pl-5 pb-2">인기 영화</h2>
          </NavLink>
          <SwiperMovie moviesList={popularMoviesList} />
        </div>
      </div>
    </>
  );
};

export default Main;
