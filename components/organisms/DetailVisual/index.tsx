import Image from "next/image";

import { SwiperSlide } from "swiper/react";

import Rap from "~/components/atoms/Rap";
import VideoIframe from "~/components/atoms/VideoIframe";
import { VideoIframeStyled } from "~/components/atoms/VideoIframe/styled";

import SwiperSlider from "~/components/molecules/SwiperSlider";
import MovieSection from "../MovieSection";

import { DetailVisualStyled } from "./styled";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

interface DetailVisualTypes {
  item: any;
  trailers: any;
  credits: any;
  recommendItems: any;
  similarsItems: any;
}

const DetailVisual = ({
  item,
  trailers,
  credits,
  recommendItems,
  similarsItems,
}: DetailVisualTypes) => {
  console.log(item);
  console.log(trailers);
  console.log(credits);
  console.log(recommendItems);
  console.log(similarsItems);

  const countries = item.production_countries
    .map((v: any) => v.name)
    .join(" / ");

  return (
    <DetailVisualStyled>
      <div className="backPoster">
        <div className="image">
          <Image
            src={`${imgURL}/original${item.backdrop_path}`}
            alt="poster"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <Rap>
        <div className="visualSection">
          <div className="poster">
            <Image
              src={`${imgURL}/w500${item.poster_path}`}
              alt="poster"
              layout="fill"
            />
          </div>

          <div className="direction">
            <div>
              <h1>{item.title}</h1>
              <h3>{item.original_title + ` (${countries})`}</h3>
            </div>

            {item.overview && (
              <div>
                <h3>줄거리</h3>
                <p>{item.overview.substr(0, 126)} ....</p>
              </div>
            )}

            <div>
              <h3>개봉일</h3>
              <p>{item.release_date}</p>
            </div>

            <div>
              <h3>장르</h3>
              <p>
                {item.genres.map((v: any) => v.name).join(", ") ||
                  "작성된 장르가 없습니다."}
              </p>
            </div>
          </div>
        </div>

        {item.overview && (
          <section className="overview">
            <h2>{item.tagline || ""}</h2>
            <p>{item.overview}</p>
          </section>
        )}

        <section>
          <div className="Header">
            <h1>예고편</h1>
          </div>

          <SwiperSlider slidesPerView={3} spaceBetween={20}>
            {trailers?.map((video: any, i: number) => (
              <SwiperSlide key={i}>
                <VideoIframe videoURL={video.key} key={i} />
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </section>

        <section>
          <div className="Header">
            <h1>출연배우</h1>
          </div>

          <SwiperSlider slidesPerView={8} spaceBetween={10}>
            {credits.cast?.map((actor: any, i: number) => (
              <SwiperSlide key={i}>
                <div className="carousel">
                  <Image
                    src={`${imgURL}/w300${actor.profile_path}`}
                    alt="carousel"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4>{actor.name}</h4>
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </section>

        <MovieSection
          slidesPerView={4}
          data={recommendItems}
          title={"추천영화"}
        />

        <MovieSection
          slidesPerView={4}
          data={similarsItems}
          title="비슷한 장르의 영화"
        />
      </Rap>
    </DetailVisualStyled>
  );
};

export default DetailVisual;
