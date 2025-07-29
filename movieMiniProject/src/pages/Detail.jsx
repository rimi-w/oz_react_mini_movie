import { useLoaderData } from "react-router";

const Detail = () => {
  const movieDetailData = useLoaderData();
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const getMovieReleaseYear = (movieReleaseDate) => {
    const date = new Date(movieReleaseDate);
    return date.getFullYear();
  };

  const movieReleaseYear = getMovieReleaseYear(movieDetailData.release_date);

  return (
    <article className="w-screen h-[calc(100vh-100px)] absolute bottom-0 flex flex-col justify-center items-center gap-5">
      <img
        className="scale-200 lg:w-screen lg:scale-100 lg:blur-[8px] blur-xs opacity-50 -z-50 absolute"
        src={baseUrl + movieDetailData.backdrop_path}
        alt={`${movieDetailData.title}의 포스터`}
      />
      <div className="w-screen h-[90%] flex flex-col justify-center items-center gap-5 lg:flex-row bg-[#00000058]">
        <img
          className="w-[50%] max-w-[371px] min-w-[331px] max-h-[548px] opacity-70 lg:opacity-100 shadow-[1px_1px_10px_10px_#ffffff55] rounded-4xl"
          src={baseUrl + movieDetailData.poster_path}
          alt={`${movieDetailData.title}의 포스터`}
        />
        <div className="w-[80%] max-h-[562px] lg:w-[40%] absolute bg-[#00000058] lg:relative lg:bg-[#ffffff00] flex flex-col items-start gap-3 overflow-y-scroll [&::-webkit-scrollbar]:hidden p-7">
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
