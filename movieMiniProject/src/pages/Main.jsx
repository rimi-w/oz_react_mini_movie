import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieListStore } from "../store/MovieListStore";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "./Loading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Main = () => {
  const { movieList, isLoading, getMovieList } = useMovieListStore();

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieList(`popular`);
      return data;
    }
    fetchData();
  }, [getMovieList]);

  if (isLoading) return <Loading />;

  const moviesList = movieList.filter((el) => el.adult === false);

  return (
    <div>
      <Swiper
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-[230px]"
      >
        <div>
          {moviesList.map((movie) => (
            <SwiperSlide>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="flex flex-wrap justify-center pt-[20px]">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Main;
