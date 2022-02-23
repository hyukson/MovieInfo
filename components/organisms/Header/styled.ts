import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};
  z-index: 2;

  display: flex;

  a {
    display: inline-block;
    padding: 0.6rem 1.3rem;
    font-size: 1.1rem;
    font-weight: bold;

    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      opacity: 0;
      background: #000;
      transition: all 0.4s;
      bottom: -50%;
    }

    :hover::after {
      opacity: 1;
      bottom: 0;
    }
  }
`;
