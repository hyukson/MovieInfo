import Link from "next/link";
import styled from "styled-components";
import Rap from "~/components/atoms/Rap";

const Custom404Styled = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  text-align: center;

  h1 {
    color: ${(props) => props.theme.titleColor};
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.primary};
    margin-top: 2rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Custom404 = () => {
  return (
    <Custom404Styled>
      <Rap>
        <h1>정상적인 접근 방식이 아닙니다.</h1>
        <Link href="/">
          <a>초기화면으로</a>
        </Link>
      </Rap>
    </Custom404Styled>
  );
};

export default Custom404;
