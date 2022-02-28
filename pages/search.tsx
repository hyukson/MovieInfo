import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

import Loading from "~/components/atoms/Loading";
import Rap from "~/components/atoms/Rap";
import SearchForm from "~/components/atoms/SearchForm";

import MovieList from "~/components/molecules/MovieList";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

import useScrollPagination from "~/hooks/useScrollPagination";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const language = "ko-KR";
const region = "KR";

const Search = () => {
  const [value, setValue] = useState("");
  const [startItems, setItems] = useState([]);

  const url = `${baseURL}/search/movie?api_key=${apiKEY}&language=${language}&region=${region}&query=${value}`;

  const { loading, items, clearPage } = useScrollPagination(url, startItems);

  useEffect(() => {
    if (!value.trim()) {
      setItems([]);
      return;
    }

    axios.get(url).then((res) => {
      setItems(res.data.results);
    });
  }, [value]);

  useEffect(() => {
    clearPage(startItems, value);
  }, [startItems]);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* 페이징 로딩 */}
      <Loading loading={loading} />

      <Rap>
        <SearchForm onChange={onChange} />

        <MovieList items={items} />
      </Rap>
    </>
  );
};

export default Search;
