import { useLoaderData, useSearchParams } from "react-router";
import { engToKor, getRegExp } from "korean-regexp";
import MovieCard from "../components/MovieCard";

function Search() {
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get(`name`);
  const movieNameReg = getRegExp(movieName, {
    initialSearch: true, // 초성 검색 허용
    fuzzy: true, // 유사 검색 허용
  });
  const movieNameEnToKo = engToKor(movieName);
  const searchedMovieData = useLoaderData();

  const searchedMoviesData = searchedMovieData.filter(
    (el) => movieNameReg.test(el.title) || el.title.match(movieNameEnToKo)
  );

  return (
    <>
      <div className="pt-[130px] flex flex-col">
        <h2 className="text-2xl pl-[10%] pb-2">
          검색 결과 {`(${searchedMoviesData.length})`}
        </h2>
        {searchedMoviesData.length === 0 && (
          <p className="text-2xl text-center pt-10">찾는 영화가 없어요 😭</p>
        )}
        <div className="flex flex-wrap justify-center pt-[20px]">
          {searchedMoviesData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
