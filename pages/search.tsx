import axios from "axios";

import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

import Loading from "~/components/atoms/Loading";
import Rap from "~/components/atoms/Rap";

import MovieList from "~/components/molecules/MovieList";

import Header from "~/components/organisms/Header";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";
import useMovieSearch from "~/hooks/useMovieSearch";

import useScrollPagination from "~/hooks/useScrollPagination";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const language = "ko-KR";
const region = "KR";

const Search = () => {
  const [value, setValue] = useState("");

  const url = `${baseURL}/search/movie?api_key=${apiKEY}&language=${language}&query=${value}`;

  const { loading, items, clearPage } = useScrollPagination(url, []);

  return (
    <WrapStyled>
      <Head>
        <title>MovieInfo</title>
      </Head>

      <Header />

      {/* 페이징 로딩 */}
      <Loading loading={loading} />

      <Rap>
        <MovieList items={items} />
      </Rap>
    </WrapStyled>
  );
};

export default Search;
