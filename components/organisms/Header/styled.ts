import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primary};

  display: flex;

  a {
    display: inline-block;
    padding: 0.6rem 1.3rem;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
