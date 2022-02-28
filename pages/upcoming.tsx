import axios from "axios";

import type { GetServerSideProps } from "next";
import Head from "next/head";

import Loading from "~/components/atoms/Loading";
import Rap from "~/components/atoms/Rap";

import MovieList from "~/components/molecules/MovieList";

import useScrollPagination from "~/hooks/useScrollPagination";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const language = "ko-KR";
const region = "KR";

const url = `${baseURL}/movie/upcoming?api_key=${apiKEY}&region=${region}&language=${language}`;

const Upcoming = ({ startItems }: any) => {
  const { loading, items } = useScrollPagination(url, startItems);

  return (
    <>
      <Head>
        <title>Upcoming Page</title>
      </Head>

      {/* 페이징 로딩 */}
      <Loading loading={loading} />

      <Rap>
        <MovieList title="개봉예정작" items={items} />
      </Rap>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(url);

  return {
    props: { startItems: data.results },
  };
};

export default Upcoming;
