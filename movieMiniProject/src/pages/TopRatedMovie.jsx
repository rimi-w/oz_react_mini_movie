import { useEffect } from "react";
import { useMovieListStore } from "../store/MovieListStore";
import Loading from "./Loading";
import MovieCard from "../components/MovieCard";

const TopRatedMovie = () => {
  const { topRatedMovieList, isLoading, getTopRatedMovieList } =
    useMovieListStore();

  useEffect(() => {
    async function fetchData() {
      const data = await getTopRatedMovieList();
      return data;
    }
    fetchData();
  }, [getTopRatedMovieList]);

  if (isLoading) return <Loading />;
  const topRatedMoviesList = topRatedMovieList.filter(
    (el) => el.adult === false
  );

  return (
    <div className="pt-[130px]">
      <h2 className="text-2xl pl-5 pb-2">
        추천 영화 {`(${topRatedMoviesList.length})`}
      </h2>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {topRatedMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovie;
