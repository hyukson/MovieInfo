import Link from "next/link";
import { ReactNode } from "react";

import { MovieSectionStyled } from "./styled";

interface MovieSectionTypes {
  title: string;
  link?: string;
  children?: ReactNode;
}

const MovieSection = ({ title, link, children }: MovieSectionTypes) => {
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

      {children}
    </MovieSectionStyled>
  );
};

export default MovieSection;
