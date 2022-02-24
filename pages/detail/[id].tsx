import axios from "axios";
import Head from "next/head";

import type { GetServerSideProps, NextPage } from "next";

import DetailVisual from "~/components/organisms/DetailVisual";

import Header from "~/components/organisms/Header";
import MovieSection from "~/components/atoms/MovieSection";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

import TrailersSlider from "~/components/molecules/TrailersSlider";
import CreditsSlider from "~/components/molecules/CreditsSlider";
import MovieSlider from "~/components/molecules/MovieSlider";
import { DetailStyled } from "~/components/pageStyled/DetailStyled";
import Rap from "~/components/atoms/Rap";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Home: NextPage = ({
  item,
  trailers,
  credits,
  recommendItems,
  similarsItems,
}: any) => {
  return (
    <WrapStyled>
      <Head>
        <title>MovieDetail</title>
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

  const recommendations = await getAxios(
    `${baseURL}/movie/${id}/recommendations?api_key=${apiKEY}&language=${language}`
  );

  const similars = await getAxios(
    `${baseURL}/movie/${id}/similar?api_key=${apiKEY}&language=${language}`
  );

  return {
    props: {
      item,
      trailers: trailers.results,
      credits,
      recommendItems: recommendations.results,
      similarsItems: similars.results,
    },
  };
};

export default Home;
