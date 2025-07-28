import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import prevButton from "../assets/prevButtonBlack.png";
import nextButton from "../assets/nextButtonBlack.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperMovie = ({ moviesList }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // 버튼 렌더 이후 Swiper 연결
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="relative">
      <div className="w-screen flex justify-between p-[0_30px] absolute top-17">
        <div ref={prevRef} className="size-13 z-10">
          <img
            src={prevButton}
            alt="이전버튼"
            className="bg-white rounded-4xl opacity-80"
          />
        </div>
        <div ref={nextRef} className="size-13 z-10">
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
          // 반응형
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
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        style={{
          "--swiper-pagination-bullet-inactive-color": "#ffffffdc",
          "--swiper-pagination-color": "#0073ff",
          "--swiper-navigation-color": "#0044989a",
          "--swiper-navigation-sides-offset": "30px",
        }}
        modules={[Pagination, Navigation]}
        className="h-[250px]"
      >
        <div className="mt-[30px]">
          {moviesList.map((movie) => (
            <SwiperSlide>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default SwiperMovie;
