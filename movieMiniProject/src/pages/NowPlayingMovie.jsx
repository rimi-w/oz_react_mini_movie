import { useEffect } from "react";
import { useMovieListStore } from "../store/MovieListStore";
import Loading from "./Loading";
import MovieCard from "../components/MovieCard";

const NowPlayingMovie = () => {
  const { nowPlayingMovieList, isLoading, getNowPlayingMovieList } =
    useMovieListStore();

  useEffect(() => {
    async function fetchData() {
      const data = await getNowPlayingMovieList();
      return data;
    }
    fetchData();
  }, [getNowPlayingMovieList]);

  if (isLoading) return <Loading />;
  const nowPlayingMoviesList = nowPlayingMovieList.filter(
    (el) => el.adult === false
  );

  return (
    <div className="pt-[130px]">
      <h2 className="text-2xl pl-5 pb-2">
        현재 상영작 {`(${nowPlayingMoviesList.length})`}
      </h2>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {nowPlayingMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlayingMovie;
