import Link from "next/link";

import MovieSlider from "~/components/molecules/MovieSlider";

import { MovieSectionStyled } from "./styled";

interface MovieSectionTypes {
  title: string;
  link: string;
  data: any;
}

const MovieSection = ({ title, link, data }: MovieSectionTypes) => {
  return (
    <MovieSectionStyled>
      <div className="Header">
        <h1>{title}</h1>

        <Link href={link}>
          <a>더보기</a>
        </Link>
      </div>

      <MovieSlider items={data} />
    </MovieSectionStyled>
  );
};

export default MovieSection;
