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

  .poster {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 480px;
    max-height: 480px;
    margin-bottom: 1.5rem;
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
