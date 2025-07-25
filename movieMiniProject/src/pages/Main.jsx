import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/MovieCard";
import data from "../assets/data/movieListData.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Main = () => {
  const moviesData = data.results;

  return (
    <>
      <Swiper
        slidesPerView={5}
        slidesPerGroup={5}
        slidesPerGroupSkip={5}
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
          {moviesData.map((movie) => (
            <SwiperSlide>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="flex flex-wrap pt-[20px]">
        {moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Main;
