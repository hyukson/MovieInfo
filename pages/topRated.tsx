import axios from "axios";

import type { GetServerSideProps } from "next";
import Head from "next/head";

import Header from "~/components/organisms/Header";
import TopRatedContent from "~/components/organisms/TopRatedContent";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const language = "ko-KR";
const region = "KR";

const url = `${baseURL}/movie/top_rated?api_key=${apiKEY}&region=${region}&language=${language}`;

const topRated = ({ items }: any) => {
  return (
    <WrapStyled>
      <Head>
        <title>MovieInfo</title>
      </Head>

      <Header />

      <TopRatedContent item={items[0]} />
    </WrapStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(url);

  const results = data.results.sort(
    (a: any, b: any) => Math.random() - Math.random()
  );

  return {
    props: {
      items: results,
    },
  };
};

export default topRated;
