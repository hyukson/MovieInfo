import Image from "next/image";

import { MovieItemStyled } from "./styled";

const imgURL = process.env.REACT_APP_IMG_URL;

interface MovieItemTypes {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const MovieItem = ({
  poster_path,
  title,
  vote_average,
  release_date,
}: MovieItemTypes) => {
  return (
    <MovieItemStyled>
      <div className="poster">
        <Image
          src={`${imgURL}/w500${poster_path}`}
          alt="poster"
          layout="fill"
        />
      </div>
      <h3>{title}</h3>
      <p>평점 : {vote_average} / 10</p>
      <p>개봉일자 : {release_date}</p>
    </MovieItemStyled>
  );
};

export default MovieItem;
