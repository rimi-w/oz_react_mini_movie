import { useEffect } from "react";
import { useMovieListStore } from "../store/MovieListStore";
import Loading from "./Loading";
import MovieCard from "../components/MovieCard";

const UpcomingMovie = () => {
  const { upcomingMovieList, isLoading, getUpcomingMovieList } =
    useMovieListStore();

  useEffect(() => {
    async function fetchData() {
      const data = await getUpcomingMovieList();
      return data;
    }
    fetchData();
  }, [getUpcomingMovieList]);

  if (isLoading) return <Loading />;
  const upcomingMoviesList = upcomingMovieList.filter(
    (el) => el.adult === false
  );

  return (
    <div className="pt-[130px]">
      <h2 className="text-2xl pl-5 pb-2">
        개봉 예정작 {`(${upcomingMoviesList.length})`}
      </h2>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {upcomingMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovie;
