import data from "../assets/data/movieDetailData.json";

const Detail = () => {
  const movieDetailData = data;
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <article className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <div className="relative">
        <img
          className="w-screen max-w-[650px]"
          src={baseUrl + movieDetailData.backdrop_path}
          alt={`${movieDetailData.title}의 포스터`}
        />
        <div className=" bg-[#00000058] flex flex-col gap-3 p-4 absolute left-2 bottom-2">
          <div className="flex items-end gap-3">
            <h1 className="text-3xl">{movieDetailData.title}</h1>
            <p className="text-[15px]">⭐ {movieDetailData.vote_average}</p>
          </div>
          <div className="flex gap-2 text-[12px]">
            {movieDetailData.genres.map((genre) => (
              <span key={genre.id}>{genre.name} &nbsp; |</span>
            ))}
          </div>
        </div>
      </div>
      <p className="w-[90%] text-pretty">{movieDetailData.overview}</p>
    </article>
  );
};

export default Detail;
