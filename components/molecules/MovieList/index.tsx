import MovieItem from "~/components/atoms/MovieItem";

import { MovieListStyled } from "./styled";

interface MovieListTypes {
  items: any;
}

const MovieList = ({ items }: MovieListTypes) => {
  return (
    <MovieListStyled>
      {items.map((v: any, i: number) => {
        <MovieItem {...v} key={i} />;
      })}
    </MovieListStyled>
  );
};

export default MovieList;
