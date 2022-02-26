import Image from "next/image";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SlideArrows from "~/components/atoms/SlideArrows";

import { PhotoSliderStyled } from "./styled";

import noImageIcon from "~icons/noImage.png";

import "swiper/css";
import "swiper/css/effect-coverflow";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

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
        breakpoints={breakPoints}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={(e) => {
          setHandle(e);
        }}
      >
        {items.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <div className="photo">
              <Image
                src={
                  item.file_path
                    ? `${imgURL}/w500${item.file_path}`
                    : noImageIcon
                }
                alt="poster"
                objectFit="scale-down"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <SlideArrows handle={handle} />
    </PhotoSliderStyled>
  );
};

export default PhotoSlider;
