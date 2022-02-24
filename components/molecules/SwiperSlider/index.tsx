import { ReactNode, useState } from "react";

import { Navigation } from "swiper";
import { Swiper } from "swiper/react";

import SlideArrows from "~/components/atoms/SlideArrows";

import { SwiperSliderStyled } from "./styled";

import "swiper/css";
import "swiper/css/navigation";

interface SwiperSliderTypes {
  children: ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
}

const SwiperSlider = ({
  children,
  slidesPerView = 5,
  spaceBetween = 30,
}: SwiperSliderTypes) => {
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
    <SwiperSliderStyled>
      <Swiper
        breakpoints={breakPoints}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={(e) => {
          setHandle(e);
        }}
      >
        {children}
      </Swiper>

      <SlideArrows handle={handle} />
    </SwiperSliderStyled>
  );
};

export default SwiperSlider;
