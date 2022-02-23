import axios from "axios";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import DetailVisual from "~/components/organisms/DetailVisual";

import Header from "~/components/organisms/Header";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Home: NextPage = ({ item, videos, credits }: any) => {
  console.log(item, videos, credits);

  return (
    <WrapStyled>
      <Head>
        <title>MovieDetail</title>
      </Head>

      <Header />

      <DetailVisual item={item} />
    </WrapStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const language = "ko-KR";

  const { id } = context.query;

  const item = (
    await axios.get(
      `${baseURL}/movie/${id}?api_key=${apiKEY}&language=${language}`
    )
  ).data;

  const videos = (
    await axios.get(
      `${baseURL}/movie/${id}/videos?api_key=${apiKEY}&language=${language}`
    )
  ).data;

  const credits = (
    await axios.get(`${baseURL}/movie/${id}/credits?api_key=${apiKEY}`)
  ).data;

  return {
    props: { item, videos: videos.results, credits },
  };
};

export default Home;
