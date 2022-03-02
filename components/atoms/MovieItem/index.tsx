import Image from "next/image";
import Link from "next/link";

import { MovieItemStyled } from "./styled";

import noImageIcon from "~/assets/icons/noImage.png";

const imgURL = process.env.NEXT_PUBLIC_IMG_URL;

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
        <div className="poster">
          <Image
            src={poster_path ? `${imgURL}/w500${poster_path}` : noImageIcon}
            alt="poster"
            layout="fill"
          />
        </div>
        <h3>{title}</h3>
        <p>평점 : {vote_average} / 10</p>
        <p>개봉일자 : {release_date}</p>
      </MovieItemStyled>
    </Link>
  );
};

export default MovieItem;
