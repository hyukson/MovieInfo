import axios from "axios";

import type { GetServerSideProps, NextPage } from "next";

import Rap from "~/components/atoms/Rap";

import Header from "~/components/organisms/Header";
import MovieSlider from "~/components/organisms/MovieSlider";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const apiKEY = process.env.REACT_APP_MOVIE_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

const Home: NextPage = ({ data }: any) => {
  return (
    <WrapStyled>
      <Header />

      <Rap>
        <MovieSlider items={data} />
      </Rap>
    </WrapStyled>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const language = "ko-KR";

  const { data } = await axios.get(
    `${baseURL}/movie/popular?api_key=${apiKEY}&language=${language}`
  );

  return {
    props: { data: data.results },
  };
};

export default Home;
