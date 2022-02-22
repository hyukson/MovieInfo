import Link from "next/link";
import Rap from "~/components/atoms/Rap";

import { HeaderStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <Rap>
        <Link href="">
          <a href="">인기영화</a>
        </Link>
        <Link href="">
          <a href="">현재 상영영화</a>
        </Link>
        <Link href="">
          <a href="">개봉 예정영화</a>
        </Link>
        <Link href="">
          <a href="">최근본영화</a>
        </Link>
        <Link href="">
          <a href="">영화검색</a>
        </Link>
      </Rap>
    </HeaderStyled>
  );
};

export default Header;
