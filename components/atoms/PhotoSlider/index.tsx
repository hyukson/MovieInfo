import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SlideArrows from "~/components/atoms/SlideArrows";

import { PhotoSliderStyled } from "./styled";

import "swiper/css";
import "swiper/css/effect-coverflow";
import Poster from "../Poster";
import { Lazy } from "swiper";

interface PhotoSliderTypes {
  items: any;
  slidesPerView?: number;
  spaceBetween?: number;
}

const PhotoSlider = ({
  items,
  slidesPerView = 3,
  spaceBetween = 30,
}: PhotoSliderTypes) => {
  console.log(items);

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

  return (
    <PhotoSliderStyled>
      <Swiper
        modules={[Lazy]}
        lazy={true}
        breakpoints={breakPoints}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={(e) => {
          setHandle(e);
        }}
      >
        {items.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <Poster
              className="photo scale-down"
              alt="photo"
              path={item.file_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideArrows handle={handle} />
    </PhotoSliderStyled>
  );
};

export default PhotoSlider;
