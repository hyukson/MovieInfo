import axios from "axios";

import Head from "next/head";
import { useEffect, useState } from "react";

import Rap from "~/components/atoms/Rap";

import MovieList from "~/components/molecules/MovieList";

import { WrapStyled } from "~/components/pageStyled/WrapStyled";

const apiKEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const language = "ko-KR";

const Watch = () => {
  const [items, setItems] = useState([]);

  const setInitData = async () => {
    const watchList = JSON.parse(localStorage["watchList"] || "[]");

    const results = await Promise.all(
      watchList.map(
        (v: any) =>
          new Promise((res) => {
            axios
              .get(
                `${baseURL}/movie/${v.id}?api_key=${apiKEY}&language=${language}`
              )
              .then((result) => res(result.data));
          })
      )
    );

    setItems(results as any);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <>
      <Head>
        <title>Watch Page</title>
      </Head>

      <Rap>
        <MovieList title="최근본영화" items={items} />
      </Rap>
    </>
  );
};

export default Watch;
