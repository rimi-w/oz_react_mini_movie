import { useEffect, useRef, useState } from "react";
import { useMovieListStore } from "../store/MovieListStore";
import { useLoaderData } from "react-router";
import Loading from "./Loading";
import MovieCard from "../components/MovieCard";
import ozCharacter from "../assets/oz-character.png";

const NowPlayingMovie = () => {
  const { nowPlayingMovieList, isLoading, getNowPlayingMovieList } =
    useMovieListStore();
  const nowPlayingMovies = useLoaderData();
  const [page, setPage] = useState(1);
  const fetchedPagesRef = useRef(new Set()); // 이미 요청한 페이지 자동 기억 -> Set()은 중복없애주는 함수
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerRef.current]);

  useEffect(() => {
    async function fetchData() {
      if (fetchedPagesRef.current.has(page)) return; // 이미 렌더링한 page일 경우 return
      const data = await getNowPlayingMovieList(page);
      fetchedPagesRef.current.add(page); // 중복방지하기 위해 현재 page 저장

      return data;
    }

    fetchData();
  }, [getNowPlayingMovieList, page]);

  if (isLoading) return <Loading />;
  const nowPlayingMoviesList = nowPlayingMovieList.filter(
    (el) => el.adult === false
  );

  console.log(nowPlayingMovieList, page);
  return (
    <div className="pt-[130px]">
      <h2 className="text-2xl pl-5 pb-2">
        현재 상영작 {`(${nowPlayingMovies.total_results})`}
      </h2>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {nowPlayingMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div
        ref={observerRef}
        className="w-full h-[250px] mt-10 flex justify-center items-center"
      >
        <img
          src={ozCharacter}
          alt="oz 캐릭터"
          className="invert rounded-full pt-5 animate-bounce scale-50"
        />
      </div>
    </div>
  );
};

export default NowPlayingMovie;
