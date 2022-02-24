import { SwiperSlide } from "swiper/react";

import { TrailersSliderStyled } from "./styled";

import SwiperSlider from "~/components/atoms/SwiperSlider";
import VideoIframe from "~/components/atoms/VideoIframe";

interface TrailersSliderTypes {
  items: any;
}

const TrailersSlider = ({ items }: TrailersSliderTypes) => {
  return (
    <TrailersSliderStyled>
      <SwiperSlider slidesPerView={3} spaceBetween={20}>
        {items?.map((video: any, i: number) => (
          <SwiperSlide key={i}>
            <VideoIframe videoURL={video.key} key={i} />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </TrailersSliderStyled>
  );
};

export default TrailersSlider;
