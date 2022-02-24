import axios from "axios";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Rap from "~/components/atoms/Rap";
import MovieList from "~/components/molecules/MovieList";

import Header from "~/components/organisms/Header";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Home: NextPage = ({ popular }: any) => {
  return (
    <WrapStyled>
      <Head>
        <title>MovieInfo</title>
      </Head>

      <Header />

      <Rap>
        <MovieList items={popular} />
      </Rap>
    </WrapStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const language = "ko-KR";

  const { data } = await axios.get(
    `${baseURL}/movie/popular?api_key=${apiKEY}&language=${language}`
  );

  return {
    props: { popular: data.results },
  };
};

export default Home;