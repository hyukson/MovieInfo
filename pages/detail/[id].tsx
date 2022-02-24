import axios from "axios";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import DetailVisual from "~/components/organisms/DetailVisual";

import Header from "~/components/organisms/Header";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

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

      <DetailVisual
        item={item}
        trailers={trailers}
        credits={credits}
        recommendItems={recommendItems}
        similarsItems={similarsItems}
      />
    </WrapStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const language = "ko-KR";

  const { id } = context.query;

  // 상세정보
  const item = (
    await axios.get(
      `${baseURL}/movie/${id}?api_key=${apiKEY}&language=${language}`
    )
  ).data;

  // 예고편
  const trailers = (
    await axios.get(
      `${baseURL}/movie/${id}/videos?api_key=${apiKEY}&language=${language}`
    )
  ).data;

  // 출연진 / 제작진
  const credits = (
    await axios.get(
      `${baseURL}/movie/${id}/credits?api_key=${apiKEY}&language=${language}`
    )
  ).data;

  const recommendations = (
    await axios.get(
      `${baseURL}/movie/${id}/recommendations?api_key=${apiKEY}&language=${language}`
    )
  ).data;

  const similars = (
    await axios.get(
      `${baseURL}/movie/${id}/similar?api_key=${apiKEY}&language=${language}`
    )
  ).data;

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
