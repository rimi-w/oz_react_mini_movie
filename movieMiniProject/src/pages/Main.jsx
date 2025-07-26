import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMovieListStore } from "../store/MovieListStore";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "./Loading";
import prevButton from "../assets/prevButtonBlack.png";
import nextButton from "../assets/nextButtonBlack.png";

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
    <div className="w-screen h-[calc(100vh-100px)] absolute bottom-0">
      <div className="w-screen flex justify-between p-[0_30px] absolute top-17">
        <div className="custom-button-prev size-13 z-10">
          <img
            src={prevButton}
            alt="이전버튼"
            className="bg-white rounded-4xl opacity-80"
          />
        </div>
        <div className="custom-button-next size-13 z-10">
          <img
            src={nextButton}
            alt="다음버튼"
            className="bg-white rounded-4xl opacity-80"
          />
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        slidesPerGroup={1}
        spaceBetween={10}
        // centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          857: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 60,
          },
          1118: {
            slidesPerView: 4,
            slidesPerGroup: 3,
          },
        }}
        navigation={{
          enabled: true,
          prevEl: ".custom-button-prev",
          nextEl: ".custom-button-next",
        }}
        style={{
          "--swiper-pagination-bullet-inactive-color": "#ffffffdc",
          "--swiper-pagination-color": "#0073ff",
          "--swiper-navigation-color": "#0044989a",
          "--swiper-navigation-sides-offset": "30px",
        }}
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
