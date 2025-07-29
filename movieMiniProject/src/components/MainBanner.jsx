import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import prevButton from "../assets/prevButtonBlack.png";
import nextButton from "../assets/nextButtonBlack.png";
import BannerCard from "./BannerCard";

import "swiper/css";
import "swiper/css/navigation";

const MainBanner = ({ moviesList }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // 버튼 렌더 이후 Swiper 연결
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="relative">
      <div className="w-screen flex justify-between p-[0_30px] absolute top-[140px]">
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
        slidesPerView="auto"
        spaceBetween={10}
        centeredSlides={true}
        centerInsufficientSlides={true}
        loop={true}
        breakpoints={{
          // 반응형
          391: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          652: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          936: {
            slidesPerView: 4,
            slidesPerGroup: 3,
          },
          1123: {
            slidesPerView: 5,
            slidesPerGroup: 4,
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
        modules={[Navigation]}
        className="h-[380px]"
      >
        <div>
          {moviesList.map((movie) => (
            <SwiperSlide>
              <BannerCard key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default MainBanner;
