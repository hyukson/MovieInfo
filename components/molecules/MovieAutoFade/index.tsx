import Image from "next/image";

import { useCallback, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SlideArrows from "~/components/atoms/SlideArrows";

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

  useEffect(() => {
    if (active === items.length - 1) {
      return;
    }

    const timer = setTimeout(() => {
      changeActive(active + 1);
    }, 4000);

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

      <SlideArrows handle={handle} />
    </MovieAutoFadeStyled>
  );
};

export default MovieAutoFade;
