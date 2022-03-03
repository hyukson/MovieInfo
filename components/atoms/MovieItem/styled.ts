import styled from "styled-components";

export const MovieItemStyled = styled.a`
  color: ${(props) => props.theme.textColor};
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.primary};

    h3 {
      color: ${(props) => props.theme.primary};
    }
  }

  h3 {
    font-size: 1.4rem;
    transition: all 0.3s;
    color: ${(props) => props.theme.titleColor};
  }

  p {
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }
`;
