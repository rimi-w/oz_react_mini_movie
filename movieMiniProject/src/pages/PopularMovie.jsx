import { useEffect } from "react";
import { useMovieListStore } from "../store/MovieListStore";
import MovieCard from "../components/MovieCard";
import Loading from "./Loading";

const PopularMovie = () => {
  const { popularMovieList, isLoading, getPopularMovieList } =
    useMovieListStore();

  useEffect(() => {
    async function fetchData() {
      const data = await getPopularMovieList();
      return data;
    }
    fetchData();
  }, [getPopularMovieList]);

  if (isLoading) return <Loading />;
  const popularMoviesList = popularMovieList.filter((el) => el.adult === false);

  return (
    <div className="pt-[130px]">
      <h2 className="text-2xl pl-5 pb-2">
        인기 영화 {`(${popularMoviesList.length})`}
      </h2>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {popularMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovie;
