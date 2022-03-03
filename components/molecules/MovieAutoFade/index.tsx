import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SlideArrows from "~/components/atoms/SlideArrows";
import Progress from "~/components/atoms/progress";
import Poster from "~/components/atoms/Poster";

import { MovieAutoFadeStyled } from "./styled";

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

  const changeActive = (i: number) => {
    if (items.length - slidesPerView <= active) {
      setActive(i);
    }

    if (handle) {
      handle.slideTo(i);
    }
  };

  useEffect(() => {
    if (isMax) {
      return;
    }

    const timer = setTimeout(() => {
      changeActive(active + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [active, handle, isMax]);

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
          setHandle(e);
        }}
        onSlideChange={(e) => {
          setActive(e.activeIndex);
        }}
      >
        {items.map((item: any, i: number) => (
          <SwiperSlide key={i} className={active == i ? "active" : ""}>
            <Poster
              className="poster"
              path={item.poster_path}
              onclick={() => changeActive(i)}
            />
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
