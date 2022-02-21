import Image from "next/image";

import { MovieItemStyled } from "./styled";

interface MovieItemTypes {}

const MovieItem = ({}: MovieItemTypes) => {
  return (
    <MovieItemStyled>
      <div>
        <Image src="image" alt="poster" layout="fill" />
        <h2>title</h2>
        <p>grade</p>
        <p>date</p>
      </div>
    </MovieItemStyled>
  );
};

export default MovieItem;
