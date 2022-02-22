import styled from "styled-components";

export const MovieItemStyled = styled.div`
  color: ${(props) => props.theme.textColor};

  .poster {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 500px;
    margin-bottom: 2rem;
  }
`;
