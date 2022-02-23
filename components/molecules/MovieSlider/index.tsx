import { useState } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieItem from "~/components/atoms/MovieItem";
import SlideArrows from "~/components/atoms/SlideArrows";

import { MovieSliderStyled } from "./styled";

import "swiper/css";
import "swiper/css/navigation";

interface MovieSliderTypes {
  items: any;
  slidesPerView?: number;
  spaceBetween?: number;
}

const MovieSlider = ({
  items,
  slidesPerView = 5,
  spaceBetween = 30,
}: MovieSliderTypes) => {
  const [handle, setHandle] = useState<any>(null);

  // 반응형
  const breakPoints = {
    1520: {
      slidesPerView: slidesPerView,
    },
    1220: {
      slidesPerView: slidesPerView - 1,
    },
    920: {
      slidesPerView: slidesPerView - 2,
    },
    720: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
  };

  console.log(items);

  return (
    <MovieSliderStyled>
      <Swiper
        breakpoints={breakPoints}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={(e) => {
          setHandle(e);
        }}
      >
        {items.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <MovieItem {...item} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideArrows handle={handle} />
    </MovieSliderStyled>
  );
};

export default MovieSlider;
