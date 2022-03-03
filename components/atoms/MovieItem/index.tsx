import Link from "next/link";

import { MovieItemStyled } from "./styled";

import Poster from "../Poster";

interface MovieItemTypes {
  poster_path?: string;
  title: string;
  vote_average: number;
  release_date: string;
  id: number;
}

const MovieItem = ({
  poster_path,
  id,
  title,
  vote_average,
  release_date,
}: MovieItemTypes) => {
  return (
    <Link href={`/detail/${id}`} passHref>
      <MovieItemStyled>
        <Poster className="poster" path={poster_path} />

        <h3>{title}</h3>
        <p>평점 : {vote_average} / 10</p>
        <p>개봉일자 : {release_date}</p>
      </MovieItemStyled>
    </Link>
  );
};

export default MovieItem;
