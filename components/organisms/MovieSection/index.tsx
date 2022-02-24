import Link from "next/link";

import MovieSlider from "~/components/molecules/MovieSlider";

import { MovieSectionStyled } from "./styled";

interface MovieSectionTypes {
  title: string;
  link?: string;
  data: any;
  slidesPerView?: number;
}

const MovieSection = ({
  title,
  link,
  data,
  slidesPerView,
}: MovieSectionTypes) => {
  return (
    <MovieSectionStyled>
      <div className="Header">
        <h1>{title}</h1>

        {link && (
          <Link href={link}>
            <a>더보기</a>
          </Link>
        )}
      </div>

      <MovieSlider items={data} slidesPerView={slidesPerView || 5} />
    </MovieSectionStyled>
  );
};

export default MovieSection;
