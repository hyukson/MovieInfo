import axios from "axios";

import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import Rap from "~/components/atoms/Rap";
import MovieSection from "~/components/atoms/MovieSection";

import MovieSlider from "~/components/molecules/MovieSlider";

import TopRatedContent from "~/components/organisms/TopRatedContent";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const Home: NextPage = ({
  popular,
  nowPlaying,
  upcoming,
  visualItems,
}: any) => {
  return (
    <>
      <Head>
        <title>MovieInfo</title>
      </Head>

      <TopRatedContent items={visualItems} />

      <Rap>
        <MovieSection title={"인기영화"} link="/popular">
          <MovieSlider items={popular} />
        </MovieSection>

        <MovieSection title={"현재 상영중인 영화"} link="/nowPlaying">
          <MovieSlider items={nowPlaying} />
        </MovieSection>

        <MovieSection title={"개봉 예정인 영화"} link="/upcoming">
          <MovieSlider items={upcoming} />
        </MovieSection>
      </Rap>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const language = "ko-KR";
  const region = "KR";

  const getAxios = async (url: string) =>
    (await axios.get(url)).data.results || [];

  const popular = await getAxios(
    `${baseURL}/movie/popular?api_key=${apiKEY}&language=${language}`
  );

  const topRated = await getAxios(
    `${baseURL}/movie/top_rated?api_key=${apiKEY}&region=${region}&language=${language}`
  );

  const nowPlaying = await getAxios(
    `${baseURL}/movie/now_playing?api_key=${apiKEY}&region=${region}&language=${language}`
  );

  const upcoming = await getAxios(
    `${baseURL}/movie/upcoming?api_key=${apiKEY}&region=${region}&language=${language}`
  );

  const visualItems = [...topRated, ...popular, ...nowPlaying, ...upcoming]
    .sort((a: any, b: any) => Math.random() - Math.random())
    .splice(0, 30);

  return {
    props: {
      popular: popular,
      nowPlaying: nowPlaying,
      upcoming: upcoming,
      visualItems,
    },
  };
};

export default Home;
