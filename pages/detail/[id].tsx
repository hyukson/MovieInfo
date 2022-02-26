import axios from "axios";
import Head from "next/head";

import type { GetServerSideProps, NextPage } from "next";

import DetailVisual from "~/components/organisms/DetailVisual";

import Header from "~/components/organisms/Header";

import TrailersSlider from "~/components/molecules/TrailersSlider";
import CreditsSlider from "~/components/molecules/CreditsSlider";
import MovieSlider from "~/components/molecules/MovieSlider";

import MovieSection from "~/components/atoms/MovieSection";
import Rap from "~/components/atoms/Rap";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";
import { DetailStyled } from "~/components/pageStyled/DetailStyled";
import { useEffect } from "react";
import PhotoSlider from "~/components/atoms/PhotoSlider";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Home: NextPage = ({
  item,
  trailers,
  credits,
  recommendItems,
  similarsItems,
  photos,
}: any) => {
  // 최근 본 영화
  useEffect(() => {
    const ls = localStorage;

    const preItems = JSON.parse(ls["watchList"] || "[]");

    // 종복 제거
    const findIndex = preItems.findIndex(
      (v: { id: number }) => item.id == v.id
    );

    if (findIndex != -1) {
      preItems.splice(findIndex, 1);
    }

    ls["watchList"] = JSON.stringify([{ id: item.id }, ...preItems]);
  }, []);

  return (
    <WrapStyled>
      <Head>
        <title>{item.original_title}</title>
      </Head>

      <Header />

      <DetailStyled>
        <DetailVisual item={item} />

        <Rap>
          {trailers.length ? (
            <MovieSection title="예고편">
              <TrailersSlider items={trailers} />
            </MovieSection>
          ) : (
            ""
          )}

          {credits.cast.length ? (
            <MovieSection title="출연배우">
              <CreditsSlider items={credits.cast} />
            </MovieSection>
          ) : (
            ""
          )}

          <MovieSection title="관련 이미지">
            <PhotoSlider items={photos} />
          </MovieSection>

          {recommendItems.length ? (
            <MovieSection title="추천영화">
              <MovieSlider slidesPerView={4} items={recommendItems} />
            </MovieSection>
          ) : (
            ""
          )}

          {similarsItems.length ? (
            <MovieSection title="비슷한 장르의 영화">
              <MovieSlider slidesPerView={4} items={similarsItems} />
            </MovieSection>
          ) : (
            ""
          )}
        </Rap>
      </DetailStyled>
    </WrapStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getAxios = async (url: string) => (await axios.get(url)).data;

  const language = "ko-KR";

  const { id } = context.query;

  // 상세정보
  const item = await getAxios(
    `${baseURL}/movie/${id}?api_key=${apiKEY}&language=${language}`
  );

  // 예고편
  const trailers = await getAxios(
    `${baseURL}/movie/${id}/videos?api_key=${apiKEY}&language=${language}`
  );

  // 출연진 / 제작진
  const credits = await getAxios(
    `${baseURL}/movie/${id}/credits?api_key=${apiKEY}&language=${language}`
  );

  // 추천영화
  const recommendations = await getAxios(
    `${baseURL}/movie/${id}/recommendations?api_key=${apiKEY}&language=${language}`
  );

  // 비슷한 영화
  const similars = await getAxios(
    `${baseURL}/movie/${id}/similar?api_key=${apiKEY}&language=${language}`
  );

  const photos = (
    await getAxios(`${baseURL}/movie/${id}/images?api_key=${apiKEY}`)
  ).backdrops;

  return {
    props: {
      item,
      trailers: trailers.results,
      credits,
      recommendItems: recommendations.results,
      similarsItems: similars.results,
      photos,
    },
  };
};

export default Home;
