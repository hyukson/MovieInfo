import MovieItem from "~/components/atoms/MovieItem";

import { MovieListStyled } from "./styled";

interface MovieListTypes {
  items: any;
}

const MovieList = ({ items }: MovieListTypes) => {
  return (
    <MovieListStyled>
      {items.length ? (
        items.map((v: any, i: number) => <MovieItem {...v} key={i} />)
      ) : (
        <h2>데이터가 존재하지 않습니다.</h2>
      )}
    </MovieListStyled>
  );
};

export default MovieList;
