import axios from "axios";

import type { GetServerSideProps } from "next";
import Head from "next/head";

import TopRatedContent from "~/components/organisms/TopRatedContent";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const language = "ko-KR";
const region = "KR";

const url = `${baseURL}/movie/top_rated?api_key=${apiKEY}&region=${region}&language=${language}`;

const topRated = ({ items }: any) => {
  return (
    <>
      <Head>
        <title>topRated Page</title>
      </Head>

      <TopRatedContent items={items} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = [];

  for (let i = 0; i < 8; i++) {
    const { results } = (await axios.get(url + `&page=${i + 1}`)).data;

    data.push(...results);
  }

  const results = data
    .sort((a: any, b: any) => Math.random() - Math.random())
    .splice(0, 30);

  return {
    props: {
      items: results,
    },
  };
};

export default topRated;
