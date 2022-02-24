import Image from "next/image";

import { SwiperSlide } from "swiper/react";

import { CreditsSliderStyled } from "./styled";

import SwiperSlider from "~/components/atoms/SwiperSlider";

import noImageIcon from "~icons/noImage.png";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface CreditsSliderTypes {
  items: any;
}

const CreditsSlider = ({ items }: CreditsSliderTypes) => {
  return (
    <CreditsSliderStyled>
      <SwiperSlider slidesPerView={8} spaceBetween={10}>
        {items?.map((actor: any, i: number) => (
          <SwiperSlide key={i}>
            <div className="carousel">
              <Image
                src={
                  actor.profile_path
                    ? `${imgURL}/w300${actor.profile_path}`
                    : noImageIcon
                }
                alt="carousel"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h4>{actor.name}</h4>
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </CreditsSliderStyled>
  );
};

export default CreditsSlider;
