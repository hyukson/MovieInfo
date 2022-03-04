import { SwiperSlide } from "swiper/react";

import { CreditsSliderStyled } from "./styled";

import SwiperSlider from "~/components/atoms/SwiperSlider";

import Poster from "~/components/atoms/Poster";

interface CreditsSliderTypes {
  items: any;
}

const CreditsSlider = ({ items }: CreditsSliderTypes) => {
  return (
    <CreditsSliderStyled>
      <SwiperSlider slidesPerView={8} spaceBetween={10}>
        {items?.map((actor: any, i: number) => (
          <SwiperSlide key={i}>
            <Poster
              className="carousel cover"
              alt="carousel"
              path={actor.profile_path}
              type="w300"
              key={i}
            />
            <h4>{actor.name}</h4>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </CreditsSliderStyled>
  );
};

export default CreditsSlider;
