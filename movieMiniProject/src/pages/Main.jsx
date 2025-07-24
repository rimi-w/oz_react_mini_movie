import MovieCard from "../components/MovieCard";
import data from "../assets/data/movieListData.json";

const Main = () => {
  const moviesData = data.results;

  return (
    <>
      <div className="flex flex-wrap pt-[20px]">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
