import MovieItem from "~/components/atoms/MovieItem";

import { MovieListStyled } from "./styled";

interface MovieListTypes {
  items: any;
  title: string;
}

const MovieList = ({ items, title }: MovieListTypes) => {
  return (
    <MovieListStyled>
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="list">
        {items.length ? (
          items.map((v: any, i: number) => <MovieItem {...v} key={i} />)
        ) : (
          <h2>데이터가 존재하지 않습니다.</h2>
        )}
      </div>
    </MovieListStyled>
  );
};

export default MovieList;
