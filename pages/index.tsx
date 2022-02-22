import axios from "axios";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Rap from "~/components/atoms/Rap";

import Header from "~/components/organisms/Header";

import MovieSection from "~/components/organisms/MovieSection";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const apiKEY = process.env.REACT_APP_MOVIE_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

const Home: NextPage = ({ data }: any) => {
  return (
    <WrapStyled>
      <Head>
        <title>MovieInfo</title>
      </Head>

      <Header />

      <Rap>
        <MovieSection title={"인기영화"} link="/popoulr" data={data} />
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
    props: { data: data.results },
  };
};

export default Home;
