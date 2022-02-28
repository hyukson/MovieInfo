import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};
  z-index: 2222;

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  a {
    display: inline-block;
    position: relative;
    padding: 0.6rem 1.3rem;
    font-size: 1.1rem;
    font-weight: bold;

    ::after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background: #000;
      transition: all 0.4s;
    }

    :hover::after {
      width: 100%;
    }
  }
`;
