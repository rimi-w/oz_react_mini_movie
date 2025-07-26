import { useParams } from "react-router";
import { useEffect } from "react";
import { useMovieDetailDataStore } from "../store/MovieListStore";
import Loading from "./Loading";

const Detail = () => {
  const { movieDetailData, getMovieDetailData, isLoading } =
    useMovieDetailDataStore();
  const params = useParams();
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      if (params.movieId) {
        await getMovieDetailData(params.movieId);
      }
    }
    fetchData();
  }, [params.movieId, getMovieDetailData]);

  if (isLoading) return <Loading />;

  const getMovieReleaseYear = (movieReleaseDate) => {
    const date = new Date(movieReleaseDate);
    return date.getFullYear();
  };

  const movieReleaseYear = getMovieReleaseYear(movieDetailData.release_date);
  console.log(movieDetailData);

  return (
    <article className="w-screen h-[calc(100vh-100px)] absolute bottom-0 flex flex-col justify-center items-center gap-5">
      <img
        className="scale-200 lg:w-screen lg:scale-100 lg:blur-[8px] blur-xs opacity-50 -z-50 absolute"
        src={baseUrl + movieDetailData.backdrop_path}
        alt={`${movieDetailData.title}의 포스터`}
      />
      <div className="w-screen h-[90%] flex justify-center items-center gap-5 bg-[#00000058]">
        <img
          className="w-[50%] max-w-[371px] min-w-[331px] max-h-[548px] shadow-[1px_1px_10px_10px_#ffffff55] rounded-4xl"
          src={baseUrl + movieDetailData.poster_path}
          alt={`${movieDetailData.title}의 포스터`}
        />
        <div className="w-[40%] max-h-[562px] flex flex-col items-start gap-3 overflow-y-scroll [&::-webkit-scrollbar]:hidden p-4">
          <div className="flex justify-evenly items-end gap-3">
            <h1 className="text-3xl font-extrabold">
              {movieDetailData.title}
              <span className="text-[20px] font-bold pl-2">{`(${movieReleaseYear})`}</span>
            </h1>
            <p className="text-[15px]">
              ⭐&nbsp;&nbsp;{movieDetailData.vote_average}
            </p>
          </div>
          <div className="flex text-[13px]">
            <span>
              {movieDetailData.genres && // 이걸 안하면 자꾸 오류남.-> 한번 지웠다가 다시 저장하면 실행됨.
                movieDetailData.genres.map((genre) => genre.name).join(` | `)}
            </span>
          </div>
          <p className="text-xl text-pretty opacity-60">
            {movieDetailData.overview}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Detail;
