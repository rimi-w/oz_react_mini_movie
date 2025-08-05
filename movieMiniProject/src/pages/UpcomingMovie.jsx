import { useRef, useState } from "react";
import { useMovieListStore } from "../store/MovieListStore";
import { useLoaderData } from "react-router";
import { useThrottle } from "../hooks/useThrottle";
import { useObserver } from "../hooks/useObserver";
import MovieCard from "../components/MovieCard";
import ozCharacter from "../assets/oz-character.png";

const UpcomingMovie = () => {
  const { upcomingMovieList, getUpcomingMovieList } = useMovieListStore();
  const upcomingMovies = useLoaderData();
  const [page, setPage] = useState(1);
  const observerRef = useRef();
  const isFetchingRef = useRef(false);
  const fetchedPagesRef = useRef(new Set());

  const throttledFetch = useThrottle(async (page) => {
    if (isFetchingRef.current || fetchedPagesRef.current.has(page)) return; // fetching 중이거나 이미 fetch 한 page 일경우 그냥 리턴

    isFetchingRef.current = true;
    await getUpcomingMovieList(page);
    fetchedPagesRef.current.add(page);
    isFetchingRef.current = false;
    setPage((prev) => prev + 1); // ✅ fetch 성공 시 page 증가
  }, 1000);

  useObserver(observerRef, () => {
    throttledFetch(page);
  });

  const upcomingMoviesList = upcomingMovieList.filter(
    (el) => el.adult === false
  );

  return (
    <div className="pt-[130px]">
      <h2 className="text-2xl pl-5 pb-2">
        개봉 예정작 {`(${upcomingMovies.total_results})`}
      </h2>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {upcomingMoviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div
        ref={observerRef}
        className="w-full h-[250px] mt-15 flex justify-center items-center"
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

export default UpcomingMovie;
