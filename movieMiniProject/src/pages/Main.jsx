import { NavLink, useLoaderData } from "react-router";
import SwiperMovie from "../components/SwiperMovie";

const Main = () => {
  const { nowPlaying, upcoming, topRated, popular } = useLoaderData();

  const nowPlayingMoviesList = nowPlaying.filter((el) => el.adult === false);
  const upcomingMoviesList = upcoming.filter((el) => el.adult === false);
  const topRatedMoviesList = topRated.filter((el) => el.adult === false);
  const popularMoviesList = popular.filter((el) => el.adult === false);

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
