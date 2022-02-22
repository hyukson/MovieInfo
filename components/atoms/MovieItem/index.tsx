import Image from "next/image";

import { MovieItemStyled } from "./styled";

interface MovieItemTypes {
  poster: string;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids: Array<string>;
}

const MovieItem = ({
  poster,
  title,
  vote_average,
  release_date,
  genre_ids,
}: MovieItemTypes) => {
  return (
    <MovieItemStyled>
      <div className="poster">
        <Image src={poster} alt="poster" layout="fill" />
      </div>
      <h2>{title}</h2>
      <p>평점 : {vote_average} / 10</p>
      <p>장르 : {genre_ids.join(", ")}</p>
      <p>개봉일자 : {release_date}</p>
    </MovieItemStyled>
  );
};

export default MovieItem;
