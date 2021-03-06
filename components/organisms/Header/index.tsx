import Image from "next/image";
import Link from "next/link";

import Rap from "~/components/atoms/Rap";

import { HeaderStyled } from "./styled";

import Logo from "~images/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <Rap>
        <Link href="/">
          <a>
            <Image {...Logo} alt="logo" />
          </a>
        </Link>

        <Link href="/popular">
          <a>인기영화</a>
        </Link>
        <Link href="/nowPlaying">
          <a>현재상영작</a>
        </Link>
        <Link href="/upcoming">
          <a>개봉예정작</a>
        </Link>
        <Link href="/watch">
          <a>최근본영화</a>
        </Link>
        <Link href="/topRated">
          <a>명작추천</a>
        </Link>
        <Link href="/search">
          <a>영화검색</a>
        </Link>
      </Rap>
    </HeaderStyled>
  );
};

export default Header;
