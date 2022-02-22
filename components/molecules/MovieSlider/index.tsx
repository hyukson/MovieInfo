import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieItem from "~/components/atoms/MovieItem";

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
  return (
    <MovieSliderStyled>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
      >
        {items.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <MovieItem {...item} key={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieSliderStyled>
  );
};

export default MovieSlider;
