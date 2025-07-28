import { NavLink } from "react-router";

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const getMovieReleaseYear = (movieReleaseDate) => {
    const date = new Date(movieReleaseDate);
    return date.getFullYear();
  };

  const movieReleaseYear = getMovieReleaseYear(movie.release_date);

  return (
    <NavLink to={`/details/${movie.id}`}>
      <div className="w-[300px] rounded-2xl flex flex-col justify-center items-center m-2 relative hover:scale-110 hover:shadow-[1px_1px_10px_10px_#ffffff4e] hover:z-50">
        <img
          className="w-[300px] rounded-2xl"
          src={baseUrl + movie.backdrop_path}
          alt={`${movie.title}의 포스터`}
        />
        {!movie.backdrop_path && (
          <div className="w-[300px] h-[120px] rounded-2xl bg-black"></div>
        )}
        <div className="w-[100%] rounded-[0_0_16px_16px] flex justify-between items-end gap-3 bg-[#0000004c] p-[3px_15px] absolute bottom-0">
          <h1 className="text-[20px] font-extrabold">
            {movie.title}
            <span className="text-[15px] font-bold pl-2">{`(${movieReleaseYear})`}</span>
          </h1>

          <p className="text-[13px] font-bold">
            ⭐&nbsp;&nbsp;{movie.vote_average}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
