import Link from "next/link";

import { HeaderStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="menu">
        <div>
          <Link href="">
            <a href="">인기영화</a>
          </Link>
        </div>
        <div>
          <Link href="">
            <a href="">현재 상영영화</a>
          </Link>
        </div>
        <div>
          <Link href="">
            <a href="">개봉 예정영화</a>
          </Link>
        </div>
        <div>
          <Link href="">
            <a href="">최근본영화</a>
          </Link>
        </div>
      </div>

      <div className="searchForm">
        <input type="text" name="search" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
