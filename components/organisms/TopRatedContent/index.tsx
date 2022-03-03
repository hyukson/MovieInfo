import { useEffect, useState } from "react";

import Link from "next/link";

import Rap from "~/components/atoms/Rap";
import Poster from "~/components/atoms/Poster";

import MovieAutoFade from "~/components/molecules/MovieAutoFade";

import { TopRatedContentStyled } from "./styled";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import "swiper/css/effect-fade";

interface TopRatedContentTypes {
  items: any;
}

const TopRatedContent = ({ items }: TopRatedContentTypes) => {
  const [handle, setHandle] = useState<any>(null);
  const [active, setActive] = useState(0);

  const item = items[active];

  useEffect(() => {
    if (handle) {
      handle.slideTo(active);
    }
  }, [active, handle]);

  return (
    <TopRatedContentStyled>
      <div className="backPoster">
        <Swiper
          className="imageBox"
          effect="fade"
          modules={[EffectFade]}
          lazy={true}
          onSwiper={(e) => {
            setHandle(e);
          }}
        >
          {items.map((v: any, i: number) => (
            <SwiperSlide key={i}>
              <Poster
                className="backImage cover"
                path={v.backdrop_path}
                type="original"
                key={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Rap>
        <div className="visualSection">
          <div className="direction">
            <div>
              <h1>{item.title}</h1>
              <h3>{item.original_title}</h3>
            </div>

            <div className="flex">
              <div>
                <h3>개봉일</h3>
                <p>{item.release_date}</p>
              </div>

              <div>
                <h3>평점</h3>
                <p>{item.vote_average} / 10</p>
              </div>
            </div>

            {item.overview && (
              <div className="overview">
                <h2>{item.tagline || ""}</h2>
                <p>{item.overview.substr(0, 270)}...</p>
              </div>
            )}

            <div className="moreBtn">
              <Link href={`/detail/${item.id}`}>
                <a>Watch Now</a>
              </Link>
            </div>
          </div>

          <MovieAutoFade items={items} active={active} setActive={setActive} />
        </div>
      </Rap>
    </TopRatedContentStyled>
  );
};

export default TopRatedContent;
