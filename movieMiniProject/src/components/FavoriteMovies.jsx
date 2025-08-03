import { useFavoriteMovieListStore } from "../store/MovieListStore";
import MovieCard from "./MovieCard";

const FavoriteMovies = () => {
  const { favoriteMovieList } = useFavoriteMovieListStore();

  console.log(favoriteMovieList);
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {favoriteMovieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default FavoriteMovies;
