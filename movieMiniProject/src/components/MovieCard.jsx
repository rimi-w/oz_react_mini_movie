import { NavLink } from "react-router";

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <NavLink to={`/details/${movie.id}`}>
      <div className="w-[150px] h-[200px] flex flex-col justify-center items-center gap-1">
        <img
          className="w-[100px]"
          src={baseUrl + movie.poster_path}
          alt={`${movie.title}의 포스터`}
        />
        <h1 className="text-[12px] font-bold">{movie.title}</h1>
        <p className="text-[10px]">{movie.vote_average}</p>
      </div>
    </NavLink>
  );
};

export default MovieCard;
