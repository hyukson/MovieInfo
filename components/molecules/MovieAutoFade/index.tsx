import Image from "next/image";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SlideArrows from "~/components/atoms/SlideArrows";
import Progress from "~/components/atoms/progress";

import noImageIcon from "~/assets/icons/noImage.png";

import { MovieAutoFadeStyled } from "./styled";

import "swiper/css";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface MovieAutoFadeTypes {
  items: any;
  slidesPerView?: number;
  spaceBetween?: number;
  active: number;
  setActive: any;
}

const MovieAutoFade = ({
  items,
  slidesPerView = 4,
  spaceBetween = 10,
  active,
  setActive,
}: MovieAutoFadeTypes) => {
  const [handle, setHandle] = useState<any>(null);

  const isMax = active === items.length - 1;

  useEffect(() => {
    if (isMax) {
      return;
    }

    const timer = setTimeout(() => {
      changeActive(active + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [active, handle]);

  const changeActive = (i: number) => {
    if (items.length - slidesPerView <= active) {
      setActive(i);
    }

    if (handle) {
      handle.slideTo(i);
    }
  };

  // 반응형
  const breakPoints = {
    900: {
      slidesPerView: slidesPerView,
    },
    680: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  };

  return (
    <MovieAutoFadeStyled>
      <Swiper
        breakpoints={breakPoints}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={(e) => {
          console.log(e);
          setHandle(e);
        }}
        onSlideChange={(e) => {
          setActive(e.activeIndex);
        }}
      >
        {items.map((item: any, i: number) => (
          <SwiperSlide key={i} className={active == i ? "active" : ""}>
            <div className="poster" onClick={() => changeActive(i)}>
              <Image
                src={
                  item.poster_path
                    ? `${imgURL}/w500${item.poster_path}`
                    : noImageIcon
                }
                alt="poster"
                layout="fill"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 진행바 */}
      <Progress active={active} isStop={isMax} />

      <SlideArrows handle={handle} />
    </MovieAutoFadeStyled>
  );
};

export default MovieAutoFade;
